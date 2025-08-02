import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const cartItems = [
    { name: "Women's Skincare Kit", price: 2999, quantity: 1, image: "/images/cart-item1.jpg", hint: "skincare kit" },
    { name: "Custom Trekking Kit", price: 3499, quantity: 1, image: "/images/cart-item2.jpg", hint: "trekking gear" },
];

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Shopping Cart</h1>
      </div>

       <div className="grid lg:grid-cols-3 gap-12">
         <main className="lg:col-span-2">
            <Card>
                <CardContent className="p-0">
                    <div className="divide-y">
                        {cartItems.map(item => (
                            <div key={item.name} className="flex items-center gap-6 p-6">
                                <Image src={item.image} width={100} height={100} alt={item.name} className="rounded-md" data-ai-hint={item.hint}/>
                                <div className="flex-grow">
                                    <h3 className="font-headline font-semibold">{item.name}</h3>
                                    <p className="text-muted-foreground text-sm">Customizations: Name Tag "Priya"</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Input type="number" defaultValue={item.quantity} className="w-16 text-center" />
                                </div>
                                <p className="font-semibold w-24 text-right">₹{item.price.toLocaleString()}</p>
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive"/>
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
         </main>
         <aside>
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <p className="text-muted-foreground">Subtotal</p>
                        <p>₹6,498</p>
                    </div>
                     <div className="flex justify-between">
                        <p className="text-muted-foreground">Shipping</p>
                        <p>₹50</p>
                    </div>
                     <div className="flex justify-between">
                        <p className="text-muted-foreground">Taxes</p>
                        <p>₹325</p>
                    </div>
                    <Separator/>
                     <div className="flex justify-between font-bold text-xl">
                        <p>Total</p>
                        <p>₹6,873</p>
                    </div>
                     <Separator/>
                    <div>
                        <p className="font-semibold mb-2">Discount Code</p>
                        <div className="flex gap-2">
                            <Input placeholder="Enter code"/>
                            <Button variant="secondary">Apply</Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full text-lg py-6 font-bold">Proceed to Checkout</Button>
                </CardFooter>
            </Card>
         </aside>
       </div>
    </div>
  );
}
