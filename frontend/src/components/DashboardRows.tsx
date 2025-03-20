import SingleUseAction from "./SingleUseAction";
import { userFormUpdateAction } from "../data/userFormUpdateAction";


interface DashboardRowProps {
    email: string;
    first_name: string;
    last_name: string;
    phone_number: number;
}

const users: DashboardRowProps[] = [
    { 
        email: "email",
        first_name: "steven",
        last_name: "smith",
        phone_number: 1112223333,
    },
    { 
        email: "email_2",
        first_name: "steven_2",
        last_name: "smith_2",
        phone_number: 5552224444,
    }
]

//user class and display opening
const DashboardRow = () => {

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
                    <SingleUseAction actions={userFormUpdateAction}></SingleUseAction>
                </td>
            </tr>
        ))}
        </>
        
    );
};

export default DashboardRow;