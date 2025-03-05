
import HeroSection from "../../components/HeroSection";

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
                {/* Notifications */}
                <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
                    <p className="text-white mb-2">
                        Notification 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="text-white mb-2">
                        Notification 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-white">
                        Notification 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TenantPage;
