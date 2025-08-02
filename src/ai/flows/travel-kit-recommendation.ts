// src/ai/flows/travel-kit-recommendation.ts
'use server';

/**
 * @fileOverview A travel kit recommendation AI agent.
 *
 * - travelKitRecommendation - A function that handles the travel kit recommendation process.
 * - TravelKitRecommendationInput - The input type for the travelKitRecommendation function.
 * - TravelKitRecommendationOutput - The return type for the travelKitRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TravelKitRecommendationInputSchema = z.object({
  destination: z.string().describe('The destination of the trip.'),
  activitiesPlanned: z
    .string()
    .describe('A description of the activities planned during the trip.'),
  tripDuration: z.string().describe('The duration of the trip in days.'),
  gender: z.enum(['Men', 'Women', 'Kids']).describe('The gender of the traveler.'),
  purpose: z
    .enum(['Trekking', 'College', 'Office', 'Couples', 'Family'])
    .describe('The purpose of the trip.'),
});
export type TravelKitRecommendationInput = z.infer<typeof TravelKitRecommendationInputSchema>;

const TravelKitRecommendationOutputSchema = z.object({
  recommendedItems: z
    .array(z.string())
    .describe('A list of recommended items for the travel kit.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the recommended items, based on the input data.'),
});
export type TravelKitRecommendationOutput = z.infer<typeof TravelKitRecommendationOutputSchema>;

export async function travelKitRecommendation(
  input: TravelKitRecommendationInput
): Promise<TravelKitRecommendationOutput> {
  return travelKitRecommendationFlow(input);
}

const travelKitRecommendationPrompt = ai.definePrompt({
  name: 'travelKitRecommendationPrompt',
  input: {schema: TravelKitRecommendationInputSchema},
  output: {schema: TravelKitRecommendationOutputSchema},
  prompt: `You are an expert travel consultant, skilled at recommending travel kit items based on travel plans.

  Based on the following travel details, recommend a list of essential items for the travel kit.
  Explain your reasoning for each recommendation.

  Destination: {{{destination}}}
  Activities Planned: {{{activitiesPlanned}}}
  Trip Duration: {{{tripDuration}}} days
  Traveler Gender: {{{gender}}}
  Trip Purpose: {{{purpose}}}

  Respond with the list of recommended items and the reasoning behind each recommendation.
  `,
});

const travelKitRecommendationFlow = ai.defineFlow(
  {
    name: 'travelKitRecommendationFlow',
    inputSchema: TravelKitRecommendationInputSchema,
    outputSchema: TravelKitRecommendationOutputSchema,
  },
  async input => {
    const {output} = await travelKitRecommendationPrompt(input);
    return output!;
  }
);
