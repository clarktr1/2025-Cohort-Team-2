
import {LeaseAction} from "../components/LeaseActions";
import LeaseDisplay from "../components/LeaseDisplay";


export const leaseTableActions: LeaseAction[] = [
    {
        text: "Lease Row Data Acessed",
        modalContent: {
            header: <>Lease Number: tbd</>,

            display: (
                <LeaseDisplay tenant="Tenant Name" landlord="Landlord Name"></LeaseDisplay>
            ),
        },
    }
];
