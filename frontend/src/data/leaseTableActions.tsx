
import {LeaseAction} from "../components/LeaseActions";
import LeaseDisplay from "../components/LeaseDisplay";


export const leaseTableActions: LeaseAction[] = [
    {
        text: "Lease Row Data Acessed",
        modalContent: {
            header: <>Lease Number: tbd</>,

            display: (
                <LeaseDisplay lease_id={123456} tenant_name="Tenant Name" landlord_name="Landlord Name" date_created={new Date("2020-06-15")} date_signed={new Date()} date_end={new Date("2027-08-15")}></LeaseDisplay>
            ),
        },
    }
];
