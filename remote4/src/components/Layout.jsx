import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Navigation />
    </div>
  )
}

export default Layout;