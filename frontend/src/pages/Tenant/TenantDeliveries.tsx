
import DeliveriesDashboardTable from "../../components/DeliveriesDashboardTable";
import { useState } from "react";

//template for delivery items
export interface DeliveryProps {
  package_id: number;
  apt_id: number;
  date_delivered: Date;
  date_recieved: Date | null;
}

const TenantDeliveries: React.FC = () => {

  const [lockerStatus, setLockerStatus] = useState<number>(0)
  // const [latestOpen, setLatestOpen] = useState<Date>(new Date())

  const toggleLocker = () => {
    const mostRecentDate = document.getElementById("recent-date");
    const currentDate = new Date()

    if(lockerStatus === 0 && mostRecentDate){
      setLockerStatus(1)

      //POST request to update dates with null delivery dates
      deliveryData.forEach((delivery) => {
        if(delivery.date_recieved == null){
          console.log("Pending Package")
          console.log(delivery.package_id)
        }
      });

      mostRecentDate.innerHTML = currentDate.toLocaleDateString()
    }
    else
      setLockerStatus(0)
  }

  const getLockerButtonCSS = () => {
    let buttonCSS = "text-white"

    if (lockerStatus == 0)
      buttonCSS = "bg-green-600 hover:bg-green-500 text-white text-4xl border-2 rounded-lg w-1/2 h-1/3";
    else
      buttonCSS = "bg-red-600 hover:bg-red-500 text-white text-4xl border-2 rounded-lg w-1/2 h-1/3";

    return buttonCSS
  }

  const getLockerButtonTitle = () => {
    const lockerButton = document.getElementById("locker-button");

    if (lockerStatus == 0 && lockerButton)
      lockerButton.innerHTML = "Locked"
    else if(lockerButton)
      lockerButton.innerHTML = "Unlocked"

    return "Locked"
  }

  //delivery data read from API
  const deliveryData: DeliveryProps[] = [
    {  package_id: 1, apt_id: 1234, date_delivered: new Date("2024-01-01"), date_recieved: new Date("2025-01-01")},
    {  package_id: 2, apt_id: 1234, date_delivered: new Date("2025-02-02"), date_recieved: null},
    {  package_id: 3, apt_id: 1234, date_delivered: new Date("2025-03-03"), date_recieved: null},
    {  package_id: 4, apt_id: 1234, date_delivered: new Date("2000-01-01"), date_recieved: new Date("2001-01-01")},

  ]

  const mostRecentDelivery = deliveryData
    .filter(delivery => delivery.date_recieved !== null) // Exclude null values
    .reduce((latest, current) => 
        current.date_recieved! > latest.date_recieved! ? current : latest
  );

  return (
    <div className="bg-neutral-950 h-screen p-2">
      <div className="flex flex-col gap-2">
        <div className="flex h-96 rounded-lg overflow-hidden gap-2">
          <div className="bg-neutral-900 flex justify-center items-center w-1/2 rounded-lg overflow-hidden relative">
              <div className="text-white absolute top-3 left-3 p-4 text-5xl">Locker Status:</div>
              <button id="locker-button" onClick={toggleLocker} className={getLockerButtonCSS()}>{getLockerButtonTitle()}</button>
          </div>

          {/* Blank Top Right */}
          <div className="flex flex-col bg-neutral-900 w-1/2 rounded-lg overflow-hidden relative">
              <div className="text-white text-4xl p-2 h-1/2">
                Locker Number:
                <div className="bg-neutral-800 flex justify-center items-center mt-8 text-3xl">#1234</div>
              </div>
              <div className="text-white text-4xl p-2 h-1/2">
                Last Opened:
                <div id="recent-date" className="bg-neutral-800 flex justify-center items-center mt-8 text-3xl">{mostRecentDelivery.date_recieved?.toLocaleDateString()}</div>
              </div>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-b-lg p-6">
          <div className="mx-auto max-w-7xl">
            <header className="mb-6">
              <h1 className="font-bold text-orange-100 mb-10 tracking-widest text-center text-4xl">Deliveries:</h1>
              
            </header>
            <div className="bg-neutral-900 py-10 rounded-lg">
              <DeliveriesDashboardTable delivery_data = {deliveryData}></DeliveriesDashboardTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDeliveries;
