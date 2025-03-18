import React from "react";
import QuickActionButton from "./QuickActionButton";
import QuickActionModal, { QuickActionModalProps } from "./QuickActionModal";

export interface QuickAction {
    text: string;
    modalContent?: Omit<QuickActionModalProps, "isOpen" | "onClose">;
    onClick?: () => void;
}

export interface QuickActionsProps {
    actions: QuickAction[];
    modalData: QuickActionModalProps | null;
    setModalData: (data: QuickActionModalProps | null) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions, modalData, setModalData }) => {
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
