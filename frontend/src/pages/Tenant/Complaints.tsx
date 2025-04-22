import { useState } from "react";
import ReportDisturbanceForm from "../../components/ReportDisturbanceForm";
import SuccessMessageModal from "../../components/SuccessMessageModal";
import QuickActionButton from "../../components/QuickActionButton";
import ComplaintsTable from "../../components/ComplaintsTableTenant";
import ComplaintNotificationForTenant from "../../components/ComplaintNotificationForTenant;";
import { SuccessModalData } from "../../types/types";

const Complaints: React.FC = () => {
    // State for the complaint form modal.
    const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
    // State for the success modal.
    const [successModalData, setSuccessModalData] = useState<SuccessModalData>({
        isOpen: false,
        generatedKey: "",
        message: "",
        label: "Complaint ID",
    });

    const openComplaintModal = () => {
        setIsComplaintModalOpen(true);
    };

    const closeComplaintModal = () => {
        setIsComplaintModalOpen(false);
    };

    const handleComplaintSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate complaint submission with a random ID between 1 and 10.
        const randomComplaintId = Math.floor(Math.random() * 10) + 1;
        // Close the complaint form modal.
        closeComplaintModal();
        // After a 2-second delay, show the success modal.
        setTimeout(() => {
            setSuccessModalData({
                isOpen: true,
                generatedKey: randomComplaintId.toString(),
                message: "Your complaint is submitted!",
                label: "Complaint ID",
            });
        }, 2000);
    };

    const handleComplaintCancel = () => {
        closeComplaintModal();
    };

    const closeSuccessModal = () => {
        setSuccessModalData({ ...successModalData, isOpen: false });
    };

    // Dummy complaint notification data.
    const dummyComplaintNotification = {
        complaintType: "Noise",
        title: "Excessive Noise Reported",
        description:
            "Your neighbors have reported excessive noise from your apartment. Please reduce your sound levels and observe quiet hours to maintain a peaceful environment.",
    };

    return (
        <div className="bg-neutral-950 h-screen p-2">
            {/* Page Header */}
            <div className="bg-neutral-900 w-full rounded-lg py-10">
                <h1 className="font-bold text-orange-100 text-center tracking-widest text-4xl">
                    Complaints
                </h1>
            </div>
            {/* Report Complaint Section */}
            <div className="bg-neutral-900 w-full rounded-lg py-10 mt-2 ">
                <div className="flex flex-col divide-x divide-orange-100 md:flex-row gap-4">
                    {/* Left Column: Report Complaint Button and Modals */}
                    <div className="md:w-1/2 flex flex-col  items-center">
                        <ul className="flex gap-4 items-center justify-center list-none">
                            <QuickActionButton text="Report Complaint" onClick={openComplaintModal} />
                        </ul>
                        {/* Complaint Form Modal */}
                        {isComplaintModalOpen && (
                            <div className="fixed inset-0 z-20 flex items-center justify-center">
                                {/* Backdrop */}
                                <div className="absolute inset-0 bg-neutral-800/75 transition-opacity"></div>
                                <div className="relative bg-neutral-900 rounded-lg p-6 w-full max-w-md">
                                    <h2 className="text-2xl font-bold text-orange-100 mb-4 text-center">
                                        Report Complaint
                                    </h2>
                                    <ReportDisturbanceForm
                                        onSubmit={handleComplaintSubmit}
                                        onCancel={handleComplaintCancel}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Success Message Modal */}
                        <SuccessMessageModal
                            isOpen={successModalData.isOpen}
                            onClose={closeSuccessModal}
                            generatedKey={successModalData.generatedKey}
                            message={successModalData.message}
                            label={successModalData.label}
                        />
                    </div>
                    {/* Right Column: Complaint Notification */}
                    <div className="md:w-1/2">
                        <ComplaintNotificationForTenant
                            complaintType={dummyComplaintNotification.complaintType}
                            title={dummyComplaintNotification.title}
                            description={dummyComplaintNotification.description}
                        />
                    </div>
                </div>
            </div>
            {/* Complaints Table */}
            <div className="mt-2">
                <ComplaintsTable />
            </div>
        </div>
    );
};

export default Complaints;
