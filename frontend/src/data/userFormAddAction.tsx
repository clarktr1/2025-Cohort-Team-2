
import { SingleUseAction } from "../components/SingleUseAction";

export const userFormAddAction: SingleUseAction[] = [
    {
        text: "Add Tenant User",
        classCss: "block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-orange-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-500",
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
                </form>
            ),
        },
    }
];
