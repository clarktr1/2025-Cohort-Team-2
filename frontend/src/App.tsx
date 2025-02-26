import './App.css'
import { useState } from 'react'
import TenantPage from './components/TenantPage';
import LandlordPage from './components/LandlordPage';

type Page = 'entry' | 'tenant' | 'landlord';

function App() {

  // 'entry' is the default view; it will change when a user clicks on one of the buttons.
  const [currentPage, setCurrentPage] = useState<Page>('entry');

  if (currentPage === 'tenant') {
    return (
      <TenantPage />
    );
  }



  if (currentPage === 'landlord') {
    return (
      <LandlordPage />
    );
  }

  // Entry Page with Background Image, Dark Overlay, and Buttons
  return (
    <div className="relative w-full h-screen">
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
            onClick={() => setCurrentPage('landlord')}
            className="px-8 py-4 bg-orange-700 text-orange-100 font-semibold rounded-md hover:bg-orange-800 transition">
            Landlord
          </button>
          <button
            onClick={() => setCurrentPage('tenant')}
            className="px-8 py-4 bg-orange-200 text-stone-700 font-semibold rounded-md hover:bg-orange-100 transition">
            Tenant
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
