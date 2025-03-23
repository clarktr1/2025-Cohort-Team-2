import { useState } from "react";
import HalfScreenActionsButton from "./HalfScreenActionsButton";
import HalfScreenActionsModal, { HalfScreenActionsModalProps } from "./HalfScreenActionsModal";

export interface HalfScreenAction {
    text: string;
    // If modalContent is provided, clicking this button will open the modal.
    modalContent?: Omit<HalfScreenActionsModalProps, "isOpen" | "onClose" | "onSubmit">;
    // Fallback onClick if no modalContent is provided.
    onClick?: () => void;
}

interface HalfScreenActionsProps {
    actions: HalfScreenAction[];
}

const HalfScreenActions: React.FC<HalfScreenActionsProps> = ({ actions }) => {
    const [modalData, setModalData] = useState<HalfScreenActionsModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalSubmit = () => {
        // Add submit logic here if needed.
        setModalData(null);
    };

    return (
        <div className="bg-neutral-900 rounded-b-lg py-10">
            <h2 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">
                Admin Actions
            </h2>
            <ul className="flex flex-col gap-4 items-center justify-center list-none">
                {actions.map((action, index) => (
                    <HalfScreenActionsButton
                        key={index}
                        text={action.text}
                        onClick={() => {
                            if (action.modalContent) {
                                setModalData({
                                    isOpen: true,
                                    header: action.modalContent.header,
                                    form: action.modalContent.form,
                                    onClose: handleModalClose,
                                    onSubmit: handleModalSubmit,
                                });
                            } else if (action.onClick) {
                                action.onClick();
                            }
                        }}
                    />
                ))}
            </ul>
            {modalData && (
                <HalfScreenActionsModal
                    isOpen={modalData.isOpen}
                    header={modalData.header}
                    form={modalData.form}
                    onClose={modalData.onClose}
                    onSubmit={modalData.onSubmit}
                />
            )}
        </div>
    );
};

export default HalfScreenActions;
