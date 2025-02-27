import './App.css'
import { useState } from 'react'

type Page = 'entry' | 'tenant' | 'landlord' | 'lease-signing';

function App() {

  // 'entry' is the default view; it will change when a user clicks on one of the buttons.
  const [currentPage, setCurrentPage] = useState<Page>('entry');

  if (currentPage === 'lease-signing') {
    return (
      <div className="bg-neutral-950 min-h-screen p-4 overflow-hidden relative">
        <div className="bg-neutral-900 rounded-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-orange-200 mb-6">Lease Signing Portal</h1>
          
          <div className="bg-neutral-800 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-orange-200 mb-2">Apartment Lease Agreement</h2>
            <p className="text-white mb-4">Please review the document below and sign at the bottom.</p>
            
            {/* Document preview area */}
            <div className="bg-white h-96 rounded overflow-auto p-2 mb-4">
              <p className="text-black">Lease agreement content would appear here...</p>
            </div>
            
            {/* Signature area */}
            <div className="border border-dashed border-gray-500 h-32 bg-neutral-700 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400">Click or drag to sign here</p>
            </div>
            
            <div className="flex justify-between">
              <button 
                className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-600"
                onClick={() => setCurrentPage('tenant')}
              >
                Back to Dashboard
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Submit Signed Lease
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'tenant') {
    return (
      <div className="bg-neutral-950 h-screen p-4">
        <div className="flex h-3/5 rounded-lg overflow-hidden gap-4">
          <div className="w-full rounded-lg overflow-hidden relative">
            {/* Background Image */}
            <img
              src="/apartment_bg_img.jpg"
              alt="Background"
              className="absolute inset-0 object-cover w-full h-full"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-neutral-900/75" />
            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-medium text-orange-200 drop-shadow-lg text-center">
                Welcome to <span className='text-orange-600 font-bold'>Smart Living</span>
              </h1>
              <h2 className="mt-4 text-2xl font-bold text-orange-200 drop-shadow-md text-center">
                Experience comfort, embrace innovation.
              </h2>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
            <p className="text-white mb-2">
              Notification 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-white mb-2">
              Notification 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-white">
              Notification 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="absolute bottom-4 left-4 bg-neutral-900 rounded-lg p-4 w-1/3">
          <h2 className="text-2xl font-bold text-orange-200 mb-4">Lease Documents</h2>
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-200 mb-2">Apartment Lease</h3>
            <p className="text-white mb-4">Your current lease agreement for Unit #304, valid until December 31, 2025.</p>
            <div className="flex justify-between items-center">
              <span className="text-orange-400">Status: Pending Signature</span>
              <button 
                className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700"
                onClick={() => setCurrentPage('lease-signing')}
              >
                Sign Now
              </button>
            </div>
          </div>
        </div>

        </div>
      </div>
    );


  // Return the entry page (or other pages as needed)
  return (
    <div className="bg-neutral-950 h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <button 
          className="bg-orange-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-orange-700"
          onClick={() => setCurrentPage('tenant')}
        >
          Enter as Tenant
        </button>
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700"
          onClick={() => setCurrentPage('landlord')}
        >
          Enter as Landlord
        </button>
      </div>
    </div>
  );
  }



  if (currentPage === 'landlord') {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Landlord Page</h1>
      </div>
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
