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
import Complaints from "./pages/Tenant/Complaints";
import AccessControlsLandlord from "./pages/Landlord/AccessControls";
<<<<<<< HEAD
import LandlordComplaints from "./pages/Landlord/Complaints";
=======
import CommunicationPage from "./pages/Landlord/Communications";
>>>>>>> dev

function App() {
  return (
    <RoleProvider>
      <Routes>
        {/* Layout is the parent route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="landlord" element={<LandlordPage />} />
          <Route path="tenant" element={<TenantPage />} />
          <Route path="tenant/access" element={<AccessControls />} />
          <Route path="landlord/tenant_management" element={<TenantManagementPage />} />
          <Route path="tenant/deliveries" element={<TenantDeliveries />} />
          <Route path="tenant/lease" element={<TenantLeaseManagement />} />
          <Route path="tenant/complaints" element={<Complaints />} />
          <Route path="landlord/access" element={<AccessControlsLandlord />} />
<<<<<<< HEAD
          <Route path="landlord/complaints" element={<LandlordComplaints />} />
=======
          <Route path="landlord/communication" element={<CommunicationPage />} />
>>>>>>> dev
        </Route>
      </Routes>
    </RoleProvider>
  );
}

export default App;
