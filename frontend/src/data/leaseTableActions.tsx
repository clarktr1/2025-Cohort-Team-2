
import {LeaseAction} from "../components/LeaseActions";
import LeaseDisplay from "../components/LeaseDisplay";


//load API calls here


export const leaseTableActions: LeaseAction[] = [
    {
        text: "Lease Row Data Acessed",
        modalContent: {
            header: <>Lease Number: {1234567}</>,

            display: (
                <LeaseDisplay lease_id={123456} tenant_name="TEN_NAME" landlord_name="Landlord Name" date_created={new Date("2001/01/01")} date_signed={new Date()} date_end={new Date("2027-08-15")}></LeaseDisplay>
            ),
        },
        lease_id: 1234567,
        tenant_name: "TEN_NAME",
        tenant_email: "TEN_EMAIL",
        apartment_num: 9999,
        date_started: new Date("2001/01/01"),
        date_end: new Date("2003/01/03"),
        date_signed: new Date("2001/02/01"),
    },

    {
        text: "Lease Row Data Acessed",
        modalContent: {
            header: <>Lease Number: 123456</>,

            display: (
                <LeaseDisplay lease_id={9876554} tenant_name="TEN_NAME_2" landlord_name="Landlord Name" date_created={new Date("2020-06-15")} date_signed={new Date()} date_end={new Date("2027-08-15")}></LeaseDisplay>
            ),
        },
        lease_id: 9876554,
        tenant_name: "TEN_NAME_2",
        tenant_email: "TEN_EMAIL_2",
        apartment_num: 12344,
        date_started: new Date("2021/01/01"),
        date_end: new Date("2023/01/03"),
        date_signed: new Date("2021/02/01"),
    }
];
