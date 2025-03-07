
import HeroSection from "../../components/HeroSection";
import Notifications, { Notification } from "../../components/Notifications";
import QuickActions, { QuickAction } from "../../components/QuickActions";
import Dashboard from "../../components/Dashboard";

const landlordNotifications: Notification[] = [
  { id: 1, message: "Landlord Notification 1: Simplify management today." },
  { id: 2, message: "Landlord Notification 2: New maintenance requests available." },
  { id: 3, message: "Landlord Notification 3: Communication & Announcements updated." },
];

const landlordActions: QuickAction[] = [
  { text: "Send community alert", onClick: () => console.log("Send community alert clicked") },
  { text: "Send notification", onClick: () => console.log("Send notification clicked") },
  { text: "Issue temporary key", onClick: () => console.log("Issue temporary key clicked") },
  { text: "Something else", onClick: () => console.log("Something else clicked") },
];

const LandlordPage = () => {
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
            subtitle="Simplify management, maximize success."
          />
          <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
            <Notifications notifications={landlordNotifications} />
          </div>
        </div>
        <div>
          <QuickActions actions={landlordActions} />
        </div>

        <div><Dashboard /></div>
      </div>
    </div>
  );
};

export default LandlordPage;
