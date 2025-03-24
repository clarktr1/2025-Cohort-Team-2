import { DeliveryProps } from "../pages/Tenant/TenantDeliveries";

interface DeliveriesDashboardTableProps {
    delivery_data: DeliveryProps[];
}

const DeliveriesDashboardTable: React.FC<DeliveriesDashboardTableProps> = ({delivery_data}) => {

    const sortedDeliveryData = [...delivery_data].sort(
        (a, b) => b.date_delivered.getTime() - a.date_delivered.getTime()
    );

    return (
        <div className="bg-neutral-900 h-full">
            <div className="mx-auto max-w-7xl h-full">
                <div className="bg-neutral-900 py-10 rounded-lg">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <p className="mt-2 text-sm text-orange-100">
                                    A list of all deliveries sent to your locked box address
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
                                                    Package ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Apt ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Date Delivered
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-orange-100"
                                                >
                                                    Date Recieved
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                                >
                                                    <span className="sr-only">Dismiss</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-orange-500">
                                        </tbody>
                                        <tbody>
                                            {sortedDeliveryData.map((delivery) => (
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-orange-100 sm:pl-0">
                                                    {delivery.package_id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    {delivery.apt_id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    {delivery.date_delivered.toLocaleDateString()}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-orange-100">
                                                    {delivery.date_recieved?.toLocaleDateString()}
                                                </td>
                                            </tr>
                                                ))
                                            };
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

export default DeliveriesDashboardTable;
