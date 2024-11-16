import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
export const FullBlog = ({blog}:{blog: Blog}) => {
    return <div>
            <Appbar/>
            <div className="justfiy-center flex">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className=" col-span-8">
                    <div className="text-5xl font-extrabold">
                    {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        posted on 2nd december 2023
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="cols-span-4">
                    <div className="text-slate-600 text-lg">
                        Auhtor
                    </div>
                    <div className="flex-w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size = "big" name = {blog.author.name || "anonymomus"} ></Avatar>
                        </div>
                        <div className="text-xl font-bold">
                    {blog.author.name || "anonymous"}
                </div>
                    </div>
                </div>
               
                <div>

                </div>
            </div>
        </div>
        </div>
}