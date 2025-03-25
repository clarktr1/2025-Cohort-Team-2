import "./App.css";
import TenantPage from "./pages/Tenant/Tenant";
import LandlordPage from "./pages/Landlord/Landlord";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/Home";
import { RoleProvider } from "./context/RoleProvider";
import AccessControls from "./pages/Tenant/AccessControls";
import TenantManagementPage from "./pages/Landlord/TenantManagement";
import TenantDeliveries from "./pages/Tenant/TenantDeliveries";
import TenantLeaseManagement from "./pages/Tenant/TenantLeaseManagement";
import CommunicationPage from "./pages/Landlord/Communications";

function App() {
  return (
    <RoleProvider>
      <Routes>
        {/* Layout is the parent route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="landlord" element={<LandlordPage />} />
          <Route path="tenant" element={<TenantPage />} />
          <Route path="access" element={<AccessControls />} />
          <Route path="tenant_management" element={<TenantManagementPage />} />
          <Route path="deliveries" element={<TenantDeliveries />} />
          <Route path="lease" element={<TenantLeaseManagement />} />
          <Route path="communication" element={<CommunicationPage />} />
        </Route>
      </Routes>
    </RoleProvider>
  );
}

export default App;
