import { QuickAction } from "../components/QuickActions";
import IssueTemporaryKeyForm from "../components/IssueTemporaryKeyFormLandlord";
import ParkingPermitFormLanlord from "../components/ParkingPermitForm";
import PackageLockerForm from "../components/PackageLockerForm";

export const accessControlActionsLandlord: QuickAction[] = [
    {
        text: "Issue Temporary Key",
        modalContent: {
            header: <>Issue Temporary Key</>,
            form: (
                <IssueTemporaryKeyForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Issue Temporary Key submitted");
                    }}
                    onCancel={() => console.log("Issue Temporary Key canceled")}
                />
            ),
        },
    },
    {
        text: "Issue parking permit",
        modalContent: {
            header: <>Issue Parking Permit</>,
            form: (
                <ParkingPermitFormLanlord
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Parking permit submitted");
                    }}
                    onCancel={() => console.log("Parking permit canceled")}
                />
            ),
        },
    },
    {
        text: "Package Locker",
        modalContent: {
            header: <>Package Locker</>,
            form: <PackageLockerForm />,
        },
    },
];
