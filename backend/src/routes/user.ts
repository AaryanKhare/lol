import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signupInput, signinInput } from "@100xdevs/medium-common";
import { AUTH_FAILED } from "../constants";
import ApiError from "../utilities/ApiError";
import ApiResponse from "../utilities/ApiResponse";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(409);
    return c.json({
      message: "inputs aren't correct"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.create({
      data: {
        email: body.username,
        password: body.password,
        name: body.name
      },
    })

    c.status(201)

    return c.json(new ApiResponse(
      user,
      "Account created!")
    );
  }
  catch (e) {
    console.log(e);
    c.status(500);
    return c.json(new ApiError(500, e.message))
  }
})

userRouter.post('/signin', async (c) => {

  const body = await c.req.json();
  const { success, error } = signinInput.safeParse(body);
  if (!success) {
    c.status(409);

    const errorMessages = error.issues.map((e) => e.message);

    return c.json(new ApiError(409, "inputs are not correct", errorMessages))
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.username,
        password: body.password,
      },
    })
    if (!user) {
      c.status(401);
      return c.json(new ApiError(401, AUTH_FAILED))
    }
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)

    return c.text(jwt)
  }
  catch (e) {
    console.log(e);
    c.status(401);
    return c.json(new ApiError(401, AUTH_FAILED))
  }
})
