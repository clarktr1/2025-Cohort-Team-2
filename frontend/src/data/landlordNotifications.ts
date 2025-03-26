import { Notification } from "../types/types";

// export const landlordNotifications: Notification[] = [
//   { id: 1, message: "Landlord Notification 1: Simplify management today." },
//   { id: 2, message: "Landlord Notification 2: New maintenance requests available." },
//   { id: 3, message: "Landlord Notification 3: Communication & Announcements updated." },
// ];

export const landlordNotifications: Notification[] = [
  {  id: 111, tenant_id:"tenant1", date: new Date("10/26/2004"), message: "Hello this is the first message"},
  {  id: 222, tenant_id:null, date: new Date("10/26/2003"), message: "Hello this is the first message"},
  {  id: 333, tenant_id:"tenant3", date: new Date("10/26/2002"), message: "Hello this is the first message"},
  {  id: 444, tenant_id:"tenant4", date: new Date("01/26/2002"), message: "Hello this is the first message"},
]