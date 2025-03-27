// import { getProcessedLeases } from "./APIRouteCallsLandlord";
import LeaseActions from "./LeaseActions";


export interface LeaseInstanceProps {
    lease_id: number;
    tenant_name: string;
    tenant_email: string;
    apartment_num: number;
    date_started: Date;
    date_end: Date;
    date_signed: Date | null;
}


async function fetchAllLeases(){
    try{
        const response = await fetch("https://two025-cohort-team-2.onrender.com/api/lease/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token 2c3313d4873182ef51e50e6f794d76661fe08651"
            },
        });

        const data = await response.json()

        if(!response.ok){
            throw new Error("some error message")
        }

        return Array.isArray(data) ? data : [];
    } catch(error){
        console.log(error)
        return []
    }
}

async function fetchTenants(){
    try{
        const response = await fetch("https://two025-cohort-team-2.onrender.com/api/all-tenants/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token 2c3313d4873182ef51e50e6f794d76661fe08651"
            },
        });

        const data = await response.json()

        if(!response.ok){
            throw new Error("some error message")
        }

        return Array.isArray(data) ? data : [];
    } catch(error){
        console.log(error)
        return []
    }
}


let leases: LeaseInstanceProps[]
async function getProcessedLeases() {
    const leaseData = await fetchAllLeases();
    const tenantData = await fetchTenants();

    console.log(leaseData)
    console.log(tenantData)

    const processedLeases = []
    for (const lease of leaseData) {
        const date = lease.lease_signed ? new Date(lease.lease_signed) : null;

        processedLeases.push({
            lease_id: lease.lease_id,
            tenant_name: tenantData[lease.tenant - 1].user.first_name + ' ' + tenantData[lease.tenant - 1].user.last_name,
            tenant_email: tenantData[lease.tenant - 1].user.email,
            apartment_num: 111,
            date_started: new Date(lease.lease_created),
            date_end: new Date(lease.lease_end),
            date_signed: date
        })
    }

    leases = processedLeases
}

getProcessedLeases()


// const leases: LeaseInstanceProps[] = [
//     { lease_id: 12345, tenant_name: "TEN_NAME", tenant_email: "TEN_EMAIL", apartment_num: 9999, date_started: new Date("2001/01/01"), date_end: new Date("2003/01/03"), date_signed: new Date("2001/02/01"),},
//     { lease_id: 22222, tenant_name: "TEN_NAME_2", tenant_email: "TEN_EMAIL_2", apartment_num: 2222, date_started: new Date("2021/01/01"), date_end: new Date("2023/01/03"), date_signed: new Date("2021/02/01"),},
//     { lease_id: 33333, tenant_name: "TEN_NAME_3", tenant_email: "TEN_EMAIL_3", apartment_num: 3333, date_started: new Date("2022/01/01"), date_end: new Date("2023/08/03"), date_signed: null,},
//     { lease_id: 44444, tenant_name: "TEN_NAME_4", tenant_email: "TEN_EMAIL_4", apartment_num: 4444, date_started: new Date("2002/01/01"), date_end: new Date("2003/05/03"), date_signed: null,},
// ]

const ClickableDashboardTable = () => {

    return (
        <div className="bg-neutral-900">
            <div className="mx-auto max-w-7xl">
                <div className="bg-neutral-900 py-10 rounded-lg">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold text-orange-100">Leases</h1>
                                <p className="mt-2 text-sm text-orange-100">
                                    A list of all the leases you manage.
                                </p>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-orange-500">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-orange-100 sm:pl-0"
                                                >
                                                    Lease ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-orange-100 sm:pl-0"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Apt Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Lease Start Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Lease End Date 
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Date Signed
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <LeaseActions actions={leases}/>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* End Table */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClickableDashboardTable;
