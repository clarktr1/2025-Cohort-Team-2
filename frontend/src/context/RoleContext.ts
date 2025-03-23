import { createContext } from 'react';
import { RoleContextType } from '../types/types';

export const RoleContext = createContext<RoleContextType | undefined>(undefined);
