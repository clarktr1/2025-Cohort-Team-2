import { useState } from "react";
import SingleUseActionButton from "./SingleUseActionButton";
import { SingleUseAction } from "./SingleUseActions";
import HalfScreenActionsModal, { HalfScreenActionsModalProps } from "./HalfScreenActionsModal";
import { DashboardRowProps } from "./DashboardRows";


interface SingleUseActionProps {
    actions: SingleUseAction[];

    user_instance: DashboardRowProps | null;
}

const CommSingleUseActions: React.FC<SingleUseActionProps> = ({ actions, user_instance}) => {

    const selected_user = user_instance

    //find apt number from given user instance
    const selected_user_apt_num = "E4"


    const [modalData, setModalData] = useState<HalfScreenActionsModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalSubmitUserNotification = (targetUser: string | null) => {
        // Add submit logic here if needed.
        setModalData(null);
        
        // Add Post reques to update user here
        //

        console.log("Target User is ", {targetUser})
    };

   

    return (
        <div className="bg-neutral-900 rounded-b-lg py-10">
            <ul className="flex flex-col gap-4 items-center justify-center list-none">
                {actions.map((action, index) => 
                    <SingleUseActionButton
                        key={index}
                        text={action.text}
                        classCss={action.classCss}
                        onClick={() => {
                            if (action.modalContent) {
                                setModalData({
                                    isOpen: true,
                                    header: action.modalContent.header,
                                    form: (
                                        <form className="space-y-4" >
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Apartment Number
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={selected_user_apt_num}
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Tenant Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={selected_user?.first_name}
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Notification Message
                                                </label>
                                                <textarea
                                                    placeholder="Enter notification message"
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                    rows={4}
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-end gap-4">
                                            </div>
                                        </form>
                                    ),
                                    onClose: handleModalClose,
                                    onSubmit: () => handleModalSubmitUserNotification(selected_user!.email),
                                });
                            } else if (action.onClick) {
                                action.onClick();
                            }
                        }}
                    />
                )}
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

export default CommSingleUseActions;
