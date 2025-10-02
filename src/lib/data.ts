import type { User, Achievement, Activity, Opportunity, Transaction, SavingsCircle, CircleProposal } from './types';
import { Award, Briefcase, Star, Trophy, Users } from 'lucide-react';

export const mockUsers: User[] = [
  { id: '1', name: 'Amina Okoro', avatarUrl: 'https://picsum.photos/seed/user1/100/100', repScore: 850, region: 'West Africa' },
  { id: '2', name: 'Jomo Kenyatta', avatarUrl: 'https://picsum.photos/seed/user2/100/100', repScore: 720, region: 'East Africa' },
  { id: '3', name: 'Thabo Mbeki', avatarUrl: 'https://picsum.photos/seed/user3/100/100', repScore: 910, region: 'Southern Africa' },
  { id: '4', name: 'Fatima Al-Fassi', avatarUrl: 'https://picsum.photos/seed/user4/100/100', repScore: 680, region: 'North Africa' },
  { id: '5', name: 'Didier Drogba', avatarUrl: 'https://picsum.photos/seed/user5/100/100', repScore: 780, region: 'West Africa' },
];

export const mockAchievements: Achievement[] = [
  { id: '1', title: 'Community Pillar', icon: Users, color: 'text-blue-500' },
  { id: '2', title: 'Top Earner', icon: Trophy, color: 'text-yellow-500' },
  { id: '3', title: 'Master Voucher', icon: Star, color: 'text-green-500' },
  { id: '4', title: 'Opportunity Seeker', icon: Briefcase, color: 'text-indigo-500' },
  { id: '5', title: 'First Vouch', icon: Award, color: 'text-purple-500' },
  { id: '6', title: 'Regional Connector', icon: Users, color: 'text-red-500' },
];

export const mockActivities: Activity[] = [
  { id: '1', user: mockUsers[1], type: 'vouch', description: 'vouched for your "Software Development" skill.', timestamp: '2 hours ago' },
  { id: '2', user: mockUsers[2], type: 'join', description: 'joined your "Lagos Innovators" circle.', timestamp: '5 hours ago' },
  { id: '3', user: mockUsers[0], type: 'opportunity', description: 'also applied for the "Senior Frontend Developer" role.', timestamp: '1 day ago' },
  { id: '4', user: mockUsers[3], type: 'vouch', description: 'vouched for your "Project Management" skill.', timestamp: '2 days ago' },
];

export const mockOpportunities: Opportunity[] = [
  { id: '1', title: 'Senior Frontend Developer', company: 'Paystack', location: 'Lagos, Nigeria', repScoreRequired: 700, earnings: '~$5,000/mo', imageUrl: 'https://picsum.photos/seed/opport1/600/400', imageHint: 'office space' },
  { id: '2', title: 'Product Manager, M-Pesa', company: 'Safaricom', location: 'Nairobi, Kenya', repScoreRequired: 800, earnings: '~$6,000/mo', imageUrl: 'https://picsum.photos/seed/opport2/600/400', imageHint: 'team meeting' },
  { id: '3', title: 'Data Scientist', company: 'Takealot', location: 'Cape Town, SA', repScoreRequired: 750, earnings: '~$4,500/mo', imageUrl: 'https://picsum.photos/seed/opport3/600/400', imageHint: 'person coding' },
];

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2024-07-20', description: 'Payment from Jomo K.', amount: 5000, currency: 'KES', status: 'Completed' },
  { id: '2', date: '2024-07-19', description: 'Ajo contribution', amount: -10000, currency: 'NGN', status: 'Completed' },
  { id: '3', date: '2024-07-18', description: 'Request to Fatima A.', amount: 2500, currency: 'EGP', status: 'Pending' },
  { id: '4', date: '2024-07-17', description: 'Mobile Money Top-up', amount: 150000, currency: 'ZAR', status: 'Completed' },
];

export const mockSavingsCircles: SavingsCircle[] = [
    { id: '1', name: 'Lagos Tech Innovators', members: 12, totalPot: 1200000, currency: 'NGN', repScoreMin: 600 },
    { id: '2', name: 'Nairobi Creative Collective', members: 8, totalPot: 80000, currency: 'KES', repScoreMin: 500 },
    { id: '3', name: 'Jozi Entrepreneurs Stokvel', members: 20, totalPot: 50000, currency: 'ZAR', repScoreMin: 700 },
];

export const mockProposal: CircleProposal = {
    id: '1',
    title: 'Invest circle funds in a community coding bootcamp',
    description: 'Proposal to allocate 20% of the circle\'s funds to sponsor a 3-month coding bootcamp for 10 underprivileged youths in the Yaba area.',
    votesFor: 78,
    votesAgainst: 22,
};
