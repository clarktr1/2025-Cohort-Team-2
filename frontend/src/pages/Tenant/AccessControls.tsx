import QuickActions from "../../components/QuickActions";
import { accessControlActions } from "../../data/accessControlsQuickActions";
import AccessControlActivitiesTable from "../../components/AccessControlActivities";



const AccessControls = () => {
    return (
        <div className="bg-neutral-950 h-screen p-2">
            <div className="bg-neutral-900 w-full rounded-lg my-2">
                <QuickActions actions={accessControlActions} />
            </div>

            <div className="bg-neutral-900 w-full rounded-lg">
                <AccessControlActivitiesTable />
            </div>
        </div>
    );
};

export default AccessControls;
