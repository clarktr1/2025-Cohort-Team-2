import { useState } from "react";
import LeaseActionsRow from "./LeaseActionsRow";
import LeaseActionsModal, { LeaseActionsModalProps } from "./LeaseActionModal";
import LeaseDisplay from "./LeaseDisplay";
import { LeaseInstanceProps } from "./ClickableDashboardTable";

interface LeaseActionsProps {
    actions: LeaseInstanceProps[];
}

const LeaseActions: React.FC<LeaseActionsProps> = ({ actions }) => {
    const [modalData, setModalData] = useState<LeaseActionsModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalRenewLease = (curStartDate: Date, curEndDate: Date) => {
        // Add submit logic here if needed.
        setModalData(null);

        const dateDifference = curStartDate.getTime() - curEndDate.getTime()
        const newStartDate = curEndDate
        const newEndDate = new Date(curEndDate.getTime()+dateDifference)

        console.log(newStartDate.toLocaleDateString())
        console.log(newEndDate.toLocaleDateString())

        // add POST request to change lease dates

    };

    return (
        <>
            {actions.map((action, index) => (
                <LeaseActionsRow
                    key={index}
                    text={"IDK WHERE THIS SHIT SHOWS UP"}
                    onClick={() => {
                        setModalData({
                            isOpen: true,
                            header: <>Lease Number: {action.lease_id}</>,
                            display: <LeaseDisplay lease_id={action.lease_id} 
                                                    tenant_name={action.tenant_name} 
                                                    landlord_name={action.tenant_email} 
                                                    date_created={action.date_started} 
                                                    date_signed={action.date_signed} 
                                                    date_end={action.date_end}>
                                    </LeaseDisplay>,
                            onClose: handleModalClose,
                            onRenew: () => handleModalRenewLease(action.date_started, action.date_end),
                        });
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
