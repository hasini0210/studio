import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const wishlistItems = [
    { name: "Men's Grooming Kit", price: "₹2,499", image: "/images/wishlist1.jpg", hint: "men grooming" },
    { name: "Family Vacation Kit", price: "₹4,999", image: "/images/wishlist2.jpg", hint: "family vacation" },
    { name: "Corporate Gift Set", price: "₹1,999", image: "/images/wishlist3.jpg", hint: "corporate gift" },
];

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">My Wishlist</h1>
            <p className="mt-4 text-lg text-muted-foreground">Your saved items for future adventures.</p>
        </div>
        
        {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group relative">
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10 bg-background/50 hover:bg-background rounded-full">
                        <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive"/>
                    </Button>
                    <Link href={`/product/${index + 10}`} className="block">
                    <div className="relative">
                        <Image src={item.image} alt={item.name} width={400} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.hint}/>
                    </div>
                    <CardContent className="p-4">
                        <h3 className="font-headline font-semibold truncate">{item.name}</h3>
                        <div className="flex justify-between items-center mt-4">
                        <p className="font-bold text-lg">{item.price}</p>
                        <Button size="sm">Add to Cart</Button>
                        </div>
                    </CardContent>
                    </Link>
                </Card>
                ))}
            </div>
        ) : (
            <div className="text-center py-16">
                 <h2 className="text-2xl font-headline font-semibold">Your wishlist is empty.</h2>
                <p className="text-muted-foreground mt-2">Start exploring to add items you love!</p>
                <Button asChild className="mt-6">
                    <Link href="/shop">Go Shopping</Link>
                </Button>
            </div>
        )}
    </div>
  );
}
