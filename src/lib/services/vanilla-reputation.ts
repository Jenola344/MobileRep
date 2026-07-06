import { localReputationService } from './local-reputation-service';

// A thin re-export layer to avoid React Query dependency.
export const reputation = localReputationService;

