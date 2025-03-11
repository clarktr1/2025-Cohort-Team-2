
import HeroSection from "../../components/HeroSection";
import Notifications, { Notification } from "../../components/Notifications";
import QuickActions, { QuickAction } from "../../components/QuickActions";
import Dashboard from "../../components/Dashboard";

const tenantNotifications: Notification[] = [
    { id: 1, message: "Tenant Notification 1: Lorem ipsum dolor sit amet." },
    { id: 2, message: "Tenant Notification 2: Sed do eiusmod tempor incididunt." },
    { id: 3, message: "Tenant Notification 3: Ut enim ad minim veniam." },
];

const tenantActions: QuickAction[] = [
    { text: "Generate temporary key", onClick: () => console.log("Generate temporary key clicked") },
    { text: "Report disturbance", onClick: () => console.log("Report disturbance clicked") },
    { text: "Renew lease", onClick: () => console.log("Renew lease clicked") },
    { text: "Issue parking permit", onClick: () => console.log("Issue parking permit clicked") },
];

const TenantPage = () => {
    return (
        <div className="bg-neutral-950 h-full p-2">
            <div className="flex flex-col gap-2">
                <div className="flex h-2/5 rounded-lg overflow-hidden gap-2">
                    <HeroSection
                        imageSrc="/apartment_bg_img.jpg"
                        title={
                            <>
                                Welcome to{" "}
                                <span className="text-orange-500 font-bold">Smart Living</span>
                            </>
                        }
                        subtitle="Experience comfort, embrace innovation."
                    />

                    <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
                        <Notifications notifications={tenantNotifications} />
                    </div>
                </div>


                <div>
                    <QuickActions actions={tenantActions} />
                </div>

                <div>
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default TenantPage;
