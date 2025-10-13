import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faq_img from "../assets/images/faq_img.jpg";

// data
import { faqs } from "@/constants/faqs";

const Faq = () => {
  return (
    <section id="faq" className="py-16 bg-amber-50 dark:bg-emerald-950">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900 dark:text-amber-100">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Decorative Image */}
          <div className="order-2 md:order-1">
            <img
              src={faq_img}
              alt="Person enjoying a safari adventure in Tanzania"
              className="rounded-lg shadow-lg object-cover w-full h-auto max-h-96 md:max-h-[34rem]"
            />
            <p className="text-xs text-center mt-2 text-emerald-700 dark:text-amber-300">
              Adventure awaits with Utulivu Tours!
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="order-1 md:order-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white dark:bg-emerald-900 border border-amber-200 dark:border-emerald-800 rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-emerald-800 dark:text-amber-100 hover:text-emerald-600 dark:hover:text-amber-300 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-emerald-700 dark:text-amber-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
