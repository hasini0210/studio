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
  ShoppingCart,
  Sparkles,
  User,
  WandSparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Mountain } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/about', label: 'About Us', icon: <Info className="h-5 w-5" /> },
  { href: '/shop', label: 'Shop', icon: <ShoppingCart className="h-5 w-5" /> },
  { href: '/build-a-kit', label: 'Build Your Kit', icon: <Briefcase className="h-5 w-5" /> },
  { href: '/ai-assistant', label: 'AI Assistant', icon: <WandSparkles className="h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

const secondaryLinks = [
    { href: '/gifting', label: 'Gift Kits', icon: <Gift className="h-5 w-5" /> },
    { href: '/subscriptions', label: 'Subscriptions', icon: <Sparkles className="h-5 w-5" /> },
    { href: '/faq', label: 'FAQ', icon: <MessageSquareQuote className="h-5 w-5" /> },
];


export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.active') as HTMLElement;
    if (activeLink) {
      setIndicatorStyle({
        width: activeLink.offsetWidth,
        left: activeLink.offsetLeft,
      });
    }
  }, [pathname]);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 md:mr-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Mountain className="h-6 w-6" />
            <span className="hidden sm:inline-block">SAYAS</span>
          </Link>
        </div>

        {/* Centered Navigation (Desktop) */}
        <div className="hidden md:flex justify-center flex-1">
           <nav ref={navRef} className="nav-container-wrapper">
              {navLinks.map((link) => (
                 <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "nav-link-item nav-link-glow",
                        { 'active text-primary-foreground': pathname === link.href }
                    )}
                >
                    {link.label}
                </Link>
              ))}
               <div className="active-nav-link-indicator" style={indicatorStyle} />
            </nav>
        </div>

        {/* Action Icons & Theme Toggle (Right) */}
        <div className="flex items-center gap-1 ml-auto">
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="icon">
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
          </div>
          <ThemeToggle />
           {/* Mobile Menu (Right) */}
            <div className="md:hidden">
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                    <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="p-4">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-6">
                        <Mountain className="h-6 w-6" />
                        SAYAS
                    </Link>
                    <nav className="flex flex-col gap-1">
                        {[...navLinks, ...secondaryLinks].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                            'flex items-center gap-3 rounded-md p-2 text-base font-medium transition-colors hover:bg-secondary',
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
      </div>
    </header>
  );
}
