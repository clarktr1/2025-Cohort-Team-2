import { useState } from "react";
import LeaseActionsRow from "./LeaseActionsRow";
import LeaseActionsModal, { LeaseActionsModalProps } from "./LeaseActionModal";

export interface LeaseAction {
    text: string;
    // If modalContent is provided, clicking this button will open the modal.
    modalContent?: Omit<LeaseActionsModalProps, "isOpen" | "onClose" | "onRenew">;
    // Fallback onClick if no modalContent is provided.
    onClick?: () => void;

    //lease data
    lease_id: number;
    tenant_name: string;
    tenant_email: string;
    apartment_num: number;
    date_started: Date;
    date_end: Date;
    date_signed: Date;
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

                    lease_id={action.lease_id}
                    tenant_name={action.tenant_name}
                    tenant_email={action.tenant_email}
                    apartment_num={action.apartment_num}
                    date_started={action.date_started}
                    date_end={action.date_end}
                    date_signed={action.date_signed}

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
