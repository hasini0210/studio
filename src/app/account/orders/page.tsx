
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Heart, Home, LogOut, Package, User, CheckCircle, Circle, PackageCheck } from 'lucide-react';
import Image from 'next/image';
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

const pastOrders = [
    {
        orderId: "#SAYAS-1024",
        date: "June 15, 2024",
        total: "₹3,499",
        status: "Delivered",
        items: [
            { name: "Custom Trekking Kit", image: "/images/order-item1.jpg", hint: "trekking gear" }
        ],
        timeline: [
            { stage: "Order Placed", date: "June 12, 2024", completed: true},
            { stage: "Dispatched", date: "June 13, 2024", completed: true},
            { stage: "Out for Delivery", date: "June 15, 2024", completed: true},
            { stage: "Delivered", date: "June 15, 2024", completed: true},
        ]
    }
]

export default function OrderHistoryPage() {
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
                        <CardTitle className="font-headline text-2xl">Order History</CardTitle>
                        <CardDescription>View your past and current orders.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div>
                            <h3 className="text-lg font-headline font-semibold mb-4">Current Orders</h3>
                            <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
                                <Package className="mx-auto h-12 w-12 text-muted-foreground"/>
                                <p className="mt-4 text-muted-foreground">You have no current orders.</p>
                                <Button asChild variant="outline" className="mt-4">
                                    <Link href="/shop">Start Shopping</Link>
                                </Button>
                            </div>
                        </div>

                        <Separator/>

                        <div>
                            <h3 className="text-lg font-headline font-semibold mb-4">Past Orders</h3>
                            <div className="space-y-6">
                                {pastOrders.map(order => (
                                    <Card key={order.orderId} className="bg-secondary/50">
                                        <CardHeader className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div>
                                                <p className="text-sm font-semibold">Order ID</p>
                                                <p className="text-muted-foreground">{order.orderId}</p>
                                            </div>
                                             <div>
                                                <p className="text-sm font-semibold">Date</p>
                                                <p className="text-muted-foreground">{order.date}</p>
                                            </div>
                                             <div>
                                                <p className="text-sm font-semibold">Total</p>
                                                <p className="text-muted-foreground">{order.total}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">Status</p>
                                                <p className="font-bold text-green-600 flex items-center gap-2">
                                                    <CheckCircle className="h-5 w-5"/>
                                                    {order.status}
                                                </p>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-4">
                                                <Image src={order.items[0].image} alt={order.items[0].name} width={80} height={80} className="rounded-md" data-ai-hint={order.items[0].hint}/>
                                                <p className="font-semibold">{order.items[0].name}</p>
                                            </div>
                                            <div className="mt-6">
                                                <h4 className="font-semibold mb-4">Timeline</h4>
                                                <div className="relative pl-6">
                                                     <div className="absolute left-[11.5px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
                                                     {order.timeline.map((event, index) => (
                                                         <div key={index} className="relative flex items-start gap-6 pb-6">
                                                            <div className="relative z-10">
                                                                <div className="h-6 w-6 rounded-full bg-background flex items-center justify-center">
                                                                    {event.completed ? <PackageCheck className="h-4 w-4 text-primary" /> : <Circle className="h-4 w-4 text-muted-foreground"/>}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold">{event.stage}</p>
                                                                <p className="text-sm text-muted-foreground">{event.date}</p>
                                                            </div>
                                                         </div>
                                                     ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    </div>
  );
}
