
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Heart, Home, LogOut, Package, User, PlusCircle, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const accountNav = [
    { name: "Dashboard", href: "/account", icon: <User/> },
    { name: "Order History", href: "/account/orders", icon: <Package/> },
    { name: "My Wishlist", href: "/wishlist", icon: <Heart/> },
    { name: "Addresses", href: "/account/addresses", icon: <Home/> },
    { name: "Refer a Friend", href: "/account/referrals", icon: <FileText/> },
    { name: "Logout", href: "#", icon: <LogOut/> }
]

const savedAddresses = [
    {
        type: "Home",
        address: "47/--95, Hyderabad",
        phone: "+91 8309346400",
        isDefault: true,
    }
]

export default function AddressesPage() {
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
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="font-headline text-2xl">Manage Addresses</CardTitle>
                            <CardDescription>Update your shipping addresses.</CardDescription>
                        </div>
                        <Button variant="outline" className="gap-2">
                            <PlusCircle className="h-4 w-4"/>
                            Add New
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {savedAddresses.map((addr, index) => (
                            <Card key={index} className="p-6 bg-secondary/50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-headline font-semibold">{addr.type}</h3>
                                            {addr.isDefault && (
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Default</span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground">{addr.address}</p>
                                        <p className="text-muted-foreground">Phone: {addr.phone}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Edit className="h-5 w-5 text-muted-foreground"/>
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive"/>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </main>
        </div>
    </div>
  );
}
