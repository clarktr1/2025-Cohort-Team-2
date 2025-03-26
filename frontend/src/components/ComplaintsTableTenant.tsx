import { ComplaintData } from "../types/types";

const dummyComplaints: ComplaintData[] = [
    {
        apartmentNumber: "101",
        tenantName: "Alice Johnson",
        complaintTitle: "Noisy Neighbors",
        description: "The neighbors in apartment 102 are playing loud music late at night.",
    },
    {
        apartmentNumber: "202",
        tenantName: "Bob Smith",
        complaintTitle: "Leaking Faucet",
        description: "The kitchen faucet has been leaking continuously for over a week.",
    },
    {
        apartmentNumber: "303",
        tenantName: "Charlie Brown",
        complaintTitle: "Pest Infestation",
        description: "There are cockroaches and mice in the storage area.",
    },
];

const ComplaintsTable: React.FC = () => {
    return (
        <div className="bg-neutral-900 rounded-lg p-6">
            <div className="mx-auto max-w-7xl">
                {/* Table Header */}
                <header className="mb-6">
                    <h1 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">
                        Previous Complaints
                    </h1>
                </header>
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
                                    Complaint Title
                                </th>
                                <th className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100">
                                    Description
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
                                        {complaint.complaintTitle}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                        {complaint.description}
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
