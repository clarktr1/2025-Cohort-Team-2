import { QuickAction } from "../components/QuickActions";
import CommunityAlertForm from "../components/CommunityAlertForm";
import SendNotificationForm from "../components/SendNotificationForm";
// Assume RenewLeaseForm is already implemented

export const landlordCommunicationActions: QuickAction[] = [
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
];
