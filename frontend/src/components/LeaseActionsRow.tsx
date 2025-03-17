interface LeaseActionsRowProps {
    text: string;
    onClick?: () => void;
    name: string;
    title: string;
    email: string;
    role: string
}

//user class and display opening
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