import { QuickAction } from "../components/QuickActions";

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
    onClick: () => console.log("Report disturbance clicked"),
  },
  {
    text: "Renew lease",
    onClick: () => console.log("Renew lease clicked"),
  },
  {
    text: "Issue parking permit",
    onClick: () => console.log("Issue parking permit clicked"),
  },
];
