import { useState } from "react";
import { LandlordComplaintData } from "../types/types";



const dummyComplaints: LandlordComplaintData[] = [
    {
        apartmentNumber: "103",
        tenantName: "Bob Smith",
        sourceApartmentNumber: "100",
        sourceTenantName: "Alice Johnson",
        complaintTitle: "Smoke",
        description: "I noticed smoke coming from apartment 103 in the evening.",
    },
    {
        apartmentNumber: "204",
        tenantName: "Charlie Brown",
        sourceApartmentNumber: "101",
        sourceTenantName: "David Lee",
        complaintTitle: "Noise",
        description: "Loud music and parties at night disturb the neighbors.",
    },
    {
        apartmentNumber: "305",
        tenantName: "Eve Adams",
        sourceApartmentNumber: "102",
        sourceTenantName: "Frank Miller",
        complaintTitle: "Inappropriate behavior",
        description: "I observed unruly and disruptive behavior from apartment 305.",
    },
    {
        apartmentNumber: "406",
        tenantName: "Grace Hopper",
        sourceApartmentNumber: "103",
        sourceTenantName: "Helen Troy",
        complaintTitle: "Mice",
        description: "There are mice seen near apartment 406.",
    },
    {
        apartmentNumber: "507",
        tenantName: "Ivan Petrov",
        sourceApartmentNumber: "104",
        sourceTenantName: "Jenny Smith",
        complaintTitle: "Cockroaches",
        description: "Cockroaches have been spotted coming from apartment 507's kitchen.",
    },
];

const ComplaintsTable: React.FC = () => {
    // State to track which complaint rows have been notified.
    const [notifiedMap, setNotifiedMap] = useState<Record<number, boolean>>({});

    const handleNotify = (index: number) => {
        setNotifiedMap((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <div className="bg-neutral-900 rounded-lg p-6">
            <div className="mx-auto max-w-7xl">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-orange-500">
                        <thead>
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-orange-100">
                                    Apartment Number
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Tenant Name
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Source Apartment
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Source Tenant
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Complaint Title
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Description
                                </th>
                                <th className="px-3 py-3.5 text-right text-lg font-semibold text-orange-100">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-500">
                            {dummyComplaints.map((complaint, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-orange-100">
                                        {complaint.apartmentNumber}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                        {complaint.tenantName}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                        {complaint.sourceApartmentNumber}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                        {complaint.sourceTenantName}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                        {complaint.complaintTitle}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                        {complaint.description}
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                        {notifiedMap[index] ? (
                                            <button className="text-orange-100 font-bold border-2 border-orange-100 py-2 px-3 rounded-lg cursor-default">
                                                Notified
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleNotify(index)}
                                                className="text-neutral-900 font-bold bg-orange-500 border border-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:bg-orange-400 hover:border-orange-400"
                                            >
                                                Notify Tenant
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
    );
};

export default ComplaintsTable;
