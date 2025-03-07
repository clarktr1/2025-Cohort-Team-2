import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname.startsWith("/landlord") || location.pathname.startsWith("/tenant");

  return (
    <div>
      {showHeader && <NavBar />}
      {/* This is where nested routes/components will be rendered */}
      <Outlet />
    </div>
  );
};

export default Layout;
