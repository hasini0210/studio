import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { WandSparkles } from 'lucide-react';
import Link from 'next/link';

export default function BuildKitPage() {
  const items = [
    { category: "Toiletries", name: "Shampoo", price: 150 },
    { category: "Toiletries", name: "Conditioner", price: 150 },
    { category: "Toiletries", name: "Body Wash", price: 120 },
    { category: "Grooming", name: "Razor", price: 200 },
    { category: "Grooming", name: "Shaving Cream", price: 100 },
    { category: "First Aid", name: "Band-Aids", price: 50 },
    { category: "First Aid", name: "Antiseptic Wipes", price: 80 },
    { category: "Add-ons", name: "Power Bank", price: 1200 },
    { category: "Add-ons", name: "Travel Journal", price: 400 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Build Your Own Kit</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Hand-pick your essentials for a truly personalized travel experience.
        </p>
         <Button asChild variant="outline" className="mt-4 gap-2">
            <Link href="/ai-assistant">
                <WandSparkles className="h-4 w-4"/>
                Use AI Assistant
            </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-headline font-semibold mb-4">1. Basics</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Gender</Label>
                    <Select defaultValue="women">
                      <SelectTrigger><SelectValue/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="men">Men</SelectItem>
                        <SelectItem value="women">Women</SelectItem>
                        <SelectItem value="kids">Kids</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Purpose</Label>
                     <Select defaultValue="family">
                      <SelectTrigger><SelectValue/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trekking">Trekking</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="couples">Couples</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Separator/>
              <div>
                <h3 className="text-xl font-headline font-semibold mb-4">2. Select Items</h3>
                 <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.name} className="flex items-center justify-between p-3 rounded-md bg-secondary/50">
                       <div className="flex items-center gap-3">
                         <Checkbox id={item.name} />
                         <Label htmlFor={item.name} className="text-base">{item.name} <span className="text-xs text-muted-foreground">({item.category})</span></Label>
                       </div>
                       <p className="font-semibold">₹{item.price}</p>
                    </div>
                  ))}
                 </div>
              </div>
               <Separator/>
              <div>
                <h3 className="text-xl font-headline font-semibold mb-4">3. Personalization</h3>
                 <div className="space-y-4">
                    <div>
                        <Label htmlFor="name-tag">Name on Tag</Label>
                        <Input id="name-tag" placeholder="e.g., Anushree"/>
                    </div>
                     <div>
                        <Label htmlFor="quote">Inspirational Quote</Label>
                        <Input id="quote" placeholder="e.g., Adventure Awaits"/>
                    </div>
                     <div>
                        <Label>Kit Color</Label>
                         <div className="flex gap-2 mt-2">
                            <Button variant="outline" className="h-8 w-8 rounded-full bg-blue-200 border-2 border-transparent focus:border-primary"></Button>
                            <Button variant="outline" className="h-8 w-8 rounded-full bg-green-200 border-2 border-transparent focus:border-primary"></Button>
                            <Button variant="outline" className="h-8 w-8 rounded-full bg-pink-200 border-2 border-transparent focus:border-primary"></Button>
                            <Button variant="outline" className="h-8 w-8 rounded-full bg-yellow-200 border-2 border-transparent focus:border-primary"></Button>
                         </div>
                    </div>
                 </div>
              </div>

            </CardContent>
          </Card>
        </div>
        <aside className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Your Custom Kit</CardTitle>
              <CardDescription>Live price summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex justify-between text-muted-foreground">
                    <p>Base Kit</p>
                    <p>₹1,499</p>
               </div>
               <div className="flex justify-between text-muted-foreground">
                    <p>Shampoo</p>
                    <p>₹150</p>
               </div>
                <div className="flex justify-between text-muted-foreground">
                    <p>Band-Aids</p>
                    <p>₹50</p>
               </div>
               <Separator/>
                <div className="flex justify-between font-bold text-lg">
                    <p>Total</p>
                    <p>₹1,699</p>
               </div>
               <Button className="w-full text-lg py-6 font-bold">Add to Cart</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
