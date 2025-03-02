import "./App.css";
import TenantPage from "./components/TenantPage";
import LandlordPage from "./components/LandlordPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import { RoleProvider } from './context/RoleContext';


function App() {

  // Entry Page with Background Image, Dark Overlay, and Buttons
  return (
    <RoleProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/landlord" element={<LandlordPage />} />
          <Route path="/tenant" element={<TenantPage />} />
        </Route>
      </Routes>
    </RoleProvider>
  );
}

export default App;
