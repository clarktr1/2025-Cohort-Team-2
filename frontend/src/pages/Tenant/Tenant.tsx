
import HeroSection from "../../components/HeroSection";
import Notifications, { Notification } from "../../components/Notifications";

const tenantNotifications: Notification[] = [
    { id: 1, message: "Tenant Notification 1: Lorem ipsum dolor sit amet." },
    { id: 2, message: "Tenant Notification 2: Sed do eiusmod tempor incididunt." },
    { id: 3, message: "Tenant Notification 3: Ut enim ad minim veniam." },
];

const TenantPage = () => {
    return (
        <div className="bg-neutral-950 h-screen p-2">
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
                    {/* Notifications */}
                    <Notifications notifications={tenantNotifications} />
                </div>

            </div>
        </div>
    );
};

export default TenantPage;
