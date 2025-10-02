import type { Region } from '@/lib/types';
import { AdinkraGyeNyameIcon } from '@/components/icons/adinkra-gye-nyame';
import { MaasaiPatternIcon } from '@/components/icons/maasai-pattern';
import { NdebelePatternIcon } from '@/components/icons/ndebele-pattern';
import { IslamicPatternIcon } from '@/components/icons/islamic-pattern';
import { KubaPatternIcon } from '@/components/icons/kuba-pattern';

export const regions: Region[] = [
  {
    name: 'West Africa',
    colors: { primary: 'hsl(151 100% 27%)', accent: 'hsl(20 100% 60%)' },
    currency: { code: 'NGN', symbol: '₦' },
    terminology: {
      savingsCircle: 'Ajo/Esusu',
      informalMarket: 'Balogun Market',
      greeting: 'How far?',
    },
    icon: AdinkraGyeNyameIcon,
  },
  {
    name: 'East Africa',
    colors: { primary: 'hsl(20 100% 60%)', accent: 'hsl(158 90% 30%)' },
    currency: { code: 'KES', symbol: 'KSh' },
    terminology: {
      savingsCircle: 'Chama',
      informalMarket: 'Maasai Market',
      greeting: 'Jambo!',
    },
    icon: MaasaiPatternIcon,
  },
  {
    name: 'Southern Africa',
    colors: { primary: 'hsl(227 70% 40%)', accent: 'hsl(20 100% 60%)' },
    currency: { code: 'ZAR', symbol: 'R' },
    terminology: {
      savingsCircle: 'Stokvel',
      informalMarket: 'Soweto Market',
      greeting: 'Howzit?',
    },
    icon: NdebelePatternIcon,
  },
  {
    name: 'North Africa',
    colors: { primary: 'hsl(227 70% 40%)', accent: 'hsl(0 70% 50%)' },
    currency: { code: 'EGP', symbol: 'E£' },
    terminology: {
      savingsCircle: 'Gameyya',
      informalMarket: 'Khan el-Khalili',
      greeting: 'Salam!',
    },
    icon: IslamicPatternIcon,
  },
  {
    name: 'Central Africa',
    colors: { primary: 'hsl(158 90% 30%)', accent: 'hsl(39 95% 50%)' },
    currency: { code: 'XAF', symbol: 'FCFA' },
    terminology: {
      savingsCircle: 'Tontine',
      informalMarket: 'Marché Central',
      greeting: 'Bonjour!',
    },
    icon: KubaPatternIcon,
  },
];
