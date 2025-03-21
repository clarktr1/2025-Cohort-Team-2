
import { SingleUseAction } from "../components/SingleUseActions";
import SingleUseActionButton from "../components/SingleUseActionButton";
import LeaseDisplay from "../components/LeaseDisplay";
import { LeaseActionsProps } from "../components/LeaseDisplay"; 

//should only generate one lease and will get the data from 
const curDate = new Date()
const leaseEndDate = new Date()
leaseEndDate.setFullYear(curDate.getFullYear() + 1)

const leaseData: LeaseActionsProps = 
{
    lease_id: 1111,
    tenant_name: "Steve Smith",
    landlord_name: "Carl Smith",
    date_created: curDate,
    date_signed: null,
    date_end: leaseEndDate,
}


export const generateNewLease: SingleUseAction[] = [
    {
        text: "Generate Lease Agreement",
        classCss: "w-full mt-5 mb-3 p-2 rounded-md bg-neutral-600 text-orange-100 hover:bg-orange-500 hover:text-black",
        instance_id: null,
        modalContent: {
            header: <>Add New Tenant User</>,
            form: (
                <>
                    <LeaseDisplay lease_id={leaseData.lease_id} tenant_name={leaseData.tenant_name} landlord_name={leaseData.landlord_name} date_created={leaseData.date_created} date_signed={leaseData.date_signed} date_end={leaseData.date_end}></LeaseDisplay> 
                </>
            ),
        },
    }
];
