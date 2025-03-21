import React from 'react';
import ClickableDashboardTable from '../../components/ClickableDashboardTable';
import { leaseTableActions } from '../../data/leaseTableActions';

const TenantLeaseManagement: React.FC = () => {

    return (
        <>
            {/* Background ----- fix it overflowing onto the sidebare */}
            <div className="flex items-center gap-10 justify-center place-items-start
                             bg-neutral-900 
                             felx-grow h-screen">
                
                {/* Title */}
                <div className="absolute top-0 left-0 right-0 bg-neutral-900  
                                h-22 w-screen
                                flex gap-0">
                    <h1 className="w-1/2 text-white text-4xl ml-22 p-4">
                        My Leases:
                    </h1>
                </div>

                {/* Display */}
                <div className="rounded-2xl h-9/10 w-full flex-grow mt-20 overflow-auto">
                    {ClickableDashboardTable(leaseTableActions)}

                </div>
                {/* Lease Display */}
                
            </div>
        </>
    );
};

export default TenantLeaseManagement;