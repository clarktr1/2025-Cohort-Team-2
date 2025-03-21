
import SingleUseActions from "../components/SingleUseActions";
import { SingleUseAction } from "../components/SingleUseActions";
import { generateNewLease } from "./generateNewLease";

interface ApartmentProps {
    apt_id: string;
    apt_num: number;
    is_occupied: boolean;
}


const apartments: ApartmentProps[] = [
    {
        apt_id: "APT",
        apt_num: 1,
        is_occupied: true
    },
    {
        apt_id: "APT2",
        apt_num: 2,
        is_occupied: true
    },
    {
        apt_id: "APT3",
        apt_num: 3,
        is_occupied: false
    },
    {
        apt_id: "APT4",
        apt_num: 4,
        is_occupied: false
    },
]


export const userFormAddAction: SingleUseAction[] = [
    {
        text: "Add Tenant User",
        classCss: "block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-orange-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-500",
        instance_id: null,
        modalContent: {
            header: <>Add New Tenant User</>,
            form: (
                <form className="space-y-4">
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Tenant Email
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Tenant First Name
                        </label>
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Tenant Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Last name"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Tenant Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Assign Room
                        </label>
                        <select
                            // value={selected}
                            className="w-full rounded-lg border border-orange-100 bg-neutral-900 text-orange-100 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            <option value="" disabled>
                            Choose an option
                            </option>
                            
                            {apartments
                            .filter((apt) => !apt.is_occupied)
                            .map((apt) => (
                                <option value={apt.apt_id}>{apt.apt_num}</option>
                            ))}
                        </select>
                    </div>
                    <div className="">
                        <SingleUseActions actions={generateNewLease}></SingleUseActions>
                    </div>
                </form>
            ),
        },
    }
];
