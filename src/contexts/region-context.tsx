'use client';

import { createContext, useContext, useState, useMemo, useEffect, type ReactNode } from 'react';
import type { Region } from '@/lib/types';
import { regions } from '@/lib/regions';

interface RegionContextType {
  region: Region;
  setRegionByName: (name: string) => void;
  availableRegions: Region[];
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [currentRegion, setCurrentRegion] = useState<Region>(regions[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', currentRegion.colors.primary);
    root.style.setProperty('--ring', currentRegion.colors.primary);
    root.style.setProperty('--accent', currentRegion.colors.accent);
    
    // For charts
    root.style.setProperty('--chart-1', currentRegion.colors.primary);
    root.style.setProperty('--chart-2', currentRegion.colors.accent);

    const darkRoot = document.querySelector('.dark');
    if (darkRoot) {
      // You might want to define dark mode variations of your regional colors
      // For now, we'll just use the same ones but you could adjust lightness
      darkRoot.style.setProperty('--primary', currentRegion.colors.primary);
      darkRoot.style.setProperty('--ring', currentRegion.colors.primary);
      darkRoot.style.setProperty('--accent', currentRegion.colors.accent);
      darkRoot.style.setProperty('--chart-1', currentRegion.colors.primary);
      darkRoot.style.setProperty('--chart-2', currentRegion.colors.accent);
    }


  }, [currentRegion]);

  const setRegionByName = (name: string) => {
    const newRegion = regions.find((r) => r.name === name);
    if (newRegion) {
      setCurrentRegion(newRegion);
    }
  };

  const value = useMemo(
    () => ({
      region: currentRegion,
      setRegionByName,
      availableRegions: regions,
    }),
    [currentRegion]
  );

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}
