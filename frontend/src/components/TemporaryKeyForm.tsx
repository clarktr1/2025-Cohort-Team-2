import React from "react";

interface TemporaryKeyFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

const TemporaryKeyForm: React.FC<TemporaryKeyFormProps> = ({ onSubmit, onCancel }) => {
    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Enter Key Details
                </label>
                <input
                    type="text"
                    placeholder="Key description"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                />
            </div>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Valid Until
                </label>
                <input
                    type="date"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
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

export default TemporaryKeyForm;
