import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function SubscriptionsPage() {
  const pricingTiers = [
    {
      name: 'Monthly Mini',
      price: '₹999',
      period: '/month',
      description: 'A new surprise kit delivered every month. Perfect for the frequent traveler.',
      features: ['Curated mini kit', '4-5 travel products', 'Exclusive samples', 'Cancel anytime'],
      popular: false,
    },
    {
      name: 'Quarterly Classic',
      price: '₹2,499',
      period: '/quarter',
      description: 'A full-sized themed kit every three months. Best value for explorers.',
      features: ['Full-sized themed kit', '6-8 premium products', 'Free shipping', 'Save 15%'],
      popular: true,
    },
  ];

  const pastBoxes = [
    { name: "Monsoon Getaway", image: "/images/sub-box1.jpg", hint: "rainy travel" },
    { name: "Summer Beach Vibin'", image: "/images/sub-box2.jpg", hint: "beach essentials" },
    { name: "Winter Hiking Essentials", image: "/images/sub-box3.jpg", hint: "winter hiking" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">SAYAS Subscription Kits</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Never run out of travel essentials. Get curated kits delivered to your doorstep.
        </p>
         <p className="mt-2 text-sm font-semibold text-primary">Note: Deliveries are currently available only in Hyderabad.</p>
      </div>

      <section className="mb-16">
        <Card className="bg-secondary/50">
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                     <h2 className="text-3xl font-headline font-semibold mb-4">What are SAYAS Mini Kits?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Our subscription service is designed to keep your travel bag stocked and ready for any impromptu trip. Each box is thoughtfully curated with a fun theme, featuring a mix of our most-loved essentials and new discoveries from partner brands. It's the perfect way to stay prepared and pamper yourself.
                    </p>
                </div>
                 <Image src="/images/sub-unboxing.jpg" width={600} height={400} alt="Unboxing a subscription kit" className="object-cover h-full w-full rounded-r-lg" data-ai-hint="unboxing gift"/>
            </div>
        </Card>
      </section>

      <section className="mb-16">
         <h2 className="text-3xl font-headline font-bold text-center mb-12">Choose Your Plan</h2>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map(tier => (
                <Card key={tier.name} className={tier.popular ? "border-primary border-2 shadow-lg" : "shadow-md"}>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
                        <p>
                          <span className="text-4xl font-bold">{tier.price}</span>
                          <span className="text-muted-foreground">{tier.period}</span>
                        </p>
                        <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       {tier.features.map(feature => (
                           <div key={feature} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>{feature}</span>
                           </div>
                       ))}
                    </CardContent>
                    <CardFooter>
                       <Button className="w-full font-bold" variant={tier.popular ? 'default' : 'secondary'}>Subscribe Now</Button>
                    </CardFooter>
                </Card>
            ))}
         </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Peek Inside Past Boxes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastBoxes.map(box => (
                <Card key={box.name} className="overflow-hidden group">
                     <Image src={box.image} width={400} height={300} alt={box.name} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={box.hint}/>
                     <CardContent className="p-4">
                        <h3 className="font-semibold font-headline">{box.name}</h3>
                     </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
