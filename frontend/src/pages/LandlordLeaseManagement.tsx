import React from 'react';
import { useState, useEffect, useCallback } from "react";
// import {FaFire} from 'react-icons/fa';

const LeaseManagement: React.FC = () => {

    //display functions
    const leaseClosed = () => {
        const leaseDisplay = document.getElementById("lease-display");
        if(leaseDisplay) {
            leaseDisplay.className = "bg-neutral-900 rounded-3xl h-9/10 w-1/2 p-4 mt-20 mr-5 overflow-auto scale-0"
        }
    };

    //least item logic
    interface userItem {
        name: string,
        title: string,
        email: string,
        role: string
    }

    const [userData, setData] = useState<userItem[] | null>(null);
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
                name: "Lindsay Walton",
                title:"Front End Developer",
                email: "lindsay.walton@example.com",
                role: "Member"
            },
            {
                name: "Sindsay Galton",
                title:"Back End Developer",
                email: "sindsay.galton@example.com",
                role: "Admin"
            },
            {
                name: "Kindsay Balton",
                title:"Professional Googler",
                email: "kindsay.balton@example.com",
                role: "College Student"
            },
            {
                name: "Mindsay Malton",
                title:"Semicolon Implementer",
                email: "mindsay.malton@example.com",
                role: "Boss's Cousin"
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
                        Tenants:
                    </h1>
                    <h1 id="test-text" className="w-1/2 bg-neutral-700   text-white text-4xl p-4">
                        Testing Text:
                    </h1>
                </div>
                

                {/* Display */}
                <div className="bg-neutral-900 rounded-2xl h-9/10 flex-grow mt-20 overflow-auto">

                        {/* Table */}
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-orange-500">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-orange-100 sm:pl-0"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Title
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Role
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                                >
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-orange-500">
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                    Lindsay Walton
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    Front-end Developer
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    lindsay.walton@example.com
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    Member
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <button className="text-orange-500 hover:text-orange-400">
                                                        Assign<span className="sr-only">, Lindsay Walton</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            {/* More rows... */}
                                        </tbody>
                                        {userData && userData.map((userItem) => {
                                            return <UserItem name={userItem.name} title={userItem.title} email={userItem.email} role={userItem.role}/>
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* End Table */}
 
                </div>

                



                {/* Lease Display */}
                <div id="lease-display" className="flex bg-red-600 rounded-3xl h-9/10 w-1/2 p-4 mt-20 mr-5 overflow-auto scale-0">
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
const UserItem = ({name, title, email, role}: {name: string, title: string, email: string, role: string}) => {
    
     //lease button click
    const userButtonClicked = () => {
        const testText = document.getElementById("test-text");
        const leaseDisplay = document.getElementById("lease-display")

        if(testText) {
            testText.innerHTML = "Lease Clicked: "+name+title+email+role;
        }
        if(leaseDisplay) {
            leaseDisplay.className = "bg-neutral-900 rounded-3xl h-9/10 w-1/2 p-4 mt-20 mr-5 overflow-auto scale-100"
        }
    };

    return (
        <div className="lease-item">
            <button onClick={userButtonClicked} className='hover:bg-orange-400 duration-300'>
                <tbody className="divide-y divide-orange-500">
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                            {name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                            {title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                            {email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                            {role}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <button className="text-orange-500 hover:text-orange-400">
                                Assign<span className="sr-only">, Lindsay Walton</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
                {/* <div className="w-35 ml-3 truncate text-left">{name}</div>
                <div id="statusText" className="w-35 truncate text-left">
                    {status == 1 ? "Completed" : "Signing Required"}
                </div>
                <div className="w-45 truncate text-left">{"Testing, used to have the two dates"}</div> */}
            </button>
        </div>
    );
};

export default LeaseManagement;