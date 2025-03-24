// import { useEffect, useState } from "react";

import SingleUseAction from "./SingleUseAction";
import { userFormAddAction } from "../data/userFormAddAction";
import { userFormUpdateAction } from "../data/userFormUpdateAction";


const CommDashboardTable = () => {
    return (
        <div className="bg-neutral-900 rounded-lg">
            <div className="mx-auto max-w-7xl">
                <div className="bg-neutral-900 py-10 rounded-lg">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold text-orange-100">Users</h1>
                                <p className="mt-2 text-sm text-orange-100">
                                    A list of all the users under your account including their name, title, email and role. 
                                    Select 'message' on a specific user to create a notification for them specifically.
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
                                                <th
                                                    scope="col"
                                                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                                >
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-orange-500">
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                    Lindsey Walton
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    Front-end Developer
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    lindsay.walton@example.com
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    Member
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <SingleUseAction actions={userFormUpdateAction}></SingleUseAction>
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
    );
};

export default CommDashboardTable;
