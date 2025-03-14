import React, { useState } from "react";
import QuickActionButton from "./QuickActionButton";
import QuickActionModal, { QuickActionModalProps } from "./QuickActionModal";

export interface QuickAction {
    text: string;
    // If modalContent is provided, clicking this button will open the modal.
    modalContent?: Omit<QuickActionModalProps, "isOpen" | "onClose">;
    // Fallback onClick if no modalContent is provided.
    onClick?: () => void;
}

interface QuickActionsProps {
    actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
    const [modalData, setModalData] =
        useState<QuickActionModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    return (
        <div className="bg-neutral-900 rounded-lg py-10">
            <h2 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">
                Quick Actions
            </h2>
            <ul className="flex gap-4 items-center justify-center list-none">
                {actions.map((action, index) => (
                    <QuickActionButton
                        key={index}
                        text={action.text}
                        onClick={() => {
                            if (action.modalContent) {
                                setModalData({
                                    isOpen: true,
                                    header: action.modalContent.header,
                                    form: action.modalContent.form,
                                    onClose: handleModalClose,
                                });
                            } else if (action.onClick) {
                                action.onClick();
                            }
                        }}
                    />
                ))}
            </ul>
            {modalData && (
                <QuickActionModal
                    isOpen={modalData.isOpen}
                    header={modalData.header}
                    form={modalData.form}
                    onClose={modalData.onClose}
                />
            )}
        </div>
    );
};

export default QuickActions;
