import { useState } from "react";
import { ParkingPermitFormProps } from "../types/types";


const carData: Record<string, string[]> = {
    Toyota: ["Camry"],
    Honda: ["Civic", "Accord"],
    Ford: ["Focus", "Fusion"],
    BMW: ["3 Series", "5 Series"],
    Audi: ["A4", "A6"],
    Chevrolet: ["Malibu", "Cruze"],
    Nissan: ["Altima"],
    Hyundai: ["Sonata"],
    Kia: ["Optima"],
    Mazda: ["Mazda3"],
    Volkswagen: ["Jetta"],
    Subaru: ["Impreza"],
    "Mercedes-Benz": ["C-Class"],
    Lexus: ["ES"],
    Acura: ["TLX"],
    Infiniti: ["Q50"],
    Volvo: ["S60"],
    Jaguar: ["XE"],
    Genesis: ["G70"],
    Cadillac: ["CT5"],
};

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

function ParkingPermitForm({ onSubmit, onCancel }: ParkingPermitFormProps) {
    const [selectedMake, setSelectedMake] = useState<string>("");
    const [selectedModel, setSelectedModel] = useState<string>("");

    return (
        <form className="space-y-4" onSubmit={onSubmit}>
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
                    Car Make
                </label>
                <select
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                    value={selectedMake}
                    onChange={(e) => {
                        setSelectedMake(e.target.value);
                        setSelectedModel("");
                    }}
                >
                    <option value="">Select Car Make</option>
                    {Object.keys(carData).map((make) => (
                        <option key={make} value={make}>
                            {make}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-orange-100 text-sm font-medium mb-1">
                    Car Model
                </label>
                <select
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    disabled={!selectedMake}
                >
                    <option value="">Select Car Model</option>
                    {selectedMake &&
                        carData[selectedMake]?.map((model: string) => (
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
            <div>
                <p className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                    Valid Until:{" "}
                    {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
            </div>
            <div className="mt-4 flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="inline-flex justify-center rounded-md border-2 border-orange-100 bg-neutral-900 px-3 py-2 text-sm font-semibold text-orange-100 shadow-sm hover:bg-neutral-800"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-orange-400"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ParkingPermitForm;
