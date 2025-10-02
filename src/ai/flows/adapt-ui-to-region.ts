'use server';
/**
 * @fileOverview An AI agent to adapt the UI to the user's region.
 *
 * - adaptUiToRegion - A function that adapts the UI based on the region.
 * - AdaptUiToRegionInput - The input type for the adaptUiToRegion function.
 * - AdaptUiToRegionOutput - The return type for the adaptUiToRegion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptUiToRegionInputSchema = z.object({
  region: z
    .string()
    .describe("The user's region (e.g., West Africa, East Africa, Southern Africa, North Africa, Central Africa)."),
  currentUiElements: z
    .string()
    .describe('The current UI elements in JSON format that need to be adapted.'),
});
export type AdaptUiToRegionInput = z.infer<typeof AdaptUiToRegionInputSchema>;

const AdaptUiToRegionOutputSchema = z.object({
  adaptedUiElements: z
    .string()
    .describe('The adapted UI elements in JSON format for the specified region.'),
});
export type AdaptUiToRegionOutput = z.infer<typeof AdaptUiToRegionOutputSchema>;

export async function adaptUiToRegion(input: AdaptUiToRegionInput): Promise<AdaptUiToRegionOutput> {
  return adaptUiToRegionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptUiToRegionPrompt',
  input: {schema: AdaptUiToRegionInputSchema},
  output: {schema: AdaptUiToRegionOutputSchema},
  prompt: `You are an AI assistant specializing in adapting user interfaces to different regions within Africa.

  Given the user's region and the current UI elements, your task is to modify the UI elements to better suit the regional preferences.
  Consider the following aspects:
  - Language: Use the appropriate language or dialect for the region.
  - Currency: Display prices in the local currency.
  - Cultural Elements: Incorporate regional cultural symbols, patterns, and design aesthetics.
  - Payment Methods: Prioritize payment methods that are commonly used in the region (e.g., M-Pesa in East Africa).

  Region: {{{region}}}
  Current UI Elements: {{{currentUiElements}}}

  Adapted UI Elements (JSON format):`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ],
  },
});

const adaptUiToRegionFlow = ai.defineFlow(
  {
    name: 'adaptUiToRegionFlow',
    inputSchema: AdaptUiToRegionInputSchema,
    outputSchema: AdaptUiToRegionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
