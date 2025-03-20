import React from "react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    generatedKey: string;
    message: string;
    label?: string; // e.g., "Key", "Parking Permit", "Complaint ID", etc.
}

const SuccessMessageModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, generatedKey, message, label = "Key" }) => {
    if (!isOpen) return null;

    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            {/* Background backdrop */}
            <div className="fixed inset-0 bg-neutral-800/75 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    {/* Modal panel */}
                    <div className="relative transform overflow-hidden rounded-lg bg-neutral-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-md sm:p-6">
                        {/* Close button */}
                        <div className="absolute right-0 top-0 pr-4 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-md bg-neutral-900 text-orange-100 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal content */}
                        <div className="text-center">
                            <h3 className="text-2xl font-medium text-orange-500">Success!</h3>
                            <p className="mt-4 text-lg text-orange-100">{message}</p>
                            <p className="mt-2 text-xl font-bold text-orange-100">
                                {label}: {generatedKey}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessageModal;
