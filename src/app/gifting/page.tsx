import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

export default function GiftingPage() {
  return (
     <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Gift a SAYAS Kit</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          The perfect present for any occasion. Thoughtful, personal, and ready for adventure.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
         <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Create Your Gift</CardTitle>
                <CardDescription>Select a kit and add your personal touch.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-2">1. Choose a Kit</h3>
                    <p className="text-sm text-muted-foreground">You can select a pre-made kit or build one from scratch.</p>
                    <div className="flex gap-4 mt-4">
                        <Button className="flex-1">Shop Kits</Button>
                        <Button variant="secondary" className="flex-1">Build a Kit</Button>
                    </div>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2">2. Write a Personal Message</h3>
                    <Textarea placeholder="Happy Birthday! Hope you have an amazing trip..." />
                </div>
                 <div>
                    <h3 className="font-semibold mb-2">3. Choose Eco-Wrap Style</h3>
                    <RadioGroup defaultValue="botanical" className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <RadioGroupItem value="botanical" id="botanical" className="peer sr-only" />
                            <Label htmlFor="botanical" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                <Image src="/images/wrap-botanical.jpg" width={200} height={150} alt="Botanical wrap" className="mb-2 rounded-sm" data-ai-hint="botanical pattern"/>
                                Botanical Bliss
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="wanderlust" id="wanderlust" className="peer sr-only" />
                             <Label htmlFor="wanderlust" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                <Image src="/images/wrap-map.jpg" width={200} height={150} alt="Travel map wrap" className="mb-2 rounded-sm" data-ai-hint="map pattern"/>
                                Wanderlust Map
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2">4. Recipient Details</h3>
                    <div className="space-y-4">
                        <Input placeholder="Recipient's Name"/>
                        <Input placeholder="Recipient's Address"/>
                    </div>
                 </div>
                 <Button className="w-full text-lg py-6 font-bold">Proceed to Payment</Button>
            </CardContent>
         </Card>
         <div className="sticky top-24">
             <h2 className="text-2xl font-headline font-semibold mb-4 text-center">Gift Preview</h2>
            <Card className="shadow-xl">
                 <Image src="/images/gift-preview.jpg" width={600} height={400} alt="Wrapped gift preview" className="rounded-t-lg" data-ai-hint="gift box"/>
                <CardContent className="p-6">
                    <p className="italic text-muted-foreground">"Happy Birthday! Hope you have an amazing trip..."</p>
                    <p className="mt-4 font-semibold">Wrapped in: <span className="font-normal text-primary">Botanical Bliss</span></p>
                </CardContent>
            </Card>
             <p className="text-center mt-4 text-sm text-muted-foreground">We deliver for Birthdays, Weddings, Farewells, and Corporate events.</p>
         </div>
      </div>
    </div>
  );
}
