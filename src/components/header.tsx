'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRegion } from '@/contexts/region-context';

export function AppHeader({ activeTab }: { activeTab: string }) {
  const { region, setRegionByName, availableRegions } = useRegion();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card/50 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10 backdrop-blur-sm">
        <div className="md:hidden">
            <SidebarTrigger />
        </div>
      <div className="w-full flex-1">
        <h1 className="font-headline text-lg font-bold">{activeTab}</h1>
      </div>
      <div className="flex items-center gap-4">
        <Select value={region.name} onValueChange={setRegionByName}>
          <SelectTrigger className="w-[180px]">
            <div className="flex items-center gap-2">
              <region.icon className="h-4 w-4" />
              <SelectValue placeholder="Select Region" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {availableRegions.map((r) => (
              <SelectItem key={r.name} value={r.name}>
                <div className="flex items-center gap-2">
                  <r.icon className="h-4 w-4" />
                  <span>{r.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
