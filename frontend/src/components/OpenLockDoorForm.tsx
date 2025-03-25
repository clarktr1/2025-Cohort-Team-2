import { useState, useEffect } from "react";

const OpenLockDoorForm: React.FC = () => {
    const [doorOpen, setDoorOpen] = useState(false);

    useEffect(() => {
        if (!doorOpen) return;

        // Start a 10-minute timer (600,000ms)
        const timerId = window.setTimeout(() => {
            setDoorOpen(false);
        }, 10 * 60 * 1000);

        // Cleanup on unmount or re-render
        return () => {
            clearTimeout(timerId);
        };
    }, [doorOpen]);

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <button
                    type="button"
                    onClick={() => setDoorOpen(true)}
                    disabled={doorOpen}
                    className={`px-4 py-2 rounded-md font-bold transition-colors duration-300 ${doorOpen
                        ? "bg-neutral-800 border-2 border-orange-100 text-orange-100 cursor-not-allowed"
                        : "bg-orange-500 text-neutral-900 hover:bg-orange-400"
                        }`}
                >
                    Open
                </button>
                <button
                    type="button"
                    onClick={() => setDoorOpen(false)}
                    disabled={!doorOpen}
                    className={`px-4 py-2 rounded-md font-bold transition-colors duration-300 ${!doorOpen
                        ? "bg-neutral-800 border-2 border-orange-100  text-orange-100 cursor-not-allowed"
                        : "bg-orange-500 text-neutral-900 hover:bg-orange-400"
                        }`}
                >
                    Lock
                </button>
            </div>
            {doorOpen && (
                <p className="text-orange-100">Door is open. Valid for 10 minutes.</p>
            )}
        </div>
    );
};

export default OpenLockDoorForm;
