'use client';

import {
  CircleUser,
  Handshake,
  Landmark,
  LayoutDashboard,
  Settings,
  Store,
} from 'lucide-react';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarProvider,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppHeader } from '@/components/header';
import { useState } from 'react';
import { DashboardView } from './views/dashboard-view';
import { VouchView } from './views/vouch-view';
import { MarketplaceView } from './views/marketplace-view';
import { FinancialHubView } from './views/financial-hub-view';
import { CirclesView } from './views/circles-view';
import { SettingsView } from './views/settings-view';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
import { PhoneVerificationDialog } from './auth/phone-verification-dialog';

const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Vouch', icon: Handshake },
    { name: 'Marketplace', icon: Store },
    { name: 'Financials', icon: Landmark },
    { name: 'Circles', icon: CircleUser },
    { name: 'Settings', icon: Settings },
];


export function AppShell() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const isMobile = useIsMobile();

  const content: { [key: string]: React.ReactNode } = {
    Dashboard: <DashboardView />,
    Vouch: <VouchView />,
    Marketplace: <MarketplaceView />,
    Financials: <FinancialHubView />,
    Circles: <CirclesView />,
    Settings: <SettingsView />,
  };
  
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r border-sidebar-border">
        <SidebarHeader className="p-4 justify-center">
            <svg
                role="img"
                aria-label="AfriRep Logo"
                className="size-8"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="hsl(var(--primary))"
                  d="M50 0L61.8 23.5L88.2 29.2L69.1 47.9L73.6 74.3L50 62.1L26.4 74.3L30.9 47.9L11.8 29.2L38.2 23.5L50 0Z"
                />
                <path
                  fill="hsl(var(--accent))"
                  d="M50 22.4L58.3 40.2L78.6 44.1L63.8 58.7L67.1 79L50 69.5L32.9 79L36.2 58.7L21.4 44.1L41.7 40.2L50 22.4Z"
                />
            </svg>
        </SidebarHeader>
        <SidebarContent>
        {isMobile ? (
             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto flex-wrap justify-center">
                    {navItems.map((item) => (
                         <TabsTrigger key={item.name} value={item.name} className="flex-col h-auto p-2 gap-1">
                            <item.icon className="size-5" />
                            <span>{item.name}</span>
                         </TabsTrigger>
                    ))}
                </TabsList>
             </Tabs>
        ) : (
            <SidebarMenu>
                {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                        onClick={() => setActiveTab(item.name)}
                        isActive={activeTab === item.name}
                        tooltip={item.name}
                    >
                        <item.icon />
                        <span>{item.name}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                ))}
            </SidebarMenu>
        )}
        </SidebarContent>
        <SidebarFooter className="p-4 justify-center">
            <PhoneVerificationDialog>
                <Button variant="outline" className="w-full justify-center group-data-[collapsible=icon]:hidden">Verify Phone</Button>
            </PhoneVerificationDialog>
             <PhoneVerificationDialog>
                <Button variant="ghost" size="icon" className="w-full hidden group-data-[collapsible=icon]:flex" />
            </PhoneVerificationDialog>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <AppHeader activeTab={activeTab} />
        <main className="p-4 lg:p-6 h-full overflow-auto">
            {content[activeTab]}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
