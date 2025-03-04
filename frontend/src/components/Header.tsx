import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useRole } from "../hooks/useRole";

const Header = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentRole, setCurrentRole } = useRole();
  const location = useLocation();

  // Sync role with current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/landlord') {
      setCurrentRole("landlord");
    } else if (path === '/tenant') {
      setCurrentRole("tenant");
    } else if (path === '/') {
      setCurrentRole("entry");
    }
  }, [location.pathname, setCurrentRole]);

  //actually use page parameters to determine the navbar also maybe. the click case works but should be used also. double check.

  const EntryNavbar = () => (
    <ul className="flex gap-2">
      <li>
        <Link
          to={"/landlord"}
          onClick={() => {
            setCurrentRole("landlord");
          }}
          className="rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-semibold p-2"
        >
          Landlord
        </Link>
      </li>
      <li>
        <Link
          to={"/tenant"}
          onClick={() => {
            setCurrentRole("tenant");
          }}
          className="rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-semibold p-2"
        >
          Tenant
        </Link>
      </li>
    </ul>
  );



  const TenantNavBar = () => (
    <nav className="bg-neutral-900 p-4 w-full rounded-lg">
      <ul className="flex space-x-8 items-center justify-center">
        <li>
          <Link to="/" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/lease" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Lease Management
          </Link>
        </li>
        <li>
          <Link to="/payments" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Payments
          </Link>
        </li>
        <li>
          <Link to="/access" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Access Controls
          </Link>
        </li>
        <li>
          <Link to="/maintenance" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Maintenance
          </Link>
        </li>
        <li>
          <Link to="/deliveries" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Deliveries
          </Link>
        </li>
        <li>
          <Link to="/complaints" className="text-orange-100 text-md hover:text-orange-400 hover:font-medium">
            Complaints
          </Link>
        </li>
      </ul>
    </nav>
  );

  const LandlordNavBar = () => (
    <div>
      <h1>Landlord NavBar</h1>
    </div>
  );

  const currentNavBar = () => {
    switch (currentRole) {
      case "entry":
        return <EntryNavbar />;
      case "landlord":
        return <LandlordNavBar />;
      case "tenant":
        return <TenantNavBar />;
      default:
        return <EntryNavbar />;
    }
  };

  return (
    <header className="bg-neutral-950 shadow-sm h-16 z-10 w-full">
      {/* <div className="max-w-full mx-auto  h-full"> */}
      {/* <div className="flex justify-between items-center h-full">
          <div className="flex items-center"> */}
      <ul className="p-2">
        {currentNavBar()}
      </ul>
      {/* </div> */}

      {/* <div className="flex-1 flex justify-end">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="max-w-xs bg-gray-50 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                      A
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
