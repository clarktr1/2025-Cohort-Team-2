import { Notification } from "../types/types";

export async function fetchAllLeases(){
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

export async function fetchTenants(){
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

export async function fetchNotifications(){
    try{
        const response = await fetch("https://two025-cohort-team-2.onrender.com/api/notifications/", {
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

export async function createNotification(notifObj: Notification){
    try{
        const response = await fetch("https://two025-cohort-team-2.onrender.com/api/notifications/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token 2c3313d4873182ef51e50e6f794d76661fe08651"
            },
            body: JSON.stringify(notifObj) // Convert data object to JSON string
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


// export async function getProcessedLeases() {
//     const leaseData = await fetchAllLeases();
//     const tenantData = await fetchTenants();

//     const processedLeases = []
//     for (const lease of leaseData) {
//         const date = lease.lease_signed ? new Date(lease.lease_signed) : null;

//         processedLeases.push({
//             lease_id: lease.lease_id,
//             tenant_name: tenantData[lease.tenant - 1].user.first_name + ' ' + tenantData[lease.tenant - 1].user.last_name,
//             tenant_email: tenantData[lease.tenant - 1].user.email,
//             apartment_num: 111,
//             date_started: new Date(lease.lease_created),
//             date_end: new Date(lease.lease_end),
//             date_signed: date
//         })
//     }

//     return processedLeases;
// }