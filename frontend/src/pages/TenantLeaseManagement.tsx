import React from 'react';
import { useState, useEffect, useCallback } from "react";
// import {FaFire} from 'react-icons/fa';

const LeaseManagement: React.FC = () => {

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
        const testText = document.getElementById("test-text");
        if(testText) {
            if(buttonName == "Pending"){
                setLeaseDisplayState(0);
                testText.innerHTML = leaseDisplayState.toString();
            } else if(buttonName == "Previous"){
                setLeaseDisplayState(1);
                testText.innerHTML = leaseDisplayState.toString();
            } else {
                setLeaseDisplayState(2);
                testText.innerHTML = leaseDisplayState.toString();
            }
        };
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
            {/* Background ----- fix it overflowing onto the sidebare */}
            <div className="flex items-center gap-10 justify-center place-items-start
                             bg-neutral-700 
                             felx-grow h-screen ml-22">
                
                {/* Title */}
                <div className="absolute top-0 left-0 right-0 bg-neutral-700  
                                h-22 w-screen
                                flex gap-0">
                    <h1 className="w-1/2 text-white text-4xl ml-22 p-4">
                        My Leases:
                    </h1>
                    <h1 id="test-text" className="w-1/2 bg-neutral-700   text-white text-4xl p-4">
                        Testing Text:
                    </h1>
                </div>
                

                {/* Display */}
                <div className="bg-neutral-900 rounded-2xl h-9/10 flex-grow mt-20 overflow-auto">
                    {/* Lease Data */}
                    {leaseData && leaseData.map((leaseItem) => {
                        if (leaseItem.signed === leaseDisplayState || leaseDisplayState == 2){
                            return <LeaseItem name={leaseItem.name} status={leaseItem.signed} s_date={leaseItem.s_date} e_date={leaseItem.e_date}/>
                        }
                    })}

                </div>
                {/* Lease Display */}
                <div id="lease-display" className="flex bg-red-600 rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-0">
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
            
            {/* <button onClick={() => setState(icon)}> {icon} </button> */}
            <button onClick={handleClick} className="relative items-center justify-center
                                                    h-8 w-20 mt-4 mb-2 mr-1.5 mx-auto shadow-lg
                                                    bg-neutral-700 text-white
                                                    hover:bg-orange-400 hover:text-black
                                                    rounded-3xl hover:rounded-xl
                                                    transition-all duration-300"> 
            {icon} </button>
        </div>
    );
};


//lease class and display opening
const LeaseItem = ({name, status, s_date, e_date}: {name: string, status: number, s_date: Date, e_date: Date}) => {
    
     //lease button click
    const leaseButtonClicked = () => {
        const testText = document.getElementById("test-text");
        const leaseDisplay = document.getElementById("lease-display")

        if(testText) {
            testText.innerHTML = "Lease Clicked: "+name;
        }
        if(leaseDisplay) {
            leaseDisplay.className = "bg-neutral-900 rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-100"
        }
    };

    return (
        <div className="lease-item">
            <button onClick={leaseButtonClicked} className="lease-button">
                <div className="w-35 ml-3 truncate text-left">{name}</div>
                <div id="statusText" className="w-35 truncate text-left">
                    {status == 1 ? "Completed" : "Signing Required"}
                </div>
                <div className="w-45 truncate text-left">{s_date.toDateString() + " - " + e_date.toDateString()}</div>
            </button>
        </div>
    );
};

export default LeaseManagement;