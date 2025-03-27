import { Notification } from "../types/types";
import { fetchNotifications } from "../hooks/useAPIRoutes";
import { useState, useEffect } from "react";

const Notifications = () => {

    const [globalNotifs, updateLeaseData] = useState<Notification[]>([]);
        
        async function getProcessedLeases() {
            const notifData = await fetchNotifications();
        
            console.log(notifData)
        
            const processedNotifs: Notification[] = []
            for (const notif of notifData) {
        
                processedNotifs.push({
                    id: notif.id.toString(),
                    tenant_id: notif.user.toString(),
                    date: new Date(notif.time),
                    message: notif.message
                })
            }
        
            updateLeaseData(processedNotifs);
        }
        
        useEffect(() => { getProcessedLeases() }, [] )

    return (
        <table className="">
            <tbody>
            {globalNotifs.map((notification) => (
                <p key={notification.id} className="text-orange-100 mb-3 hover:bg-neutral-800">
                    {notification.id}-{notification.date.toLocaleDateString()}: {notification.message}
                </p>
            ))}
            </tbody>
        </table>
    );
};

export default Notifications;

