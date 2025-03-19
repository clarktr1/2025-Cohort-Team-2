interface LeaseActionsRowProps {
    text: string;
    onClick?: () => void;
    // tenant_name: string;
    // tenant_email: string;
    // apartment_num: number;
    // date_started: Date;
    // date_end: Date;
    // date_signed: Date;


    name: string;
    title: string;
    email: string;
    role: string
}

//user class and display opening
// const LeaseActionsRow: React.FC<LeaseActionsRowProps> = ({ text, onClick, tenant_name, tenant_email, apartment_num, date_started, date_end, date_signed}) => {
//     console.log({text})

//     return (
//         <tr onClick={onClick} className="cursor-pointer hover:bg-orange-500 duration-300">
//             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
//                 {tenant_name}
//             </td>
//             <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
//                 {tenant_email}
//             </td>
//             <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
//                 {apartment_num}
//             </td>
//             <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
//                 {date_started}
//             </td>
//             <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
//                 {date_end}
//             </td>
//             <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
//                 {date_signed}
//             </td>
//         </tr>
//     );
// };

const LeaseActionsRow: React.FC<LeaseActionsRowProps> = ({ text, onClick, name, title, email, role }) => {
    
    console.log({text})

   return (
       <tr onClick={onClick} className="cursor-pointer hover:bg-orange-500 duration-300">
           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
               {name}
           </td>
           <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
               {title}
           </td>
           <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
               {email}
           </td>
           <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
               {role}
           </td>
       </tr>
   );
};

export default LeaseActionsRow;