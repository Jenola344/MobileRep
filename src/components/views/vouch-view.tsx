'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip } from 'lucide-react';
import { StarRating } from '../shared/star-rating';

const skillCategories = ['Tech', 'Business', 'Creative', 'Trades', 'Academic', 'Social'];
const techSkills = ['Frontend Dev', 'Backend Dev', 'Mobile Dev', 'Data Science', 'UI/UX Design'];

export function VouchView() {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Vouch for Someone</CardTitle>
          <CardDescription>
            Your vouch strengthens the community. Provide an honest assessment of a skill you can attest to.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="user-search">Person to Vouch For</Label>
            <Input id="user-search" placeholder="Search by name or phone number..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="skill-category">Skill Category</Label>
                <Select>
                <SelectTrigger id="skill-category">
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    {skillCategories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="skill">Specific Skill</Label>
                <Select>
                <SelectTrigger id="skill">
                    <SelectValue placeholder="Select a skill" />
                </SelectTrigger>
                <SelectContent>
                    {techSkills.map(skill => <SelectItem key={skill} value={skill}>{skill}</SelectItem>)}
                </SelectContent>
                </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Confidence Rating</Label>
            <div className="flex items-center gap-4">
              <StarRating value={rating} onChange={setRating} size={32} />
              <span className="text-muted-foreground text-sm">
                {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Select a rating'}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="evidence-text">Reason for Vouch (optional)</Label>
            <Textarea id="evidence-text" placeholder="e.g., 'I worked with them on Project X and their React skills are top-notch...'" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="evidence-file">Attach Evidence (optional)</Label>
            <div className="flex items-center gap-2">
                <Input id="evidence-file" type="file" className="hidden"/>
                <Button asChild variant="outline">
                    <label htmlFor="evidence-file" className="cursor-pointer">
                        <Paperclip className="mr-2 h-4 w-4" />
                        Upload Photo/Document
                    </label>
                </Button>
            </div>
            <p className="text-xs text-muted-foreground">You can upload screenshots, documents, or photos as proof.</p>
          </div>
            
          <Button size="lg" className="w-full">Submit Vouch</Button>
        </CardContent>
      </Card>
    </div>
  );
}
