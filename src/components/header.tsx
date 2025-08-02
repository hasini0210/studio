'use client';

import Link from 'next/link';
import {
  Briefcase,
  Gift,
  Heart,
  Home,
  Info,
  Mail,
  Menu,
  MessageSquareQuote,
  Search,
  Settings,
  ShoppingCart,
  Sparkles,
  User,
  WandSparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/about', label: 'About Us', icon: <Info className="h-5 w-5" /> },
  { href: '/shop', label: 'Shop', icon: <ShoppingCart className="h-5 w-5" /> },
  { href: '/build-a-kit', label: 'Build Your Kit', icon: <Briefcase className="h-5 w-5" /> },
  { href: '/ai-assistant', label: 'AI Assistant', icon: <WandSparkles className="h-5 w-5" /> },
  { href: '/gifting', label: 'Gift Kits', icon: <Gift className="h-5 w-5" /> },
  { href: '/subscriptions', label: 'Subscriptions', icon: <Sparkles className="h-5 w-5" /> },
  { href: '/faq', label: 'FAQ', icon: <MessageSquareQuote className="h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-headline font-bold">
          SAYAS
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <h2 className="text-xl font-headline font-bold mb-6">SAYAS</h2>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg p-2 text-base font-medium transition-colors hover:bg-secondary',
                        pathname === link.href ? 'bg-secondary text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
