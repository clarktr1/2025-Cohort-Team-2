
import { QuickAction } from "../components/QuickActions";

export const landlordHalfScreenActions: QuickAction[] = [
    {
        text: "Add New Tenant User",
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
    },
    
    {
        text: "Send community alert",
        modalContent: {
            header: <>Send Community Alert</>,
            form: (
                <form className="space-y-4">
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Message
                        </label>
                        <textarea
                            placeholder="Enter your alert message"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                            rows={4}
                        />
                    </div>
                    <div>
                        {/* <label className="block text-orange-100 text-sm font-medium mb-1">
                            Valid Until
                        </label>
                        <input
                            type="date"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        /> */}

                        <p className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                            Valid Until: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>

                    </div>
                </form>
            ),
        },
    },

    // {
    //     text: "Send notification",
    //     modalContent: {
    //         header: <>Send Notification</>,
    //         form: (
    //             <form className="space-y-4">
    //                 <div>
    //                     <label className="block text-orange-100 text-sm font-medium mb-1">
    //                         Apartment Number
    //                     </label>
    //                     <input
    //                         type="text"
    //                         placeholder="Apartment number"
    //                         className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
    //                     />
    //                 </div>
    //                 <div>
    //                     <label className="block text-orange-100 text-sm font-medium mb-1">
    //                         Tenant Name
    //                     </label>
    //                     <input
    //                         type="text"
    //                         placeholder="Tenant name"
    //                         className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
    //                     />
    //                 </div>
    //                 <div>
    //                     <label className="block text-orange-100 text-sm font-medium mb-1">
    //                         Notification Message
    //                     </label>
    //                     <textarea
    //                         placeholder="Enter notification message"
    //                         className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
    //                         rows={4}
    //                     />
    //                 </div>
    //             </form>
    //         ),
    //     },
    // }
    ,
    {
        text: "Issue temporary key",
        modalContent: {
            header: <>Issue Temporary Key</>,
            form: (
                <form className="space-y-4">
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Apartment Number
                        </label>
                        <input
                            type="text"
                            placeholder="Apartment number"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Tenant Name
                        </label>
                        <input
                            type="text"
                            placeholder="Tenant name"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Guest Name
                        </label>
                        <input
                            type="text"
                            placeholder="Guest name"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-100 text-sm font-medium mb-1">
                            Guest Email
                        </label>
                        <input
                            type="email"
                            placeholder="Guest email"
                            className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                        />
                    </div>
                    <div>
                        <p className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                            Valid Until: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>
                    </div>
                </form>
            ),
        },
    }
];
