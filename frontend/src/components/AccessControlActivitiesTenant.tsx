/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import ViewRecordModal from "./ViewRecordModal";
import WithdrawRecordModal from "./WithdrawRecordModal";
import { RecordData } from "../types/types";

const AccessControlActivitiesTable: React.FC = () => {
    const [activities, setActivities] = useState<RecordData[]>([]);
    // Modal state for viewing.
    const [selectedRecord, setSelectedRecord] = useState<RecordData | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    // Modal state for withdrawing.
    const [selectedWithdrawRecord, setSelectedWithdrawRecord] = useState<RecordData | null>(null);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                // Hardcoded token and apartment number.
                const token = "14ed994159b3789e6d6809c9df5d050caf3f6847";
                const apt = "113";
                const url = `https://two025-cohort-team-2.onrender.com/api/keycode/${encodeURIComponent(apt)}/`;
                const response = await fetch(url, {
                    headers: {
                        "Authorization": `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                console.log("Fetched data:", data);
                // The endpoint returns a single keycode object.
                // Wrap it in an array for consistency.
                const recordsArray = Array.isArray(data) ? data : [data];
                // Transform each record into our RecordData format.
                const transformed: RecordData[] = recordsArray.map((record: any) => {
                    const generatedDate = new Date(record.key_generated);
                    // Set expiration to 7 days after generation.
                    const expirationDate = new Date(generatedDate.getTime() + 7 * 24 * 60 * 60 * 1000);
                    const now = new Date();
                    const status = now > expirationDate ? "Expired" : "Active";
                    return {
                        id: record.id,
                        apartmentNumber: apt,
                        tenantName: "David Tenant",
                        activityName: "Guest Key",
                        startDate: generatedDate.toLocaleString(),
                        endDate: expirationDate.toLocaleString(),
                        status: status,
                        description: `Key: ${record.key}`,
                        key: record.key,
                    };
                });
                setActivities(transformed);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        };

        fetchActivities();
    }, []);

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

    // Dummy function to simulate record update after withdrawal.
    const handleWithdraw = (updatedRecord: RecordData) => {
        console.log("Record updated:", updatedRecord);
        // In production, update your state or re-fetch data here.
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
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-orange-500">
                        <thead>
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-orange-100">
                                    Activity
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Start Date/Time
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    End Date/Time
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Status
                                </th>
                                <th className="px-3 py-3.5 text-right text-lg font-semibold text-orange-100">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-500">
                            {activities.map((activity) => (
                                <tr key={activity.id}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100">
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
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
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
            {selectedRecord && (
                <ViewRecordModal
                    isOpen={isViewModalOpen}
                    onClose={closeViewModal}
                    record={selectedRecord}
                />
            )}
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
