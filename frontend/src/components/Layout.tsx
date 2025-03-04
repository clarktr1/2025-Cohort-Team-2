import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* This is where nested routes/components will be rendered */}
      <Outlet />
    </div>
  );
};

export default Layout;
