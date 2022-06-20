import { Workspace } from '@/interfaces/Workspace';

export const useWorkspaces = () => 
    useState<Workspace[]>('workspaces', () => [])