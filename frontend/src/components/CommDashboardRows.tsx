
import { useState, useEffect } from "react";
import { fetchTenants } from "../hooks/useAPIRoutes";
import CommSingleUseActions from "./CommSingleUseActions";
import { userFormSendNotif } from "../data/userFormSendNotif";


export interface DashboardRowProps {
    email: string;
    first_name: string;
    last_name: string;
    phone_number: number;
}

// const users: DashboardRowProps[] = [
//     {  email: "email", first_name: "steven", last_name: "smith", phone_number: 9992223333,},
//     {  email: "email_2", first_name: "steven_2", last_name: "smith_2",phone_number: 5552224444, },
//     {  email: "email_3", first_name: "steven_3", last_name: "smith_3", phone_number: 3333333333,},
//     {  email: "email_24", first_name: "steven_4", last_name: "smith_4",phone_number: 4444444444, }
// ]

//user class and display opening
const CommDashboardRow = () => {

    const [users, updateTenantData] = useState<DashboardRowProps[]>([]);
            
            async function getProcessedLeases() {
                // const leaseData = await fetchAllLeases();
                const tenantData = await fetchTenants();
            
                // console.log(leaseData)
                console.log(tenantData)
            
                const processedTenants: DashboardRowProps[] = []
                for (const tenant of tenantData) {
            
                    processedTenants.push({
                        email: tenant.user.email,
                        first_name: tenant.user.first_name,
                        last_name: tenant.user.last_name,
                        phone_number: tenant.user.phone_number
                    })
                }
            
                updateTenantData(processedTenants);
            }
            
        useEffect(() => { getProcessedLeases() }, [] )

    return (
        <>
        {users.map((user) => (
            <tr className="h-min">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                    {user.email}
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                    {user.first_name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                    {user.last_name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                    {user.phone_number}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <CommSingleUseActions actions={userFormSendNotif} user_instance={user}></CommSingleUseActions>
                </td>
            </tr>
        ))}
        </>
        
    );
};

export default CommDashboardRow;