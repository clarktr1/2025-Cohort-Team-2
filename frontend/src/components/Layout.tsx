import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Navbar";

const Layout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div>
      {!isHomePage && <NavBar />}
      <Outlet />
    </div>
  );
};

export default Layout;

