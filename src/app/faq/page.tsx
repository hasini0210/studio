import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What are your delivery timelines?",
    answer: "We currently deliver only within Hyderabad. Once an order is placed, we dispatch within 2–3 business days. You can expect your delivery within 3–5 business days from the dispatch date."
  },
  {
    question: "Can I customize my kit?",
    answer: "Absolutely! Customization is at the heart of SAYAS. You can add a name, a special quote, or choose a color for your kit during the checkout process. For more detailed requests, feel free to contact us on WhatsApp."
  },
  {
    question: "How does the subscription work?",
    answer: "Our subscription service offers fun, themed kits delivered monthly or quarterly. These curated boxes are exclusive to our Hyderabad-based customers and are a great way to discover new travel essentials."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the personalized nature and hygiene standards of our products, we do not accept returns. However, if you have any issues with your order, please contact us within 48 hours of delivery, and we will be happy to resolve them."
  },
  {
    question: "Do you offer corporate or bulk gifting?",
    answer: "Yes, we do! SAYAS kits make for perfect corporate gifts, wedding favors, or farewell presents. Please get in touch with us via email or phone to discuss your requirements."
  }
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find answers to common questions about our products and services.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
             <AccordionItem key={index} value={`item-${index+1}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
