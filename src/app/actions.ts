'use server';

import {
  travelKitRecommendation,
  type TravelKitRecommendationInput,
  type TravelKitRecommendationOutput,
} from '@/ai/flows/travel-kit-recommendation';
import { z } from 'zod';

const TravelKitRecommendationInputSchema = z.object({
  destination: z.string().min(1, 'Destination is required.'),
  activitiesPlanned: z.string().min(1, 'Activities are required.'),
  tripDuration: z.string().min(1, 'Trip duration is required.'),
  gender: z.enum(['Men', 'Women', 'Kids']),
  purpose: z.enum(['Trekking', 'College', 'Office', 'Couples', 'Family']),
});

export async function getTravelKitRecommendation(
  input: TravelKitRecommendationInput
): Promise<{ data: TravelKitRecommendationOutput | null; error: string | null }> {
  try {
    const validatedInput = TravelKitRecommendationInputSchema.parse(input);
    const result = await travelKitRecommendation(validatedInput);
    return { data: result, error: null };
  } catch (e: any) {
    console.error('AI recommendation error:', e);
    if (e instanceof z.ZodError) {
      return { data: null, error: 'Invalid input. Please check your entries.' };
    }
    return { data: null, error: e.message || 'An unexpected error occurred while generating recommendations.' };
  }
}
