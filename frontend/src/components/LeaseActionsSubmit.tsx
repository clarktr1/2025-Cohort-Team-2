import { useState } from "react";
import LeaseActionsRow from "./LeaseActionsRow";
// import LeaseActionsModal, { LeaseActionsModalProps } from "./LeaseActionModal";
import LeaseActionsSubmitModal, { LeaseActionsSubmitModalProps } from "./LeaseActionSubmitModal";
import LeaseDisplay from "./LeaseDisplay";
import { LeaseInstanceProps } from "./ClickableDashboardTable";

interface LeaseActionsProps {
    actions: LeaseInstanceProps[];
}


const LeaseActionsSubmit: React.FC<LeaseActionsProps> = ({ actions }) => {    
    const [modalData, setModalData] = useState<LeaseActionsSubmitModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalSignLease = (isSigned: Date | null) => {
        // Add submit logic here if needed.
        setModalData(null);

        if(isSigned !== null){
            //maybe have statement saying this
            console.log("Lease Already Signed")
        }
        else{
            const signedDate = new Date()
            console.log(signedDate.toLocaleDateString())
            // add POST request to change lease sign date and fill in that name
        }


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
                                                    tenant_signature={(action.date_signed !== null) ? action.tenant_name : null}
                                                    landlord_name={action.tenant_email} 
                                                    date_created={action.date_started} 
                                                    date_signed={action.date_signed} 
                                                    date_end={action.date_end}>
                                    </LeaseDisplay>,
                            onClose: handleModalClose,
                            onSign: () => handleModalSignLease(action.date_signed),
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
                <LeaseActionsSubmitModal
                    isOpen={modalData.isOpen}
                    header={modalData.header}
                    display={modalData.display}
                    onClose={modalData.onClose}
                    onSign={modalData.onSign}
                />
            )}
        </>
    );
};

export default LeaseActionsSubmit;
