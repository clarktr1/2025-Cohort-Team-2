
const AccessControlActivitiesTable = () => {
    return (
        <div className="bg-neutral-900 rounded-lg p-6">
            <div className="mx-auto max-w-7xl">
                {/* Dashboard Header */}
                <header className="mb-6">
                    <h1 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">Your Activity Logs</h1>
                </header>

                {/* Dashboard Content */}
                <div className="bg-neutral-900 rounded-lg">
                    <div className="bg-neutral-900 rounded-lg">
                        <div className="mx-auto max-w-7xl">

                            <div className="px-4 sm:px-6 lg:px-8">
                                {/* Table */}
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-orange-500">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-orange-100 sm:pl-0"
                                                        >
                                                            Activity
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100"
                                                        >
                                                            Start Date/Time
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100"
                                                        >
                                                            End Date/Time
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-lg font-semibold text-orange-100"
                                                        >
                                                            Status
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-right text-lg font-semibold text-orange-100"
                                                        >
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-500">
                                                    <tr>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                            Door
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            3/20/2025
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            3/20/2025
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            Expired
                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                            <a href="#" className="text-orange-100 font-bold border border-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:text-orange-400">
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                            Parking Permit
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            3/17/2025
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            3/25/2025
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-500">
                                                            Active
                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                            <a href="#" className="text-neutral-900 font-bold bg-orange-500 border border-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:bg-orange-400">
                                                                Withdraw
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                            Guest Key
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            3/12/2025
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            3/19/2025
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                            Expired
                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                            <a href="#" className="text-orange-100 font-bold border border-orange-500 py-2 px-3 rounded-lg cursor-pointer hover:text-orange-400">
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    {/* More rows... */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End Table */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default AccessControlActivitiesTable
