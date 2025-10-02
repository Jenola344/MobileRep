'use client';

import { useState } from 'react';
import { useFlow } from '@genkit-ai/next/client';
import { adaptUiToRegion } from '@/ai/flows/adapt-ui-to-region';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useRegion } from '@/contexts/region-context';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';

export function AiRegionCustomizer() {
  const { region } = useRegion();
  const [adapt, isInProgress] = useFlow(adaptUiToRegion);
  const [adaptedContent, setAdaptedContent] = useState('');
  
  const sampleUiElements = {
    title: 'Savings Circle',
    description: 'Join a group to save money together for a common goal.',
    button: 'Join Now',
    currency: 'USD',
  };

  const [uiElements, setUiElements] = useState(JSON.stringify(sampleUiElements, null, 2));

  const handleAdaptation = async () => {
    setAdaptedContent('');
    const result = await adapt({ region: region.name, currentUiElements: uiElements });
    if (result?.adaptedUiElements) {
      setAdaptedContent(result.adaptedUiElements);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Current Region: {region.name}</AlertTitle>
          <AlertDescription>
            The AI will adapt the content below to match the cultural and linguistic context of this region.
          </AlertDescription>
        </Alert>
        <Card>
            <CardHeader>
                <CardTitle>Original UI Elements (JSON)</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea
                    value={uiElements}
                    onChange={(e) => setUiElements(e.target.value)}
                    rows={10}
                    className="font-mono text-sm"
                />
            </CardContent>
        </Card>
        <Button onClick={handleAdaptation} disabled={isInProgress} className="w-full">
          {isInProgress ? 'Adapting...' : `Adapt for ${region.name}`}
        </Button>
      </div>
      <div className="space-y-4">
        <Card className="h-full">
            <CardHeader>
                <CardTitle>AI-Adapted UI Elements</CardTitle>
            </CardHeader>
            <CardContent>
                {adaptedContent ? (
                <Textarea
                    value={JSON.stringify(JSON.parse(adaptedContent), null, 2)}
                    readOnly
                    rows={10}
                    className="font-mono text-sm bg-muted"
                />
                ) : (
                <div className="flex items-center justify-center h-full min-h-[200px] text-muted-foreground text-sm border-dashed border-2 rounded-md">
                    {isInProgress ? 'Generating adaptation...' : 'Adapted content will appear here.'}
                </div>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
