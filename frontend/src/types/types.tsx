export type Role = "entry" | "tenant" | "landlord";

export type RoleContextType = {
    currentRole: Role;
    setCurrentRole: (role: Role) => void;
}

export type CommunityAlertFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export type HeroSectionProps = {
    imageSrc: string;
    title: React.ReactNode;
    subtitle: string;
}

export type IssueTemporaryKeyFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export interface Notification {
    id: number;
    message: string;
}

export type NotificationsProps = {
    notifications: Notification[];
}

export type ParkingPermitFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export type QuickActionButtonProps = {
    text: string;
    onClick?: () => void;
}


export type QuickActionModalProps = {
    isOpen: boolean;
    onClose: () => void;
    header: React.ReactNode;
    form: React.ReactNode;
}

export type RenewLeaseFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}



export type ReportDisturbanceFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export type SendNotificationFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export type SuccessModalProps = {
    isOpen: boolean;
    onClose: () => void;
    generatedKey: string;
    message: string;
    label?: string; // e.g., "Key", "Parking Permit", "Complaint ID", etc.
}

export type TemporaryKeyFormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}


export type RecordData = {
    apartmentNumber: string;
    tenantName: string;
    activityName: string; // e.g., "Parking Permit", "Door", "Temporary Key"
    startDate: string;
    endDate: string;
    status: string;
    // Optional extra details:
    carModel?: string;
    carColor?: string;
    description?: string;
}

export type ViewRecordModalProps = {
    isOpen: boolean;
    onClose: () => void;
    record: RecordData;
}

export type WithdrawRecordModalProps = {
    isOpen: boolean;
    onClose: () => void;
    record: RecordData;
    onWithdraw: (updatedRecord: RecordData) => void;
}

export type SuccessModalData = {
    isOpen: boolean;
    generatedKey: string;
    message: string;
    label: string;
}

export type ComplaintData = {
    apartmentNumber: string;
    tenantName: string;
    complaintTitle: string;
    description: string;
};

export type ComplaintNotificationForTenantProps = {
    complaintType: string;
    title: string;
    description: string;
};

export type LandlordComplaintData = {
    apartmentNumber: string;         // Apartment being complained about.
    tenantName: string;              // Tenant in that apartment.
    sourceApartmentNumber: string;   // Complainant's apartment.
    sourceTenantName: string;        // Complainant's name.
    complaintTitle: string;
    description: string;
};