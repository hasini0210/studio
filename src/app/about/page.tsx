import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About SAYAS</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the story, vision, and values that drive our passion for smarter travel.
          </p>
        </div>

        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                SAYAS was born from a simple idea: travel should be about the experience, not the hassle of packing. As frequent travelers, we grew tired of juggling countless bottles, forgetting essentials, and carrying bulky bags. We envisioned a world where every journey begins with a perfectly packed, personalized kit. So, we created SAYAS – Style All Your Adventures Smartly – to bring joy, style, and convenience back to travel preparation.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/team-photo.jpg"
                alt="The SAYAS team working on travel kit ideas"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="A stylish and compact SAYAS kit"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="travel kit"
              />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-semibold mb-4">Why SAYAS?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're more than just a travel kit company. We are your personal travel concierge, ensuring you have exactly what you need, right when you need it. We focus on a <b className="font-semibold text-foreground">traveler-first</b> approach, combining functionality with high-end aesthetics. Our <b className="font-semibold text-foreground">personal touch</b> shines through in every customizable detail, from monogrammed tags to curated contents.
              </p>
              <h2 className="text-3xl font-headline font-semibold mb-4 mt-8">Our Vision</h2>
               <p className="text-muted-foreground leading-relaxed">
                Our vision is to revolutionize the way people prepare for travel, making it a seamless and enjoyable part of the adventure itself. We aim to be the leading name in personalized travel solutions, known for our commitment to quality, style, and sustainability.
              </p>
            </div>
          </div>

           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-semibold mb-4">Founder’s Note</h2>
              <p className="text-muted-foreground leading-relaxed italic">
                "As someone who lives to explore, I wanted to solve a problem that every traveler faces. SAYAS is my answer. It's about creating something that is not only useful but also beautiful – a travel companion you're proud to carry. Thank you for being a part of our journey."
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Founder of SAYAS"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="portrait woman"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <h2 className="text-3xl font-headline font-semibold mb-8">Brand Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-md">
                <h3 className="text-xl font-headline font-bold mb-2 text-primary">Traveler-First</h3>
                <p className="text-muted-foreground">Every decision we make is centered around improving the travel experience for our community.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md">
                <h3 className="text-xl font-headline font-bold mb-2 text-primary">Eco-Conscious</h3>
                <p className="text-muted-foreground">We are committed to sustainable practices, from our products to our packaging.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md">
                <h3 className="text-xl font-headline font-bold mb-2 text-primary">Personal Touch</h3>
                <p className="text-muted-foreground">We believe personalization transforms a product into a cherished possession.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
