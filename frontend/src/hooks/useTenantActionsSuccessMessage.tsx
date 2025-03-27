/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { QuickAction } from "../components/QuickActions";
import { QuickActionModalProps, SuccessModalData } from "../types/types";



export function useTenantActionsSuccessMessage(
    setQuickActionModalData: React.Dispatch<React.SetStateAction<QuickActionModalProps | null>>,
    setSuccessModalData: React.Dispatch<React.SetStateAction<SuccessModalData>>,
    actionsData: QuickAction[]
): QuickAction[] {
    return actionsData.map((action) => {
        if (action.modalContent) {
            let overrideProps: any = {};
            if (action.text === "Generate temporary key") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const dummyKeys = ["12345", "23456", "34567", "45678", "56789"];
                        const randomKey = dummyKeys[Math.floor(Math.random() * dummyKeys.length)];
                        console.log("Temporary key submitted:", randomKey);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: randomKey,
                                message: "Temporary key generated successfully!",
                                label: "Temporary Key",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Temporary key canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Issue parking permit") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const dummyPermits = ["P12345", "P23456", "P34567", "P45678", "P56789"];
                        const randomPermit = dummyPermits[Math.floor(Math.random() * dummyPermits.length)];
                        console.log("Parking permit submitted:", randomPermit);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: randomPermit,
                                message: "Parking permit key generated successfully!",
                                label: "Parking Permit",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Parking permit canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Report disturbance") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const complaintId = Math.floor(Math.random() * 10) + 1;
                        console.log("Report disturbance submitted, Complaint ID:", complaintId);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: complaintId.toString(),
                                message: "Your complaint is submitted!",
                                label: "Complaint ID",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Report disturbance canceled");
                        setQuickActionModalData(null);
                    },
                };
            } else if (action.text === "Renew lease") {
                overrideProps = {
                    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        const leaseId = Math.floor(Math.random() * 10) + 1;
                        console.log("Renew lease submitted, Lease ID:", leaseId);
                        setQuickActionModalData(null);
                        setTimeout(() => {
                            setSuccessModalData({
                                isOpen: true,
                                generatedKey: leaseId.toString(),
                                message: "Your lease was renewed successfully.",
                                label: "Lease ID",
                            });
                        }, 200);
                    },
                    onCancel: () => {
                        console.log("Renew lease canceled");
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
