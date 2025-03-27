import { useEffect, useState } from "react";
import { ComplaintNotificationForTenantProps } from "../types/types";

const resolutionMessages: Record<string, string> = {
    Noise:
        "Your neighbors have reported excessive noise from your apartment. Please reduce your sound levels and observe quiet hours to maintain a peaceful environment.",
    Smoke: "Ensure you don't cause smoke disturbances; consider smoking outside.",
    "Inappropriate behavior":
        "Please maintain respectful behavior and avoid actions that disturb others.",
    Mice: "Keep your apartment clean and store food properly to deter pests.",
    Cockroaches:
        "Dispose of waste properly and maintain cleanliness to help prevent cockroach infestations.",
    Other: "Please address any concerns in your apartment to maintain a pleasant environment.",
};

const ComplaintNotificationForTenant: React.FC<ComplaintNotificationForTenantProps> = ({
    complaintType,
    title,
    description,
}) => {
    const [resolution, setResolution] = useState("");

    useEffect(() => {
        // Use the provided complaintType to look up the resolution message.
        setResolution(resolutionMessages[complaintType] || "Please address the issue promptly.");
    }, [complaintType]);

    return (
        <div className="bg-neutral-900 rounded-lg p-6 text-orange-100">
            <h2 className="text-3xl text-orange-500 font-bold mb-2">
                A Complaint Has Been Reported on Your Apartment
            </h2>
            <p className="mb-4 text-xl">
                Complaint Type: <span className="font-black">{complaintType}</span>
            </p>
            <p className="mb-4 text-xl">
                Title: <span className="font-black">{title}</span>
            </p>
            <p className="italic text-lg">
                <span className="text-orange-500 font-bold">Resolution:</span> {resolution}
            </p>
            <p className="text-lg">
                Description: <span className="font-black">{description}</span>
            </p>
        </div>
    );
};

export default ComplaintNotificationForTenant;
