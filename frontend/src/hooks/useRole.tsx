import { useContext } from 'react';
import { RoleContext } from '../context/RoleContext';

export const useRole = () => {
    const context = useContext(RoleContext);
    if (context === undefined) {
        throw new Error('useRole must be used within a RoleProvider');
    }
    return context;
};
