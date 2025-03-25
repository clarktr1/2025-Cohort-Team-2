export interface LeaseActionsRowProps {
    text: string;
    onClick?: () => void;
    lease_id: number;
    tenant_name: string;
    tenant_email: string;
    apartment_num: number;
    date_started: Date;
    date_end: Date;
    date_signed: Date | null;
}


//user class and display opening
const LeaseActionsRow: React.FC<LeaseActionsRowProps> = ({onClick, lease_id, tenant_name, tenant_email, apartment_num, date_started, date_end, date_signed}) => {

    return (
        <tr onClick={onClick} className="cursor-pointer hover:bg-orange-500 duration-300">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                {lease_id}
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                {tenant_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                {tenant_email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                {apartment_num}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                {date_started.toLocaleDateString()}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                {date_end.toLocaleDateString()}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                {date_signed?.toLocaleDateString()}
            </td>
        </tr>
    );
};

export default LeaseActionsRow;