import { QuickAction } from "../components/QuickActions";

const popularCarModels = [
  "Toyota Camry",
  "Honda Civic",
  "Ford Focus",
  "BMW 3 Series",
  "Audi A4",
  "Chevrolet Malibu",
  "Nissan Altima",
  "Hyundai Sonata",
  "Kia Optima",
  "Mazda3",
  "Volkswagen Jetta",
  "Subaru Impreza",
  "Honda Accord",
  "Ford Fusion",
  "Chevrolet Cruze",
  "Mercedes-Benz C-Class",
  "Lexus ES",
  "Acura TLX",
  "Infiniti Q50",
  "Volvo S60",
  "Jaguar XE",
  "Genesis G70",
  "Audi A6",
  "BMW 5 Series",
  "Cadillac CT5",
  "Other",
];

const carColors = [
  "Red",
  "Blue",
  "Black",
  "White",
  "Silver",
  "Green",
  "Gray",
  "Yellow",
  "Brown",
  "Gold",
  "Orange",
  "Purple",
  "Maroon",
  "Navy",
  "Turquoise",
  "Other",
];

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
      form: (
        <form className="space-y-4">
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Guest Name
            </label>
            <input
              type="text"
              placeholder="Guest name"
              className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
            />
          </div>
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Car Model
            </label>
            <select className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
              <option value="">Select Car Model</option>
              {popularCarModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              Car Color
            </label>
            <select className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
              <option value="">Select Car Color</option>
              {carColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-orange-100 text-sm font-medium mb-1">
              License Plate
            </label>
            <input
              type="text"
              placeholder="License plate"
              className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
            />
          </div>
        </form>
      ),
    },
  },
];
