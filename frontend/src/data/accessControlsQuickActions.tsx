import { QuickAction } from "../components/QuickActions";
import TemporaryKeyForm from "../components/TemporaryKeyForm";
import ParkingPermitForm from "../components/ParkingPermitForm";
import OpenLockDoorForm from "../components/OpenLockDoorForm";

export const accessControlActions: QuickAction[] = [

    {
        text: "Open/Lock Door",
        modalContent: {
            header: <>Open/Lock Door</>,
            form: <OpenLockDoorForm />,
        },
    },
    {
        text: "Generate temporary key",
        modalContent: {
            header: <>Generate Temporary Key</>,
            form: (
                <TemporaryKeyForm
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
        text: "Issue parking permit",
        modalContent: {
            header: <>Issue Parking Permit</>,
            form: (
                <ParkingPermitForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Parking permit submitted");
                    }}
                    onCancel={() => console.log("Parking permit canceled")}
                />
            ),
        },
    },
];