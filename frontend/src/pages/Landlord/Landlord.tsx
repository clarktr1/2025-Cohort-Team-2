import HeroSection from "../../components/HeroSection";
import Notifications, { Notification } from "../../components/Notifications";

const landlordNotifications: Notification[] = [
  { id: 1, message: "Landlord Notification 1: Simplify management today." },
  { id: 2, message: "Landlord Notification 2: New maintenance requests available." },
  { id: 3, message: "Landlord Notification 3: Communication & Announcements updated." },
];

const LandlordPage = () => {
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
          subtitle="Simplify management, maximize success."
        />
        <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
          {/* Notifications */}
          <Notifications notifications={landlordNotifications} />
        </div>

      </div>
    </div>
  );
}

export default LandlordPage