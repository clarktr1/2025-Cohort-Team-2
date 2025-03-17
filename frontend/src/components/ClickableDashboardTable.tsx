
const ClickableDashboardTable = () => {
    return (
        <div className="bg-neutral-900">
            <div className="mx-auto max-w-7xl">
                <div className="bg-neutral-900 py-10 rounded-lg">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold text-orange-100">Leases</h1>
                                <p className="mt-2 text-sm text-orange-100">
                                    A list of all the leases this user manages.
                                </p>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-orange-500">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-orange-100 sm:pl-0"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Title
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Role
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* <tbody className="divide-y divide-orange-500"> */}
                                            {/* More rows... */}
                                            {/* {userData && userData.map((userItem, index) => {
                                                return <UserItem key={index} name={userItem.name} title={userItem.title} email={userItem.email} role={userItem.role}/>
                                            })} */}
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
    );
};

export default ClickableDashboardTable;
