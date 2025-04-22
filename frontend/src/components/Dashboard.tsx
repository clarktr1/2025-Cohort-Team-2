
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
    return (
        <div className="bg-neutral-900 rounded-lg p-6">
            <div className="mx-auto max-w-7xl">
                {/* Dashboard Header */}
                <header className="mb-6">
                    <h1 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">Dashboard</h1>
                    <p className="mt-2 text-sm text-center text-orange-100">
                        Overview of your account and users.
                    </p>
                </header>

                {/* Dashboard Content */}
                <div className="bg-neutral-900 py-10 rounded-lg">
                    <DashboardTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
