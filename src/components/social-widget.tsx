'use client';

import { Instagram, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function SocialWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Button asChild size="icon" className="rounded-full shadow-lg" aria-label="WhatsApp">
        <Link href="https://wa.me/918309346400" target="_blank">
          <MessageCircle className="h-6 w-6" />
        </Link>
      </Button>
      <Button asChild size="icon" className="rounded-full shadow-lg" aria-label="Instagram">
        <Link href="https://www.instagram.com" target="_blank">
           <Instagram className="h-6 w-6" />
        </Link>
      </Button>
      <Button asChild size="icon" className="rounded-full shadow-lg" aria-label="Call">
        <Link href="tel:8309346400" target="_blank">
           <Phone className="h-6 w-6" />
        </Link>
      </Button>
    </div>
  );
}
