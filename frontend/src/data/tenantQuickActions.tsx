import { QuickAction } from "../components/QuickActions";
import ParkingPermitForm from "./ParkingPermitForm";


const disturbanceTypes = [
  "Noise",
  "Smoke",
  "Inappropriate behavior",
  "Mice",
  "Cockroaches",
  "Other",
];

export const tenantActions: QuickAction[] = [
  {
    text: "Generate temporary key",
    modalContent: {
      header: <>Generate Temporary Key</>,
      form: (
        <form className="space-y-4">
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Enter Key Details
            </label>
            <input
              type="text"
              placeholder="Key description"
              className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
            />
          </div>
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Valid Until
            </label>
            <input
              type="date"
              className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
            />
          </div>
        </form>
      ),
    },
  },
  {
    text: "Report disturbance",
    modalContent: {
      header: <>Report Disturbance</>,
      form: (
        <form className="space-y-4">
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Apartment Number
            </label>
            <input
              type="text"
              placeholder="Apartment number"
              className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
            />
          </div>
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Complaint Type
            </label>
            <select className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
              <option value="">Select Complaint Type</option>
              {disturbanceTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Complaint Description
            </label>
            <textarea
              placeholder="Describe the disturbance"
              className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
              rows={3}
            />
          </div>
        </form>
      ),
    },
  },
  {
    text: "Renew lease",
    modalContent: {
      header: <>Renew Lease</>,
      form: (
        <form className="space-y-4">
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Lease Document
            </label>
            <div className="w-full p-2 py-40 rounded-md bg-neutral-800 text-orange-100">
              <p className="text-center">[Lease PDF Document Placeholder]</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              className="h-4 w-4 text-orange-500 bg-neutral-800 border-orange-100 focus:ring-orange-500"
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-orange-100">
              I agree
            </label>
          </div>
        </form>
      ),
    },
  },
  {
    text: "Issue parking permit",
    modalContent: {
      header: <>Issue Parking Permit</>,
      form: <ParkingPermitForm />,
    },
  },
];
