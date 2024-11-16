import { Outlet } from "react-router-dom";
import { Navigation } from "../shared/components/Navigation";

export function DefaultLayout() {
  return (
    <>
      <Navigation />
      <div className="p-3 mx-auto max-w-2xl">
        <Outlet />
      </div>
    </>
  )
}