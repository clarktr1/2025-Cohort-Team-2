import { Notification } from "../types/types";

//API Call to get all notifications
const notifs: Notification[] = [
    {  id: 111, tenant_id:"tenant1", date: new Date("10/26/2004"), message: "Hello this is the first global message"},
    {  id: 222, tenant_id:null, date: new Date("10/26/2003"), message: "Hello this is the second global message"},
    {  id: 333, tenant_id:"tenant3", date: new Date("10/26/2002"), message: "Hello this is the third global message"},
    {  id: 444, tenant_id:"tenant4", date: new Date("01/26/2002"), message: "Hello this is the first global message"},
]

let globalNotifs: Notification[]

const getGlobalNotifs = () => {

    globalNotifs = notifs.filter(notif => notif.tenant_id !== null)
    globalNotifs = globalNotifs.sort((a,b) => b.date.getTime() - a.date.getTime())

    console.log(getGlobalNotifs)
};

getGlobalNotifs()

const Notifications = () => {
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

