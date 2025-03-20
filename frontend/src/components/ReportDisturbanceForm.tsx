import React from "react";

export interface ReportDisturbanceFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

const disturbanceTypes = [
    "Noise",
    "Smoke",
    "Inappropriate behavior",
    "Mice",
    "Cockroaches",
    "Other",
];

const ReportDisturbanceForm: React.FC<ReportDisturbanceFormProps> = ({
    onSubmit,
    onCancel,
}) => {
    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Apartment Number
                </label>
                <input
                    type="text"
                    placeholder="Apartment number"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                />
            </div>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Complaint Type
                </label>
                <select className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                    <option value="">Select Complaint Type</option>
                    {disturbanceTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Complaint Description
                </label>
                <textarea
                    placeholder="Describe the disturbance"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                    rows={3}
                />
            </div>
            <div className="mt-4 flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="inline-flex justify-center rounded-md border-2 border-orange-100 bg-neutral-900 px-3 py-2 text-sm font-semibold text-orange-100 shadow-sm hover:bg-neutral-800"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-orange-400"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ReportDisturbanceForm;
