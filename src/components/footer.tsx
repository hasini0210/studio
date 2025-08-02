import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-headline font-bold mb-4">SAYAS</h3>
            <p className="text-sm">Style All Your Adventures Smartly.</p>
            <div className="flex gap-4 mt-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-primary transition-colors" /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-md font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/account/orders" className="hover:text-primary transition-colors">Order Tracking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-headline font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop/men" className="hover:text-primary transition-colors">Men's Kits</Link></li>
              <li><Link href="/shop/women" className="hover:text-primary transition-colors">Women's Kits</Link></li>
              <li><Link href="/shop/purpose" className="hover:text-primary transition-colors">Purpose-Based Kits</Link></li>
              <li><Link href="/gifting" className="hover:text-primary transition-colors">Gift a Kit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-headline font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">Get 10% off your first order!</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SAYAS Travel Kits. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
