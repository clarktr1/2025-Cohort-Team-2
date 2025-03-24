import { RenewLeaseFormProps } from "../types/types";



const RenewLeaseForm: React.FC<RenewLeaseFormProps> = ({ onSubmit, onCancel }) => {
    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Lease Document
                </label>
                <div className="w-full p-2 py-40 rounded-md bg-neutral-800 text-orange-100">
                    <p className="text-center">[Lease PDF Document Placeholder]</p>
                </div>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="agree"
                    className="h-4 w-4 text-orange-500 bg-neutral-800 border-orange-100 focus:ring-orange-500"
                />
                <label htmlFor="agree" className="ml-2 block text-sm text-orange-100">
                    I agree
                </label>
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

export default RenewLeaseForm;
