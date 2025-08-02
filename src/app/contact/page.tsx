import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
       <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question or a special request? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
            <Card className="bg-secondary/50">
                <CardHeader className="flex-row items-center gap-4">
                    <Mail className="h-8 w-8 text-primary"/>
                    <CardTitle className="font-headline text-xl">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">For inquiries, support, and feedback.</p>
                    <Link href="mailto:anushree020407@gmail.com" className="font-semibold text-primary break-all hover:underline">
                        anushree020407@gmail.com
                    </Link>
                </CardContent>
            </Card>
             <Card className="bg-secondary/50">
                <CardHeader className="flex-row items-center gap-4">
                    <Phone className="h-8 w-8 text-primary"/>
                    <CardTitle className="font-headline text-xl">Call or WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">For urgent matters and customizations.</p>
                    <Link href="tel:8309346400" className="font-semibold text-primary hover:underline">
                        +91 8309346400
                    </Link>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="e.g., Custom Order Request" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..." rows={6} />
                        </div>
                        <Button type="submit" className="w-full font-bold">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
