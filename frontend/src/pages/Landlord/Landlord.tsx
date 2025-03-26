
import HeroSection from "../../components/HeroSection";
import Notifications from "../../components/Notifications";
import Dashboard from "../../components/Dashboard";
// import { landlordActions } from "../../data/landlordQuickActions";



const LandlordPage = () => {
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
            subtitle="Simplify management, maximize success."
          />
          <div className="bg-neutral-900 rounded-lg p-4 overflow-auto">
            <Notifications/>
          </div>
        </div>
        <div>
          {/* <QuickActions actions={landlordActions} /> */}
        </div>

        <div><Dashboard /></div>
      </div>
    </div>
  );
};

export default LandlordPage;
