import React from "react";
import { QuickAction } from "../components/QuickActions";
import { QuickActionModalProps, SuccessModalData } from "../types/types";



export function useLandlordActionsSuccessMessage(
    setQuickActionModalData: React.Dispatch<React.SetStateAction<QuickActionModalProps | null>>,
    setSuccessModalData: React.Dispatch<React.SetStateAction<SuccessModalData>>,
    actionsData: QuickAction[]
): QuickAction[] {
    return actionsData.map((action) => {
        if (action.modalContent) {
            let overrideProps: any = {};
            if (action.text === "Issue Temporary Key") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const dummyKeys = ["12345", "23456", "34567", "45678", "56789"];
                        const randomKey = dummyKeys[Math.floor(Math.random() * dummyKeys.length)];
                        console.log("Issue temporary key submitted:", randomKey);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: randomKey,
                                message: "Temporary key issued successfully!",
                                label: "Temporary Key",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Issue temporary key canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Issue parking permit") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const dummyPermits = ["P12345", "P23456", "P34567", "P45678", "P56789"];
                        const randomPermit = dummyPermits[Math.floor(Math.random() * dummyPermits.length)];
                        console.log("Issue parking permit submitted:", randomPermit);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: randomPermit,
                                message: "Parking permit issued successfully!",
                                label: "Parking Permit",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Issue parking permit canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Add a new user") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const userId = Math.floor(Math.random() * 10) + 1;
                        console.log("Add a new user submitted, User ID:", userId);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: userId.toString(),
                                message: "New user added successfully!",
                                label: "User ID",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Add a new user canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Update a user") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const userId = Math.floor(Math.random() * 10) + 1;
                        console.log("Update a user submitted, User ID:", userId);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: userId.toString(),
                                message: "User updated successfully!",
                                label: "User ID",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Update a user canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Renew Lease") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const leaseId = Math.floor(Math.random() * 10) + 1;
                        console.log("Renew Lease submitted, Lease ID:", leaseId);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: leaseId.toString(),
                                message: "Lease renewed successfully!",
                                label: "Lease ID",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Renew Lease canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Resolve the complaint") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const complaintId = Math.floor(Math.random() * 10) + 1;
                        console.log("Resolve the complaint submitted, Complaint ID:", complaintId);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: complaintId.toString(),
                                message: "Complaint resolved successfully!",
                                label: "Complaint ID",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Resolve the complaint canceled");
                        setQuickActionModalData(null);
                    },
                };
            }
            // Clone the form element with the override props.
            const formElement = action.modalContent.form as React.ReactElement<any>;
            const newFormElement = React.cloneElement(formElement, overrideProps);
            return {
                ...action,
                modalContent: {
                    ...action.modalContent,
                    form: newFormElement,
                },
            };
        }
        return action;
    });
}
