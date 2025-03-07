import "./App.css";
import TenantPage from "./pages/Tenant/Tenant";
import LandlordPage from "./pages/Landlord/Landlord";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/Home";
import { RoleProvider } from "./context/RoleProvider";

function App() {
  return (
    <RoleProvider>
      <Routes>
        {/* Layout is the parent route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="landlord" element={<LandlordPage />} />
          <Route path="tenant" element={<TenantPage />} />
        </Route>
      </Routes>
    </RoleProvider>
  );
}

export default App;
