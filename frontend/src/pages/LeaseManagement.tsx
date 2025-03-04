import React from 'react';
import { useState, useEffect } from "react";
// import {FaFire} from 'react-icons/fa';

const LeaseManagement: React.FC = () => {

    //display functions
    const leaseClosed = () => {
        const leaseDisplay = document.getElementById("lease-display");
        if(leaseDisplay) {
            leaseDisplay.className = "bg-white rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-0"
        }
    };

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
                    {/* Header */}
                    <LeaseItem name="lease1 this is testing bc this might be long" status={0} date="02/19"/>
                    <LeaseItem name="lease2" status={0} date="10/02"/>
                    <LeaseItem name="lease3" status={1} date="10/02"/>
                    <LeaseItem name="lease4" status={1} date="10/02"/>
                </div>
                {/* Lease Display */}
                <div id="lease-display" className="bg-white rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-0">
                    <button onClick={leaseClosed} className="absolute top-2 right-4 text-black scale-150
                                     hover:text-orange-400 rounded-3xl hover:rounded-xl transition-all duration-300 ">
                        X
                    </button>
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
const SideBarIcon = ({ icon, text = 'tooltip' }: {icon: string, text: string}) => {
    
    //logic for sidebar button click
    const [sidebarStatus, setSidebarStatus] = useState("All");

    const sbButtonClicked = () => {
        const testText = document.getElementById("test-text");
        if(testText) {
            setSidebarStatus(icon);
            testText.innerHTML = sidebarStatus;
        };
    };

    useEffect(() => {
        const leaseDisplay = document.getElementById("lease-display");
        if (leaseDisplay) {
            const childElements = leaseDisplay.querySelectorAll("div"); // Select all divs inside
            console.log("reached inside if")
            childElements.forEach((child) => {
                child.className = "scale-0"
            });
        }
    }, [sidebarStatus]);

    return (
        <div className="sidebar-name group">
            
            <button onClick={sbButtonClicked}> {icon} </button>

            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
};


//lease class and display opening
const LeaseItem = ({name, status, date}: {name: string, status: number, date: string}) => {
    
     //lease button click
    const leaseButtonClicked = () => {
        const testText = document.getElementById("test-text");
        const leaseDisplay = document.getElementById("lease-display")

        if(testText) {
            testText.innerHTML = "Lease Clicked: "+name;
        }
        if(leaseDisplay) {
            leaseDisplay.className = "bg-white rounded-3xl h-9/10 w-3/5 p-4 mt-20 mr-5 overflow-auto scale-100"
        }
    };

    return (
        <div className="lease-item">
            <button onClick={leaseButtonClicked} className="lease-button">
                <div className="w-35 ml-3 truncate">{name}</div>
                <div id="statusText" className="w-35 ml-3 truncate">
                    {status == 1 ? "Completed" : "Signing Required"}
                </div>
                <div>{date}</div>
            </button>
        </div>
    );
};

export default LeaseManagement;