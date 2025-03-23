import { useState } from "react";
import LeaseActionsRow from "./LeaseActionsRow";
import LeaseActionsModal, { LeaseActionsModalProps } from "./LeaseActionModal";

export interface LeaseAction {
    text: string;
    // If modalContent is provided, clicking this button will open the modal.
    modalContent?: Omit<LeaseActionsModalProps, "isOpen" | "onClose" | "onRenew">;
    // Fallback onClick if no modalContent is provided.
    onClick?: () => void;
}

interface LeaseActionsProps {
    actions: LeaseAction[];
}

const LeaseActions: React.FC<LeaseActionsProps> = ({ actions }) => {
    const [modalData, setModalData] = useState<LeaseActionsModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalSubmit = () => {
        // Add submit logic here if needed.
        setModalData(null);
    };

    return (
        <>
            {actions.map((action, index) => (
                <LeaseActionsRow
                    key={index}
                    text={action.text}
                    onClick={() => {
                        if (action.modalContent) {
                            setModalData({
                                isOpen: true,
                                header: action.modalContent.header,
                                display: action.modalContent.display,
                                onClose: handleModalClose,
                                onRenew: handleModalSubmit,
                            });
                        } else if (action.onClick) {
                            action.onClick();
                        }
                    }}
                    name="NAME--"
                    title="TITLE--"
                    email="EMAIL--"
                    role="ROLE--"

                    // tenant_name="TEN_NAME"
                    // tenant_email="TEN_EMAIL"
                    // apartment_num={9999}
                    // date_started={new Date("2001/01/01")}
                    // date_end={new Date("2003/01/03")}
                    // date_signed={new Date("2001/02/01")}

                />
            ))}
            {/* </ul> */}
            {modalData && (
                <LeaseActionsModal
                    isOpen={modalData.isOpen}
                    header={modalData.header}
                    display={modalData.display}
                    onClose={modalData.onClose}
                    onRenew={modalData.onRenew}
                />
            )}
        </>
    );
};

export default LeaseActions;
