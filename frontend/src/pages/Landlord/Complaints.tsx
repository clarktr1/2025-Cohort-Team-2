import React from "react";
import ComplaintsTable from "../../components/ComplaintsTableLandlord";

const LandlordComplaints: React.FC = () => {
    return (
        <div className="bg-neutral-950 h-screen p-2">
            <header className="bg-neutral-900 w-full rounded-lg py-10">
                <h1 className="text-orange-100 text-center tracking-widest text-4xl font-bold">
                    Complaints
                </h1>
            </header>
            <div className="mt-2">
                <ComplaintsTable />
            </div>
        </div>
    );
};

export default LandlordComplaints;
