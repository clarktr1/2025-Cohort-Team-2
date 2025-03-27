import { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Notifications from "../../components/Notifications";
import QuickActions from "../../components/QuickActions";
import { QuickActionModalProps, SuccessModalData } from "../../types/types";
import Dashboard from "../../components/Dashboard";
import SuccessMessageModal from "../../components/SuccessMessageModal";
import { useTenantActionsSuccessMessage } from "../../hooks/useTenantActionsSuccessMessage";
import { tenantActions as tenantActionsData } from "../../data/tenantQuickActions";

const TenantPage = () => {
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
    const tenantActions = useTenantActionsSuccessMessage(setQuickActionModalData, setSuccessModalData, tenantActionsData);

    return (
        <div className="bg-neutral-950 h-full p-2">
            <div className="flex flex-col gap-2">
                <div className="flex h-96 rounded-lg overflow-hidden gap-2">
                    <HeroSection
                        imageSrc="/apartment_bg_img.jpg"
                        title={
                            <>
                                Welcome to{" "}
                                <span className="text-orange-500 font-bold">Smart Living</span>
                            </>
                        }
                        subtitle="Experience comfort, embrace innovation."
                    />
                    <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
                        <Notifications/>
                    </div>
                </div>
                <div>
                    <QuickActions
                        actions={tenantActions}
                        modalData={quickActionModalData}
                        setModalData={setQuickActionModalData}
                    />
                </div>
                <div>
                    {/* <Dashboard /> */}
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

export default TenantPage;
