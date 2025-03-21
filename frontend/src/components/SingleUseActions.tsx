import { useState } from "react";
import SingleUseActionButton from "./SingleUseActionButton";
import HalfScreenActionsModal, { HalfScreenActionsModalProps } from "./HalfScreenActionsModal";

export interface SingleUseAction {
    text: string;
    classCss: string;
    instance_id: string | null;
    // If modalContent is provided, clicking this button will open the modal.
    modalContent?: Omit<HalfScreenActionsModalProps, "isOpen" | "onClose" | "onSubmit">;
    // Fallback onClick if no modalContent is provided.
    onClick?: () => void;
}

interface SingleUseActionProps {
    actions: SingleUseAction[];
}

const SingleUseActions: React.FC<SingleUseActionProps> = ({ actions}) => {
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
            <ul className="flex flex-col gap-4 items-center justify-center list-none">
                {actions.map((action, index) => 
                    action.instance_id !== null ? (
                    
                    <SingleUseActionButton
                        key={index}
                        text={"Input ID Found"}
                        classCss={action.classCss}
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
                ) : (
                    <SingleUseActionButton
                        key={index}
                        text={action.text}
                        classCss={action.classCss}
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

export default SingleUseActions;
