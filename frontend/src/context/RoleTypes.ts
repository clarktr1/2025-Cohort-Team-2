export type Role = "entry" | "tenant" | "landlord";

export interface RoleContextType {
  currentRole: Role;
  setCurrentRole: (role: Role) => void;
}
