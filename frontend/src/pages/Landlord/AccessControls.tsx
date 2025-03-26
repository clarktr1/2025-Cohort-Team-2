import { useState } from "react";
import QuickActions, { QuickAction } from "../../components/QuickActions";
import AccessControlActivitiesTable from "../../components/AccessControlActivitiesLandlord";
import SuccessMessageModal from "../../components/SuccessMessageModal";
import { accessControlActionsLandlord as accessControlActionsData } from "../../data/landlordAccessControlsQuickActions";
import { QuickActionModalProps, SuccessModalData } from "../../types/types";
// import { useTenantActionsSuccessMessage } from "../../hooks/useTenantActionsSuccessMessage";
import { useLandlordActionsSuccessMessage } from "../../hooks/useLandlordActionsSuccessMessage";

const AccessControlsLandlord = () => {
    // Lift QuickActions modal state.
    const [quickActionModalData, setQuickActionModalData] = useState<QuickActionModalProps | null>(null);
    // State for the success modal.
    const [successModalData, setSuccessModalData] = useState<SuccessModalData>({
        isOpen: false,
        generatedKey: "",
        message: "",
        label: "",
    });

    // Use the hook with accessControlActionsData.
    const accessActions: QuickAction[] = useLandlordActionsSuccessMessage(
        setQuickActionModalData,
        setSuccessModalData,
        accessControlActionsData
    );

    return (
        <div className="bg-neutral-950 h-screen p-2">
            <div className="bg-neutral-900 w-full rounded-lg my-2">
                <QuickActions
                    actions={accessActions}
                    modalData={quickActionModalData}
                    setModalData={setQuickActionModalData}
                />
            </div>
            <div className="bg-neutral-900 w-full rounded-lg">
                <AccessControlActivitiesTable />
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

export default AccessControlsLandlord;
