import { QuickAction } from "../components/QuickActions";
import TemporaryKeyForm from "../components/TemporaryKeyForm";
import ReportDisturbanceForm from "../components/ReportDisturbanceForm";
import RenewLeaseForm from "../components/RenewLeaseForm";
import ParkingPermitForm from "../components/ParkingPermitForm";

// Dummy onKeyGenerated callback for demonstration.
// In practice, you'll pass this function down from a parent component.
const onKeyGenerated = (key: string) => {
  console.log("Key generated:", key);
  // 1. Close the TemporaryKeyForm modal.
  // 2. Open the SuccessMessageModal with the generated key and a success message.
  // For example, update your state here so that the SuccessMessageModal is rendered.
};

export const tenantActions: QuickAction[] = [
  {
    text: "Generate temporary key",
    modalContent: {
      header: <>Generate Temporary Key</>,
      form: (
        <TemporaryKeyForm
          onSubmit={(e) => {
            e.preventDefault();
            const dummyKeys = ["12345", "23456", "34567", "45678", "56789"];
            const randomKey =
              dummyKeys[Math.floor(Math.random() * dummyKeys.length)];
            console.log("Temporary key submitted:", randomKey);
            // Execute the onKeyGenerated callback to close this modal and open the success modal.
            onKeyGenerated(randomKey);
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
