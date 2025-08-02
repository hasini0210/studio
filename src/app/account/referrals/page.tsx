
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Heart, Home, LogOut, Package, User, Gift, Copy } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';


const accountNav = [
    { name: "Dashboard", href: "/account", icon: <User/> },
    { name: "Order History", href: "/account/orders", icon: <Package/> },
    { name: "My Wishlist", href: "/wishlist", icon: <Heart/> },
    { name: "Addresses", href: "/account/addresses", icon: <Home/> },
    { name: "Refer a Friend", href: "/account/referrals", icon: <FileText/> },
    { name: "Logout", href: "#", icon: <LogOut/> }
]

export default function ReferralsPage() {
    const pathname = usePathname();
    const { toast } = useToast();
    const referralLink = "https://sayas.com/join?ref=anushree123";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        toast({
            title: "Copied!",
            description: "Referral link copied to clipboard.",
        })
    }

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
            <aside className="md:col-span-1">
                <Card>
                    <CardContent className="p-4">
                        <nav className="flex flex-col gap-2">
                           {accountNav.map(item => (
                               <Link key={item.name} href={item.href}>
                                    <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start gap-3">
                                        {item.icon}
                                        {item.name}
                                    </Button>
                               </Link>
                           ))}
                        </nav>
                    </CardContent>
                </Card>
            </aside>
            <main className="md:col-span-3">
                <Card>
                    <CardHeader className="text-center items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <Gift className="h-10 w-10 text-primary"/>
                        </div>
                        <CardTitle className="font-headline text-2xl">Refer a Friend</CardTitle>
                        <CardDescription className="max-w-md">Share with your friend and you'll both get a coupon for 15% off your next order!</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="font-semibold mb-2">Your Referral Link</p>
                        <div className="flex justify-center">
                           <div className="relative w-full max-w-sm">
                             <Input 
                                type="text"
                                readOnly
                                value={referralLink}
                                className="pr-12 text-center bg-secondary"
                             />
                             <Button size="icon" variant="ghost" className="absolute top-1/2 right-1 -translate-y-1/2" onClick={copyToClipboard}>
                                <Copy className="h-5 w-5"/>
                             </Button>
                           </div>
                        </div>
                        <Button className="mt-6 font-bold" onClick={copyToClipboard}>
                            Share Your Link
                        </Button>
                    </CardContent>
                </Card>
            </main>
        </div>
    </div>
  );
}
