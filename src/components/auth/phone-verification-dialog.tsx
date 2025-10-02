'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { ReactNode } from 'react';

const africanCountryCodes = [
    { code: '+234', country: 'Nigeria' },
    { code: '+254', country: 'Kenya' },
    { code: '+27', country: 'South Africa' },
    { code: '+20', country: 'Egypt' },
    { code: '+233', country: 'Ghana' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+212', country: 'Morocco' },
];

export function PhoneVerificationDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Verify Your Phone Number</DialogTitle>
          <DialogDescription>
            Enter your phone number to receive a verification code. This is essential for building trust on AfriRep.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right col-span-4 text-left mb-[-8px]">
              Phone number
            </Label>
            <div className="col-span-1">
                <Select defaultValue="+234">
                    <SelectTrigger>
                        <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                        {africanCountryCodes.map(c => (
                            <SelectItem key={c.code} value={c.code}>{c.code} ({c.country})</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Input id="phone" placeholder="801 234 5678" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Send Verification Code</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
