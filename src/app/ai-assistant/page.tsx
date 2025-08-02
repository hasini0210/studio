'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getTravelKitRecommendation } from '../actions';
import type { TravelKitRecommendationOutput } from '@/ai/flows/travel-kit-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2, Package, WandSparkles } from 'lucide-react';

const formSchema = z.object({
  destination: z.string().min(2, { message: 'Destination must be at least 2 characters.' }),
  activitiesPlanned: z.string().min(10, { message: 'Please describe your activities in more detail.' }),
  tripDuration: z.string().min(1, { message: 'Trip duration is required.' }),
  gender: z.enum(['Men', 'Women', 'Kids']),
  purpose: z.enum(['Trekking', 'College', 'Office', 'Couples', 'Family']),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiAssistantPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TravelKitRecommendationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: '',
      activitiesPlanned: '',
      tripDuration: '3',
      gender: 'Women',
      purpose: 'Family',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setResult(null);
    const { data: responseData, error } = await getTravelKitRecommendation(data);
    setLoading(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error,
      });
    } else if (responseData) {
      setResult(responseData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <WandSparkles className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">AI Travel Kit Assistant</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Let our AI build the perfect travel kit for your next adventure. Just answer a few questions to get started!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Tell us about your trip</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Paris, France" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="activitiesPlanned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activities Planned</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Visiting museums, hiking, beach days..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="tripDuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Trip Duration (days)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 7" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Traveler</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select traveler type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {formSchema.shape.gender.options.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Trip</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select trip purpose" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                             {formSchema.shape.purpose.options.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <Button type="submit" disabled={loading} className="w-full font-bold text-lg py-6">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <WandSparkles className="mr-2 h-5 w-5" />
                      Get Recommendations
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center">
          {loading && (
            <div className="text-center">
              <Loader2 className="mx-auto h-16 w-16 animate-spin text-primary" />
              <p className="mt-4 text-lg text-muted-foreground">Our AI is packing your virtual bag...</p>
            </div>
          )}
          {!loading && !result && (
             <Card className="w-full h-full flex flex-col items-center justify-center bg-secondary/50 border-dashed">
                <CardContent className="text-center p-8">
                    <Package className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-headline font-semibold text-muted-foreground">Your recommended kit will appear here.</h3>
                    <p className="text-muted-foreground mt-2">Fill out the form to get started!</p>
                </CardContent>
            </Card>
          )}
          {result && (
            <Card className="w-full shadow-lg animate-in fade-in-50 duration-500">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Personalized Travel Kit</CardTitle>
                <CardDescription>Based on your trip details, here's what we recommend.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold font-headline mb-3">Recommended Items:</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {result.recommendedItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold font-headline mb-3">Reasoning:</h3>
                  <p className="text-muted-foreground bg-secondary/50 p-4 rounded-lg">{result.reasoning}</p>
                </div>
                <Button className="w-full font-bold">Add to Cart & Customize</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
