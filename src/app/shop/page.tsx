import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ListFilter, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = Array(9).fill({}).map((_, i) => ({
  name: 'Curated Travel Kit',
  description: 'Essentials for your next trip.',
  price: '₹2,499',
  image: `/images/shop${i + 1}.jpg`,
  hint: 'travel product'
}));

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Collection</h1>
        <p className="mt-4 text-lg text-muted-foreground">Find the perfect kit for any journey, or build your own.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-headline font-semibold mb-4">Filters</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Gender</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2"><Checkbox id="men" /><Label htmlFor="men">Men</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="women" /><Label htmlFor="women">Women</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="kids" /><Label htmlFor="kids">Kids</Label></div>
                  </div>
                </div>
                <div >
                  <h3 className="font-semibold mb-2">Purpose</h3>
                  <div className="space-y-2">
                     <div className="flex items-center space-x-2"><Checkbox id="trekking" /><Label htmlFor="trekking">Trekking</Label></div>
                     <div className="flex items-center space-x-2"><Checkbox id="college" /><Label htmlFor="college">College</Label></div>
                     <div className="flex items-center space-x-2"><Checkbox id="office" /><Label htmlFor="office">Office</Label></div>
                     <div className="flex items-center space-x-2"><Checkbox id="couples" /><Label htmlFor="couples">Couples</Label></div>
                     <div className="flex items-center space-x-2"><Checkbox id="family" /><Label htmlFor="family">Family</Label></div>
                  </div>
                </div>
                 <div>
                  <h3 className="font-semibold mb-2">Personalization</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2"><Checkbox id="name-tags" /><Label htmlFor="name-tags">Name Tags</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="quotes" /><Label htmlFor="quotes">Quotes</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="colors" /><Label htmlFor="colors">Colors</Label></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Showing 9 of 27 products</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ListFilter className="h-4 w-4" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Featured</DropdownMenuItem>
                <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem>Newest</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden group">
                <Link href={`/product/${index + 1}`} className="block">
                  <div className="relative">
                    <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={product.hint}/>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-headline font-semibold truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{product.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-lg">{product.price}</p>
                       <Button size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
