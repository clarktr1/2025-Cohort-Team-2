import React from 'react';
// import {FaFire} from 'react-icons/fa';

const LeaseManagement: React.FC = () => {
    return (
        <>
            {/* Background ----- fix it overflowing onto the sidebare */}
            <div className="flex items-center gap-10 justify-center place-items-start
                             bg-neutral-700 
                             felx-grow h-screen ml-22">
                
                {/* Titles */}
                <div className="absolute top-0 left-0 right-0 bg-neutral-700  h-22 w-screen">
                    <h1 className="top-0 left-0 right-0 text-white text-4xl ml-22 p-4">
                        My Leases:
                    </h1>
                </div>
                

                {/* Display */}
                <div className="bg-neutral-900 rounded-2xl h-9/10 flex-grow mt-20 overflow-auto">
                    {/* Header */}
                    <LeaseItem name="lease1" />
                    <LeaseItem name="lease2" />
                    <LeaseItem name="lease3" />
                    <LeaseItem name="lease4" />
                </div>
                <div className="bg-blue-200 rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-0">
                </div>
            </div>

            

            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-22 m-0 
                            flex flex-col
                            bg-neutral-800 text-white shadow-lg">

                {/* top of screen buffer */}
                <div className="bg-neutral-800 h-1/10 w-2"></div>

                {/* buttons for display */}
                <SideBarIcon icon="All" text="tbd"/>
                <SideBarIcon icon="Pending" text="tbd"/>
                <SideBarIcon icon="Previous" text="tbd"/>
            </div>
        </>
    );
};



//sidebar class and associated tooltips
const SideBarIcon = ({ icon, text = 'tooltip' }: {icon: string, text: string}) => (
    <div className="sidebar-name group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);


//sidebar class and associated tooltips
const LeaseItem = ({ name}: {name: string}) => (
    <div className="lease-item">
        {name}
    </div>
);

export default LeaseManagement;