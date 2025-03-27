import { useState } from "react";
import SingleUseActionButton from "./SingleUseActionButton";
import HalfScreenActionsModal, { HalfScreenActionsModalProps } from "./HalfScreenActionsModal";
import { DashboardRowProps } from "./DashboardRows";
import SuccessMessageModal from "./SuccessMessageModal";

export interface SingleUseAction {
    text: string;
    classCss: string;
    // If modalContent is provided, clicking this button will open the modal.
    modalContent?: Omit<HalfScreenActionsModalProps, "isOpen" | "onClose" | "onSubmit">;
    // Fallback onClick if no modalContent is provided.
    onClick?: () => void;
}

interface SingleUseActionProps {
    actions: SingleUseAction[];

    user_instance: DashboardRowProps | null;
}

const SingleUseActions: React.FC<SingleUseActionProps> = ({ actions, user_instance}) => {

    const [successModalData, setSuccessModalData] = useState({
        isOpen: false,
        generatedKey: "",
        message: "",
        label: "Lease ID",
    });

    const selected_user = user_instance

    const [modalData, setModalData] = useState<HalfScreenActionsModalProps | null>(null);

    const handleModalClose = () => {
        setModalData(null);
    };

    const handleModalSubmitCreateUser = () => {
        // Add submit logic here if needed.
        setModalData(null);

        // Add Post request to create new user here
        //
        // Add Post request to generating lease for user here
        //

        setTimeout(() => {
            setSuccessModalData({
                isOpen: true,
                generatedKey: "Added to table",
                message: "Your new user has been created successfully!",
                label: "User ID",
            });
        }, 200);

        console.log("New User Created")
    };

    const handleModalSubmitUserChanges = (userInput: DashboardRowProps | null) => {
        // Add submit logic here if needed.
        setModalData(null);
        
        // Add Post reques to update user here
        //

        const userEmail = userInput?.email

        let userKey = "no entered user key"
        if(userEmail){
            userKey = userEmail
        }

        setTimeout(() => {
            setSuccessModalData({
                isOpen: true,
                generatedKey: userKey,
                message: "Your user data has been changed successfully!",
                label: "User ID",
            });
        }, 200);

        console.log("User Changes Submit")
    };

   

    return (
        <div className="bg-neutral-900 rounded-b-lg py-10">
            <ul className="flex flex-col gap-4 items-center justify-center list-none">
                {actions.map((action, index) => 
                    user_instance !== null ? (
                    
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
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Tenant Email
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={selected_user?.email}
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Tenant First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={selected_user?.first_name}
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Tenant Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={selected_user?.last_name}
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-orange-100 text-sm font-medium mb-1">
                                                    Tenant Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={selected_user?.phone_number.toLocaleString()}
                                                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                                                />
                                            </div>
                                        </form>
                                    ),
                                    onClose: handleModalClose,
                                    onSubmit: () => handleModalSubmitUserChanges(selected_user),
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
                                    onSubmit: handleModalSubmitCreateUser,
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
            <SuccessMessageModal
                isOpen={successModalData.isOpen}
                onClose={() => setSuccessModalData({ ...successModalData, isOpen: false })}
                generatedKey={successModalData.generatedKey}
                message={successModalData.message}
                label={successModalData.label}
            />
        </div>
    );
};

export default SingleUseActions;
