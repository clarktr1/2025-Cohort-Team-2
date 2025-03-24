import { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Notifications from "../../components/Notifications";
import CommDashboardTable from "../../components/CommDashboardTable";
import QuickActions from "../../components/QuickActions";
import { QuickActionModalProps } from "../../types/types";
import SuccessMessageModal from "../../components/SuccessMessageModal";
import { tenantNotifications } from "../../data/tenantNotifications";
import { useTenantActionsSuccessMessage } from "../../hooks/useTenantActionsSuccessMessage";
import { SuccessModalData } from "../../hooks/useTenantActionsSuccessMessage";
// import { tenantActions as tenantActionsData } from "../../data/tenantQuickActions";
import { landlordCommunicationActions as landlorCommActionsData } from "../../data/landlordCommunicationActions";


const CommunicationPage = () => {
    // State for QuickActions modal.
    const [quickActionModalData, setQuickActionModalData] = useState<QuickActionModalProps | null>(null);
    // State for the SuccessMessageModal.
    const [successModalData, setSuccessModalData] = useState<SuccessModalData>({
        isOpen: false,
        generatedKey: "",
        message: "",
        label: "",
    });

    // Use our custom hook to get the modified tenant actions.
    const landlordCommunicationActions = useTenantActionsSuccessMessage(setQuickActionModalData, setSuccessModalData, landlorCommActionsData);

    return (
        <div className="bg-neutral-950 h-full p-2">
            <div className="flex flex-col gap-2">
                <div className="flex h-96 rounded-lg overflow-hidden gap-2">
                    <div className="h-full w-full">
                        <div className="bg-neutral-900 h-full rounded-lg">
                            <QuickActions
                                actions={landlordCommunicationActions}
                                modalData={quickActionModalData}
                                setModalData={setQuickActionModalData}
                            />
                        </div>
                    </div>
                    <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
                        <div className="flex flex-col h-full">
                            <div className="rounded-lg font-bold text-orange-100 text-2xl text-center w-full mb-4">
                                Global Notification Display:
                            </div>
                            <div className="border-2 border-orange-100 rounded-lg h-full p-2">
                                <Notifications notifications={tenantNotifications} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <CommDashboardTable />
                </div>
            </div>
            <SuccessMessageModal
                isOpen={successModalData.isOpen}
                onClose={() =>
                    setSuccessModalData({ ...successModalData, isOpen: false })
                }
                generatedKey={successModalData.generatedKey}
                message={successModalData.message}
                label={successModalData.label}
            />
        </div>
    );
};

export default CommunicationPage;
