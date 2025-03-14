import { QuickAction } from "../components/QuickActions";
import TemporaryKeyForm from "../components/TemporaryKeyForm";
import ReportDisturbanceForm from "../components/ReportDisturbanceForm";
import RenewLeaseForm from "../components/RenewLeaseForm";
import ParkingPermitForm from "../components/ParkingPermitForm";

export const tenantActions: QuickAction[] = [
  {
    text: "Generate temporary key",
    modalContent: {
      header: <>Generate Temporary Key</>,
      form: (
        <TemporaryKeyForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Temporary key submitted");
          }}
          onCancel={() => console.log("Temporary key canceled")}
        />
      ),
    },
  },
  {
    text: "Report disturbance",
    modalContent: {
      header: <>Report Disturbance</>,
      form: (
        <ReportDisturbanceForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Report disturbance submitted");
          }}
          onCancel={() => console.log("Report disturbance canceled")}
        />
      ),
    },
  },
  {
    text: "Renew lease",
    modalContent: {
      header: <>Renew Lease</>,
      form: (
        <RenewLeaseForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Renew lease submitted");
          }}
          onCancel={() => console.log("Renew lease canceled")}
        />
      ),
    },
  },
  {
    text: "Issue parking permit",
    modalContent: {
      header: <>Issue Parking Permit</>,
      form: (
        <ParkingPermitForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Parking permit submitted");
          }}
          onCancel={() => console.log("Parking permit canceled")}
        />
      ),
    },
  },
];
