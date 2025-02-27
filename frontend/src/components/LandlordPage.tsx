import { Link, Route, Routes } from "react-router";
import LandlordHeader from "./landlord/LandlordHeader";


const LandlordPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <nav>
            <Link to={'/landlord'}>Dashboard</Link>
        </nav>

        <Routes>
            <Route index element={<LandlordHeader />} />
        </Routes>
      </div>
    );
}

export default LandlordPage