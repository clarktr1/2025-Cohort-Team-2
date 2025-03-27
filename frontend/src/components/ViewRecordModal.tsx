import { ViewRecordModalProps } from "../types/types";


const ViewRecordModal: React.FC<ViewRecordModalProps> = ({ isOpen, onClose, record }) => {
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
                        <div className="text-center m-4">
                            <h3 className="text-3xl font-medium text-orange-500">View Record</h3>
                            <div className="m-4 text-orange-100 text-left space-y-4">
                                <p><span className="font-black mr-3">Apartment:</span> {record.apartmentNumber}</p>
                                <p><span className="font-black mr-3">Tenant:</span> {record.tenantName}</p>
                                <p><span className="font-black mr-3">Activity:</span> {record.activityName}</p>
                                <p><span className="font-black mr-3">Start Date:</span> {record.startDate}</p>
                                <p><span className="font-black mr-3">End Date:</span> {record.endDate}</p>
                                <p><span className="font-black mr-3">Status:</span> {record.status}</p>
                                {record.activityName.toLowerCase() === "parking permit" && (
                                    <>
                                        <p><span className="font-black mr-3">Car Model:</span> {record.carModel}</p>
                                        <p><span className="font-black mr-3">Car Color:</span> {record.carColor}</p>
                                    </>
                                )}
                                {(record.activityName.toLowerCase() === "temporary key") && record.description && (
                                    <p><span className="font-black mr-3">Description:</span> {record.description}</p>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecordModal;
