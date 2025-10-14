export type Region = {
  name: string;
  colors: {
    primary: string;
    accent: string;
  };
  currency: {
    code: string;
    symbol: string;
  };
  terminology: {
    savingsCircle: string;
    informalMarket: string;
    greeting: string;
  };
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  repScore: number;
  region: string;
};

export type Achievement = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

export type Activity = {
  id: string;
  user: User;
  type: 'vouch' | 'join' | 'opportunity';
  description: string;
  timestamp: string;
};

export type Opportunity = {
  id: string;
  title: string;
  company: string;
  location: string;
  repScoreRequired: number;
  earnings: string;
  imageUrl: string;
  imageHint: string;
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount?: number;
  currency?: string;
  cryptoAmount?: number;
  cryptoCurrency?: string;
  status: 'Completed' | 'Pending' | 'Failed';
};

export type SavingsCircle = {
  id: string;
  name: string;
  members: number;
  totalPot: number;
  currency: string;
  repScoreMin: number;
};

export type CircleProposal = {
  id: string;
  title: string;
  description: string;
  votesFor: number;
  votesAgainst: number;
};
