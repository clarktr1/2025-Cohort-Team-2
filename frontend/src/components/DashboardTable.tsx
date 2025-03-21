// import { useEffect, useState } from "react";

import SingleUseAction from "./SingleUseActions";
import { userFormAddAction } from "../data/userFormAddAction";
import DashboardRows from "./DashboardRows";


const DashboardTable = () => {
    return (
        <div className="bg-neutral-900">
            <div className="mx-auto max-w-7xl">
                <div className="bg-neutral-900 py-10 rounded-lg">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold text-orange-100">Users</h1>
                                <p className="mt-2 text-sm text-orange-100">
                                    A list of all the users in your account including their name, title, email and role.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <SingleUseAction actions={userFormAddAction}></SingleUseAction>
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
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    First Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Last Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Phone Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                                >
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-orange-500">
                                        </tbody>
                                        <tbody>
                                            {/* More rows... */}
                                            <DashboardRows></DashboardRows>
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

export default DashboardTable;