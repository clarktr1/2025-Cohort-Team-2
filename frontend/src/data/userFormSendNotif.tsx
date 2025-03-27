import { SingleUseAction } from "../components/SingleUseActions";
import SendNotificationForm from "../components/SendNotificationForm";
// Assume RenewLeaseForm is already implemented

export const userFormSendNotif: SingleUseAction[] = [
    {
        text: "Send notification",
        classCss: "block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-orange-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-500",
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
