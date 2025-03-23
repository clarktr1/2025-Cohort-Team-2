
import { SingleUseAction } from "../components/SingleUseAction";

export const userFormUpdateAction: SingleUseAction[] = [
    {
        text: "Edit User",
        classCss: "text-orange-500 hover:text-orange-400",
        modalContent: {
            header: <>Update User Info</>,
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
