import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { MasterLayout } from "./layouts/MasterLayout";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: "",
        element: <MasterLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <App />
            },
            {
                path: '/blogs',
                element: <App />
            }
        ]
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup />
    },

])

export default function RouteList() {
    return <RouterProvider router={router} />
}