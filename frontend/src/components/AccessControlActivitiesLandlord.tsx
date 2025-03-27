import React, { useState } from "react";
import ViewRecordModal from "./ViewRecordModal";
import WithdrawRecordModal from "./WithdrawRecordModal";
import { RecordData } from "../types/types";

const dummyActivities: RecordData[] = [
    {
        apartmentNumber: "101",
        tenantName: "Chewbacca",
        activityName: "Guest Key",
        startDate: "03/12/2025",
        endDate: "03/19/2025",
        status: "Expired",
        description: "Guest key for front door.",
    },
    {
        apartmentNumber: "202",
        tenantName: "John Smith",
        activityName: "Parking Permit",
        startDate: "03/17/2025",
        endDate: "03/25/2025",
        status: "Active",
        carModel: "Honda Civic",
        carColor: "Blue",
    },
    {
        apartmentNumber: "303",
        tenantName: "Mike Brown",
        activityName: "Package Room",
        startDate: "04/01/2025",
        endDate: "04/01/2025",
        status: "Expired",
    },
    {
        apartmentNumber: "404",
        tenantName: "Diana Prince",
        activityName: "Guest Key",
        startDate: "04/05/2025",
        endDate: "04/12/2025",
        status: "Active",
        description: "Temporary guest key for a party.",
    },
];


const AccessControlActivitiesTable: React.FC = () => {
    // State for the "view" modal.
    const [selectedRecord, setSelectedRecord] = useState<RecordData | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    // State for the "withdraw" modal.
    const [selectedWithdrawRecord, setSelectedWithdrawRecord] = useState<RecordData | null>(null);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

    const openViewModal = (record: RecordData) => {
        setSelectedRecord(record);
        setIsViewModalOpen(true);
    };

    const closeViewModal = () => {
        setIsViewModalOpen(false);
        setSelectedRecord(null);
    };

    const openWithdrawModal = (record: RecordData) => {
        setSelectedWithdrawRecord(record);
        setIsWithdrawModalOpen(true);
    };

    const closeWithdrawModal = () => {
        setIsWithdrawModalOpen(false);
        setSelectedWithdrawRecord(null);
    };

    // Dummy function to simulate updating a record after withdrawal.
    const handleWithdraw = (updatedRecord: RecordData) => {
        console.log("Record updated:", updatedRecord);
        // In a real application, update your record in state or trigger a re-fetch.
    };

    return (
        <div className="bg-neutral-900 rounded-lg p-6">
            <div className="mx-auto max-w-7xl">
                {/* Dashboard Header */}
                <header className="mb-6">
                    <h1 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">
                        Your Activity Logs
                    </h1>
                </header>
                {/* Dashboard Content */}
                <div className="bg-neutral-900 rounded-lg">
                    <div className="mx-auto max-w-7xl">
                        <div className="bg-neutral-900 py-10 rounded-lg">
                            <div className="px-4 sm:px-6 lg:px-8">
                                {/* Table */}
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-orange-500">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-orange-100 sm:pl-0"
                                                        >
                                                            Activity
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100"
                                                        >
                                                            Start Date/Time
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100"
                                                        >
                                                            End Date/Time
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100"
                                                        >
                                                            Status
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-right text-lg font-semibold text-orange-100"
                                                        >
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-500">
                                                    {dummyActivities.map((activity, index) => (
                                                        <tr key={index}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                                {activity.activityName}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                                {activity.startDate}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                                {activity.endDate}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                                {activity.status}
                                                            </td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                {activity.status.toLowerCase() === "expired" ? (
                                                                    <button
                                                                        onClick={() => openViewModal(activity)}
                                                                        className="text-orange-100 font-bold border-2 border-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:text-orange-400"
                                                                    >
                                                                        View
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => openWithdrawModal(activity)}
                                                                        className="text-neutral-900 font-bold bg-orange-500 border border-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:bg-orange-400 hover:border-orange-400"
                                                                    >
                                                                        Withdraw
                                                                    </button>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End Table */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Render ViewRecordModal */}
            {selectedRecord && (
                <ViewRecordModal
                    isOpen={isViewModalOpen}
                    onClose={closeViewModal}
                    record={selectedRecord}
                />
            )}
            {/* Render WithdrawRecordModal */}
            {selectedWithdrawRecord && (
                <WithdrawRecordModal
                    isOpen={isWithdrawModalOpen}
                    onClose={closeWithdrawModal}
                    record={selectedWithdrawRecord}
                    onWithdraw={handleWithdraw}
                />
            )}
        </div>
    );
};

export default AccessControlActivitiesTable;
