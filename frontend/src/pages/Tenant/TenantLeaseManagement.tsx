import React from 'react';
import { useState, useEffect, useCallback } from "react";
import LeaseDisplay from '../../components/LeaseDisplay';
// import {FaFire} from 'react-icons/fa';

const TenantLeaseManagement: React.FC = () => {

    //display functions
    const leaseClosed = () => {
        const leaseDisplay = document.getElementById("lease-display");
        if(leaseDisplay) {
            leaseDisplay.className = "bg-neutral-900 rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-0"
        }
    };

    //least item logic
    interface LeaseItem {
        name: string,
        signed: number,
        s_date: Date,
        e_date: Date
    }

    const [leaseData, setData] = useState<LeaseItem[] | null>(null);
    const [leaseDisplayState, setLeaseDisplayState] = useState<number>(0);

    const sbButtonClicked = (buttonName: string) => {
        if(buttonName == "Pending"){
            setLeaseDisplayState(0);
        } else if(buttonName == "Previous"){
            setLeaseDisplayState(1);
        } else {
            setLeaseDisplayState(2);
        }
    };
    

    useEffect(() => {
        const testData = [
            {
                name: "Lease 1 - let us see what happens if this is long as shit again",
                signed: 1,
                s_date: new Date(2024, 1, 5),
                e_date: new Date(2025, 12, 5)
            },
            {
                name: "Lease 2",
                signed: 1,
                s_date: new Date(2024, 1, 5),
                e_date: new Date(2025, 12, 5)
            },
            {
                name: "Lease 3",
                signed: 0,
                s_date: new Date(2020, 0, 10),
                e_date: new Date(2024, 10, 5)
            },
            {
                name: "Lease 4",
                signed: 0,
                s_date: new Date(2022, 10, 4),
                e_date: new Date(2025, 12, 9)
            },
        ]
        setData(testData)
    }, [])

    return (
        <>

        <div className="bg-neutral-950 h-full p-2">
            {/* Background ----- fix it overflowing onto the sidebare */}

             <div className='flex'>
             <div className="flex flex-col  bg-neutral-900 items-center flex-1 h-screen p-2 rounded-lg">
                
                {/* Title */}
                    <h1 className="font-bold text-orange-100 my-10 text-center tracking-widest text-4xl">
                        My Leases:
                    </h1>

                {/* Display */}
                <div className="w-full h-auto flex-grow mt-10 p-2 rounded-lg">
                    {/* Lease Data */}
                    {leaseData && leaseData.map((leaseItem) => {
                        if (leaseItem.signed === leaseDisplayState || leaseDisplayState == 2){
                            return <LeaseItem name={leaseItem.name} status={leaseItem.signed} s_date={leaseItem.s_date} e_date={leaseItem.e_date}/>
                        }
                    })}

                </div>
            </div>

                            {/* Lease Display */}
                            <div id="lease-display" className="flex flex-1 bg-red-600 rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-0">
                    <div className="bg-neutral-900 rounded-lg p-6 max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-orange-200 mb-6">Lease Signing Portal</h1>

                        <div className="bg-neutral-800 p-4 rounded-lg mb-6">
                            <p className="text-white mb-4">Please review the document below and sign at the bottom.</p>

                            {/* Document preview area */}
                            <LeaseDisplay lease_id={123456} tenant_name="Tenant Name" landlord_name="Landlord Name" date_created={new Date("2020-06-15")} date_signed={new Date()} date_end={new Date("2027-08-15")}></LeaseDisplay>

                            {/* Signature area */}
                            <div className="border border-dashed border-gray-500 h-32 bg-neutral-700 rounded-lg flex items-center justify-center mb-4">
                            <p className="text-gray-400">Click or drag to sign here</p>
                            </div>

                            <div className="flex justify-between">
                            <button 
                                className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-600"
                                onClick={leaseClosed}
                            >
                                Close Lease
                            </button>
                            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                                Submit Signed Lease
                            </button>
                            </div>
                        </div>
                    
                    </div>

                </div>
             </div>
         

        

            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-22 m-0 
                            flex flex-col
                            bg-neutral-800 text-white shadow-lg">

                {/* top of screen buffer */}
                <div className="bg-neutral-800 h-1/10 w-2"></div>

                {/* buttons for display */}
                <SideBarIcon icon="All" setState={sbButtonClicked}/>
                <SideBarIcon icon="Pending" setState={sbButtonClicked}/>
                <SideBarIcon icon="Previous" setState={sbButtonClicked}/>
            </div>
            </div>
        </>
    );
};

//sidebar class and associated tooltips
const SideBarIcon:React.FC<{icon: string, setState: (clickedName: string) => void}> = ({ 
    icon, 
    setState 
}) => {

    const handleClick = useCallback(() => setState(icon), [setState, icon]);

    return (
        <div className="relative group">
            <button onClick={handleClick} className="relative items-center justify-center
                                        h-8 w-20 mt-4 mb-2 mr-1.5 mx-auto
                                        border-2 border-orange-500 text-orange-100
                                        hover:bg-orange-500 hover:text-black
                                        rounded-lg
                                        transition-all duration-300"> 
            {icon} </button>
        </div>
    );
};


//lease class and display opening
const LeaseItem = ({name, status, s_date, e_date}: {name: string, status: number, s_date: Date, e_date: Date}) => {
    
     //lease button click
    const leaseButtonClicked = () => {
        const leaseDisplay = document.getElementById("lease-display")

        if(leaseDisplay) {
            leaseDisplay.className = "bg-neutral-900 rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-100"
        }
    };

    return (
        <div className="relative flex items-center justify-center h-12 flex-grow ">
            <button onClick={leaseButtonClicked} className="relative flex items-start justify-start place-items-start
                                                        h-12 flex-grow gap-10 overflow-hidden divide-y divide-orange-500
                                                        text-orange-100 hover:bg-orange-400 hover:text-black duration-300">
                <div className="w-35 ml-3 truncate text-left">{name}</div>
                <div id="statusText" className="w-35 truncate text-left 0">
                    {status == 1 ? "Completed" : "Signing Required"}
                </div>
                <div className="w-45 truncate text-left">{s_date.toDateString() + " - " + e_date.toDateString()}</div>
            </button>
        </div>

       
    );
};

export default TenantLeaseManagement;