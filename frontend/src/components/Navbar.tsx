import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRole } from "../hooks/useRole";
import NavItem from "./NavbarListElement";
import { tenantNav } from "../data/tenantNav";
import { landlordNav } from "../data/landlordNav";

const NavBar = () => {
  const { currentRole, setCurrentRole } = useRole();
  const location = useLocation();

  // Sync role with current route: only for tenant and landlord pages.
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/landlord")) {
      setCurrentRole("landlord");
    } else if (path.startsWith("/tenant")) {
      setCurrentRole("tenant");
    }
    // No action for other paths.
  }, [location.pathname, setCurrentRole]);

  // Tenant NavBar
  const TenantNavBar = () => (
    <nav className="bg-neutral-900 p-4 w-full rounded-lg">
      <ul className="flex space-x-8 items-center justify-center">
        {tenantNav.map((item, index) => (
          <NavItem key={index} to={item.to} navLinkName={item.navLinkName} />
        ))}
      </ul>
    </nav>
  );

  // Landlord NavBar
  const LandlordNavBar = () => (
    <nav className="bg-neutral-900 p-4 w-full rounded-lg">
      <ul className="flex space-x-8 items-center justify-center">
        {landlordNav.map((item, index) => (
          <NavItem key={index} to={item.to} navLinkName={item.navLinkName} />
        ))}
      </ul>
    </nav>
  );

  // Render the appropriate navbar based on currentRole
  const currentNavBar = () => {
    switch (currentRole) {
      case "tenant":
        return <TenantNavBar />;
      case "landlord":
        return <LandlordNavBar />;
      default:
        return null;
    }
  };

  return (
    <header className="bg-neutral-950 shadow-sm h-16 z-10 w-full">
      <div className="p-2">{currentNavBar()}</div>
    </header>
  );
};

export default NavBar;
