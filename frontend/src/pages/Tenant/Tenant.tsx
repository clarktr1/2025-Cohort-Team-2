
import HeroSection from "../../components/HeroSection";
import Notifications from "../../components/Notifications";
import QuickActions from "../../components/QuickActions";
import Dashboard from "../../components/Dashboard";
import { tenantActions } from "../../data/tenantQuickActions";
import { tenantNotifications } from "../../data/tenantNotifications";

const TenantPage = () => {
    return (
        <div className="bg-neutral-950 h-full p-2">
            <div className="flex flex-col gap-2">
                <div className="flex h-96 rounded-lg overflow-hidden gap-2">
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
