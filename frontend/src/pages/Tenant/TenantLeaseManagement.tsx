import React from 'react';
import ClickableDashboardTableTenant from '../../components/ClickableDashboardTableTenant';
import HalfScreenActions from '../../components/HalfScreenActions';
import { tenantHalfScreenActions } from '../../data/tenantHalfScreenActions';

const TenantLeaseManagement: React.FC = () => {
    return (
        <div className="bg-neutral-950 h-full p-2">
            <div className="flex flex-col gap-2">
                <div className="flex h-72 rounded-lg overflow-hidden gap-2">
                    <div className="bg-neutral-900 w-127 rounded-lg overflow-hidden relative">
                        <div>
                            <HalfScreenActions actions={tenantHalfScreenActions} />
                        </div>
                    </div>

                    {/* Blank Top Right */}
                    <div className="bg-neutral-900 w-3/4 rounded-lg p-4 overflow-auto bg-cover bg-center" style={{ backgroundImage: "url('/apartment_bg_img.jpg')" }}></div>
                </div>

                <div className="bg-neutral-900 rounded-b-lg p-6">
                    <div className="mx-auto max-w-7xl">
                        <header className="mb-6">
                            <h1 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">Dashboards</h1>
                        </header>
                        <div className="bg-red-900 rounded-lg">
                            {ClickableDashboardTableTenant()}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default TenantLeaseManagement;