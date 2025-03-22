import React from "react";
import { IssueTemporaryKeyFormProps } from "../types/types";


const IssueTemporaryKeyForm: React.FC<IssueTemporaryKeyFormProps> = ({ onSubmit, onCancel }) => {
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
                    Tenant Name
                </label>
                <input
                    type="text"
                    placeholder="Tenant name"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                />
            </div>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Guest Name
                </label>
                <input
                    type="text"
                    placeholder="Guest name"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                />
            </div>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Guest Email
                </label>
                <input
                    type="email"
                    placeholder="Guest email"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                />
            </div>
            <div>
                <p className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                    Valid Until: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
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

export default IssueTemporaryKeyForm;
