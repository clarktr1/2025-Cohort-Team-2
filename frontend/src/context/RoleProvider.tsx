import { ReactNode, useState } from 'react';
import { RoleContext } from './RoleContext';
import { Role } from '../types/types';

export const RoleProvider = ({ children }: { children: ReactNode }) => {
    const [currentRole, setCurrentRole] = useState<Role>("entry");

    return (
        <RoleContext.Provider value={{ currentRole, setCurrentRole }}>
            {children}
        </RoleContext.Provider>
    );
};
