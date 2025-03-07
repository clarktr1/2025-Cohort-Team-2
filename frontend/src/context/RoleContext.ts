import { createContext } from 'react';
import { RoleContextType } from './RoleTypes';

export const RoleContext = createContext<RoleContextType | undefined>(undefined);
