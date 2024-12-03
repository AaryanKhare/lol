import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="border-b sticky top-0 flex items-center justify-between px-10 py-4 bg-white dark:bg-slate-800">
            <Link to={'/blogs'} className="flex flex-col justify-center text-2xl font-bold">
                Medium
            </Link>
            <div className="flex items-center justify-evenly gap-4">
                <Link to={"/signin"}>
                    Sign in
                </Link>
                <Link to={"/signup"} className="px-4 py-2 bg-black text-white rounded-full">
                    Get Started
                </Link>
            </div>
        </header>
    )
}
