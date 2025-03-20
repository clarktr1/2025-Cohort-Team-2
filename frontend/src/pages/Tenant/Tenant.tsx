import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Notifications from "../../components/Notifications";
import QuickActions, { QuickAction } from "../../components/QuickActions";
import { QuickActionModalProps } from "../../components/QuickActionModal";
import Dashboard from "../../components/Dashboard";
import SuccessMessageModal from "../../components/SuccessMessageModal";
import { TemporaryKeyFormProps } from "../../components/TemporaryKeyFormTenant";
import { tenantActions as tenantActionsData } from "../../data/tenantQuickActions";
import { tenantNotifications } from "../../data/tenantNotifications";

const TenantPage = () => {
    // State for QuickActions modal
    const [quickActionModalData, setQuickActionModalData] = useState<QuickActionModalProps | null>(null);
    // State for Success modal.
    const [successModalData, setSuccessModalData] = useState<{
        isOpen: boolean;
        generatedKey: string;
        message: string;
    }>({
        isOpen: false,
        generatedKey: "",
        message: "",
    });

    // Override the temporary key action's form callbacks.
    const tenantActions: QuickAction[] = tenantActionsData.map((action) => {
        if (action.text === "Generate temporary key" && action.modalContent) {
            const formElement = action.modalContent.form as React.ReactElement<TemporaryKeyFormProps>;
            const newFormElement = React.cloneElement(formElement, {
                onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const dummyKeys = ["12345", "23456", "34567", "45678", "56789"];
                    const randomKey = dummyKeys[Math.floor(Math.random() * dummyKeys.length)];
                    console.log("Temporary key submitted:", randomKey);
                    // Close the QuickActions modal first.
                    setQuickActionModalData(null);
                    // Then open the SuccessMessageModal after a short delay.
                    setTimeout(() => {
                        setSuccessModalData({
                            isOpen: true,
                            generatedKey: randomKey,
                            message: "Temporary key generated successfully!",
                        });
                    }, 200);
                },
                onCancel: () => {
                    console.log("Temporary key canceled");
                    setQuickActionModalData(null);
                },
            });
            return {
                ...action,
                modalContent: {
                    ...action.modalContent,
                    form: newFormElement,
                },
            };
        }
        return action;
    });

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
                        <Notifications notifications={tenantNotifications} />
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
                    <Dashboard />
                </div>
            </div>
            <SuccessMessageModal
                isOpen={successModalData.isOpen}
                onClose={() =>
                    setSuccessModalData({ ...successModalData, isOpen: false })
                }
                generatedKey={successModalData.generatedKey}
                message={successModalData.message}
            />
        </div>
    );
};

export default TenantPage;

// TODO:
// 1. show error message modal if the success message key can't be generated
// 2. apply success and error message modal to the other forms. 
