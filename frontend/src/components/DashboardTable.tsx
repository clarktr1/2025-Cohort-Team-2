// import { useEffect, useState } from "react";


const DashboardTable = () => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await fetch("/api/users");
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch users");
    //             }
    //             const data = await response.json();
    //             setUsers(data);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };

    //     fetchUsers();
    // }, []);


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
                                <button
                                    type="button"
                                    className="block rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-orange-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                                >
                                    Add user
                                </button>
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
                                            {/* {users.map((user) => (
                                                <tr>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                        {user.id}
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
                                                        <a href="#" className="text-orange-500 hover:text-orange-400">
                                                            Edit<span className="sr-only">, Lindsay Walton</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}    */}
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
                                                    <a href="#" className="text-orange-500 hover:text-orange-400">
                                                        Edit<span className="sr-only">, Lindsay Walton</span>
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
    );
};

export default DashboardTable;
