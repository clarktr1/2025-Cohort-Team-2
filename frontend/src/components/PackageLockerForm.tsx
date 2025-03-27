import { useState, useEffect } from "react";

const PackageLockerForm: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [validUntil, setValidUntil] = useState<string>("");

    // When unlocked, set the validUntil time for 15 minutes and auto-lock after 15 minutes.
    useEffect(() => {
        if (isUnlocked) {
            const expiry = new Date(Date.now() + 15 * 60 * 1000);
            setValidUntil(expiry.toLocaleString());
            const timer = window.setTimeout(() => {
                setIsUnlocked(false);
                setValidUntil("");
            }, 15 * 60 * 1000);
            return () => clearTimeout(timer);
        } else {
            setValidUntil("");
        }
    }, [isUnlocked]);

    const toggleLock = () => {
        setIsUnlocked((prev) => !prev);
    };

    return (
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
                    Tenant Name
                </label>
                <input
                    type="text"
                    placeholder="Tenant name"
                    className="w-full p-2 rounded-md bg-neutral-800 text-orange-100"
                />
            </div>
            {isUnlocked && (
                <div>
                    {/* Valid for 15 minutes */}
                    <p className="w-full p-2 rounded-md bg-neutral-800 text-orange-100">
                        Valid Until: {validUntil}
                    </p>
                </div>
            )}
            <div className="mt-4 flex justify-end">
                <button
                    type="button"
                    onClick={toggleLock}
                    className="inline-flex justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-orange-400"
                >
                    {isUnlocked ? "Lock" : "Unlock"}
                </button>
            </div>
        </form>
    );
};

export default PackageLockerForm;
