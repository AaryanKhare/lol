import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MasterLayout() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
