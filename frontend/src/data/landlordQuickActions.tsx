import { QuickAction } from "../components/QuickActions";
import CommunityAlertForm from "../components/CommunityAlertForm";
import SendNotificationForm from "../components/SendNotificationForm";
import IssueTemporaryKeyForm from "../components/IssueTemporaryKeyForm";
// Assume RenewLeaseForm is already implemented

export const landlordActions: QuickAction[] = [
    {
        text: "Send community alert",
        modalContent: {
            header: <>Send Community Alert</>,
            form: (
                <CommunityAlertForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Community alert submitted");
                    }}
                    onCancel={() => console.log("Community alert canceled")}
                />
            ),
        },
    },
    {
        text: "Send notification",
        modalContent: {
            header: <>Send Notification</>,
            form: (
                <SendNotificationForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Notification submitted");
                    }}
                    onCancel={() => console.log("Notification canceled")}
                />
            ),
        },
    },
    {
        text: "Issue temporary key",
        modalContent: {
            header: <>Issue Temporary Key</>,
            form: (
                <IssueTemporaryKeyForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Temporary key submitted");
                    }}
                    onCancel={() => console.log("Temporary key canceled")}
                />
            ),
        },
    },
    {
        text: "Something else",
        onClick: () => console.log("Something else clicked"),
    },
];
