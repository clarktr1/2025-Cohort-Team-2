import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRole } from "../../hooks/useRole";



const HomePage = () => {
  const { setCurrentRole } = useRole();

  // Reset to entry state when landing on homepage
  useEffect(() => {
    setCurrentRole("entry");
  }, [setCurrentRole]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/apartment_bg_img.jpg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-900/75" />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <div className="flex space-x-4">
          <button
            className="px-8 py-4 bg-orange-700 text-orange-100 font-semibold rounded-md hover:bg-orange-800 transition"
          >
            <Link to={'/landlord'}>Landlord</Link>
          </button>
          <button
            className="px-8 py-4 bg-orange-200 text-stone-700 font-semibold rounded-md hover:bg-orange-100 transition"
          >
            <Link to={'/tenant'}>Tenant</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
