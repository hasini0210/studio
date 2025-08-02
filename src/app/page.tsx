import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Briefcase, Gift, Leaf, MapPin, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const categories = [
    {
      title: "Men's Kits",
      description: 'Shaving, grooming, first-aid, & hygiene essentials.',
      image: 'https://placehold.co/600x400.png',
      hint: 'men travel',
      link: '/shop/men',
    },
    {
      title: "Women's Kits",
      description: 'Skincare, lip care, hygiene, & haircare must-haves.',
      image: 'https://placehold.co/600x400.png',
      hint: 'women travel',
      link: '/shop/women',
    },
    {
      title: 'Purpose-Based Kits',
      description: 'For trekking, work trips, family travel, and more.',
      image: 'https://placehold.co/600x400.png',
      hint: 'adventure travel',
      link: '/shop/purpose',
    },
  ];

  const valueProps = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: 'Personalized for Journey',
      description: 'Kits tailored to your destination and activities.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: 'Stylish & Compact',
      description: 'Travel-sized essentials that look as good as they feel.',
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: 'Gifting-Ready',
      description: 'Perfectly wrapped presents for any occasion.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: 'Eco-Friendly Packaging',
      description: 'Thoughtfully designed with the planet in mind.',
    },
  ];

  const testimonials = [
    {
      quote: "The best travel kit I've ever owned. It had everything I needed for my beach vacation. So stylish and compact!",
      author: 'Priya S.',
      location: 'Mumbai',
    },
    {
      quote: 'I gifted a customized kit to my friend for his trekking trip. He absolutely loved the personal touch. Highly recommend SAYAS!',
      author: 'Rahul D.',
      location: 'Delhi',
    },
    {
      quote: 'The subscription box is a game-changer. I get to try new travel products every quarter. It\'s like a gift to myself!',
      author: 'Ananya K.',
      location: 'Hyderabad',
    },
    {
      quote: 'Finally, a travel kit that is both functional and beautiful. The quality of the products is top-notch.',
      author: 'Vikram R.',
      location: 'Bangalore',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="SAYAS Travel Kit lifestyle"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="travel lifestyle"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold drop-shadow-lg">
            Style All Your Adventures Smartly
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Customized travel kits designed for the modern explorer. Thoughtfully curated, endlessly personal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/build-a-kit">Build Your Kit</Link>
            </Button>
            <Button asChild size="lg" variant="default" className="font-bold bg-blue-800 hover:bg-blue-700 text-white">
              <Link href="/ai-assistant">AI Assistant</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Explore Our Kits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={category.hint}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">{category.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full font-bold">
                    <Link href={category.link}>Shop {category.title}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Why SAYAS?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {valueProps.map((prop) => (
              <div key={prop.title} className="text-center flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4 shadow-md">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-headline font-semibold">{prop.title}</h3>
                <p className="mt-2 text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            From Our Travelers
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between shadow-lg">
                      <CardContent className="p-6 flex-grow">
                        <div className="flex mb-4">
                          <Star className="text-yellow-400 fill-yellow-400" />
                          <Star className="text-yellow-400 fill-yellow-400" />
                          <Star className="text-yellow-400 fill-yellow-400" />
                          <Star className="text-yellow-400 fill-yellow-400" />
                          <Star className="text-yellow-400 fill-yellow-400" />
                        </div>
                        <p className="text-lg italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="p-6 bg-secondary/50 rounded-b-lg">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-primary" />
                          <div>
                            <p className="font-bold font-headline">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
