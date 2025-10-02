'use client';

import { useState } from 'react';
import { streamFlow } from '@genkit-ai/next/client';
import { adaptUiToRegion } from '@/ai/flows/adapt-ui-to-region';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useRegion } from '@/contexts/region-context';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';

export function AiRegionCustomizer() {
  const { region } = useRegion();
  const [adaptedContent, setAdaptedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sampleUiElements = {
    title: 'Savings Circle',
    description: 'Join a group to save money together for a common goal.',
    button: 'Join Now',
    currency: 'USD',
  };

  const [uiElements, setUiElements] = useState(JSON.stringify(sampleUiElements, null, 2));

  const handleAdaptation = async () => {
    setAdaptedContent('');
    setLoading(true);
    setError(null);

    try {
      const { stream, response } = streamFlow(adaptUiToRegion, {
        region: region.name,
        currentUiElements: uiElements,
      });

      for await (const chunk of stream()) {
        if (chunk?.adaptedUiElements) {
          setAdaptedContent(chunk.adaptedUiElements);
        }
      }

      await response();
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
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
        <Button onClick={handleAdaptation} disabled={loading} className="w-full">
          {loading ? 'Adapting...' : `Adapt for ${region.name}`}
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
                    {loading ? 'Generating adaptation...' : 'Adapted content will appear here.'}
                </div>
                )}
                 {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error.message}</AlertDescription>
                  </Alert>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
