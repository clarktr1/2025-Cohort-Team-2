import React from "react";
import { CommunityAlertFormProps } from "../types/types";


const CommunityAlertForm: React.FC<CommunityAlertFormProps> = ({ onSubmit, onCancel }) => {
    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Message
                </label>
                <textarea
                    placeholder="Enter your alert message"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                    rows={4}
                />
            </div>
            <div>
                {/* Valid for a week */}
                <p className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                    Valid Until: {new Date(Date.now() + 604800000).toLocaleDateString()}
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

export default CommunityAlertForm;
