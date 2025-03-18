import React, { useState } from "react";
import QuickActions, { QuickAction } from "../../components/QuickActions";
import AccessControlActivitiesTable from "../../components/AccessControlActivities";
import SuccessMessageModal from "../../components/SuccessMessageModal";
import { accessControlActions as accessControlActionsData } from "../../data/accessControlsQuickActions";

import { QuickActionModalProps } from "../../components/QuickActionModal";
import { TemporaryKeyFormProps } from "../../components/TemporaryKeyForm";

const AccessControls = () => {
    // Lift QuickActions modal state.
    const [quickActionModalData, setQuickActionModalData] = useState<QuickActionModalProps | null>(null);
    // State for the success modal.
    const [successModalData, setSuccessModalData] = useState<{
        isOpen: boolean;
        generatedKey: string;
        message: string;
    }>({
        isOpen: false,
        generatedKey: "",
        message: "",
    });

    // Override the "Generate temporary key" action's form callbacks.
    const accessActions: QuickAction[] = accessControlActionsData.map((action) => {
        if (action.text === "Generate temporary key" && action.modalContent) {
            // Cast form element to TemporaryKeyFormProps
            const formElement = action.modalContent.form as React.ReactElement<TemporaryKeyFormProps>;
            const newFormElement = React.cloneElement(formElement, {
                onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const dummyKeys = ["12345", "23456", "34567", "45678", "56789"];
                    const randomKey = dummyKeys[Math.floor(Math.random() * dummyKeys.length)];
                    console.log("Temporary key submitted:", randomKey);
                    // Close QuickActions modal.
                    setQuickActionModalData(null);
                    // After a short delay, open the success modal with the generated key.
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
            />
        </div>
    );
};

export default AccessControls;
