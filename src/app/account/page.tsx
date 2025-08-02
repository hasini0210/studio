
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { FileText, Heart, Home, LogOut, Package, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const accountNav = [
    { name: "Dashboard", href: "/account", icon: <User/> },
    { name: "Order History", href: "/account/orders", icon: <Package/> },
    { name: "My Wishlist", href: "/wishlist", icon: <Heart/> },
    { name: "Addresses", href: "/account/addresses", icon: <Home/> },
    { name: "Refer a Friend", href: "/account/referrals", icon: <FileText/> },
    { name: "Logout", href: "#", icon: <LogOut/> }
]

export default function AccountPage() {
    const pathname = usePathname();

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
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Account Details</CardTitle>
                        <CardDescription>Manage your personal information and password.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <form className="space-y-4">
                             <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Anushree"/>
                                </div>
                                 <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="S"/>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" defaultValue="anushree020407@gmail.com" disabled/>
                            </div>
                             <Button>Save Changes</Button>
                        </form>
                        <Separator/>
                         <form className="space-y-4">
                             <h3 className="font-semibold font-headline">Change Password</h3>
                             <div>
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input id="currentPassword" type="password"/>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="newPassword">New Password</Label>
                                    <Input id="newPassword" type="password"/>
                                </div>
                                 <div>
                                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                    <Input id="confirmPassword" type="password"/>
                                </div>
                            </div>
                            <Button>Update Password</Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    </div>
  );
}
