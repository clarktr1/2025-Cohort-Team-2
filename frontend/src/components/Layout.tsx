import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar";

const Layout = () => {
  const { pathname } = useLocation();
  console.log("Current pathname:", pathname);
  const isHomePage = pathname === "/";

  return (
    <div>
      {!isHomePage && <NavBar />}
      <Outlet />
    </div>
  );
};

export default Layout;

