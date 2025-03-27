import { useState } from "react";
import LeaseActionsRow from "./LeaseActionsRow";
import LeaseActionsModal, { LeaseActionsModalProps } from "./LeaseActionModal";
import LeaseDisplay from "./LeaseDisplay";
import { LeaseInstanceProps } from "./ClickableDashboardTable";
import SuccessMessageModal from "./SuccessMessageModal";

interface LeaseActionsProps {
    actions: LeaseInstanceProps[];
}

const LeaseActions: React.FC<LeaseActionsProps> = ({ actions }) => {

    //success message setup
    const [successModalData, setSuccessModalData] = useState({
        isOpen: false,
        generatedKey: "",
        message: "",
        label: "Lease ID",
    });


    const [modalData, setModalData] = useState<LeaseActionsModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalRenewLease = (curStartDate: Date, curEndDate: Date, leaseId: number) => {
        // Add submit logic here if needed.
        setModalData(null);

        const dateDifference = curStartDate.getTime() - curEndDate.getTime()
        const newStartDate = curEndDate
        const newEndDate = new Date(curEndDate.getTime()+dateDifference)

        console.log(newStartDate.toLocaleDateString())
        console.log(newEndDate.toLocaleDateString())

        // add POST request to change lease dates

        setTimeout(() => {
            setSuccessModalData({
                isOpen: true,
                generatedKey: leaseId.toString(),
                message: "Your lease was renewed successfully!",
                label: "Lease ID",
            });
        }, 200);
    };

    return (
        <>
            {actions.map((action, index) => (
                <LeaseActionsRow
                    key={index}
                    text={"TESTING"}
                    onClick={() => {
                        setModalData({
                            isOpen: true,
                            header: <>Lease Number: {action.lease_id}</>,
                            display: <LeaseDisplay lease_id={action.lease_id} 
                                                    tenant_name={action.tenant_name} 
                                                    landlord_name={action.tenant_email} 
                                                    tenant_signature={action.date_signed ? action.tenant_name : null}
                                                    date_created={action.date_started} 
                                                    date_signed={action.date_signed} 
                                                    date_end={action.date_end}>
                                    </LeaseDisplay>,
                            onClose: handleModalClose,
                            onRenew: () => handleModalRenewLease(action.date_started, action.date_end, action.lease_id),
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
            <SuccessMessageModal
                isOpen={successModalData.isOpen}
                onClose={() => setSuccessModalData({ ...successModalData, isOpen: false })}
                generatedKey={successModalData.generatedKey}
                message={successModalData.message}
                label={successModalData.label}
            />
        </>
    );
};

export default LeaseActions;
