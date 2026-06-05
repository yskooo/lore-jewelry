import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { FooterSections } from "../../components/FooterSections";
import { cinzel, raleway } from "../../utils/fonts";

export const metadata: Metadata = {
  title: "FAQs | Lore Jewelry",
  description:
    "Answers to common questions about Lore Jewelry moissanite pieces — shipping, care, durability and maintenance."
};

const faqs = [
  {
    question: "Where do you ship from?",
    answer: "We ship from New York."
  },
  {
    question: "Can I wear my jewelry in the shower?",
    answer:
      "Absolutely! You can wear it anytime since it's made from durable materials — S925 sterling silver plated with 18K gold."
  },
  {
    question: "Will the stones lose their shine over time?",
    answer:
      "No, they won't. Our moissanite measures 9.25 on the Mohs hardness scale, making it the second strongest gemstone in the world. It won't fade or lose its sparkle."
  },
  {
    question:
      "Will the materials tarnish, change color, or get dirty over time?",
    answer:
      "No, they won't, and our materials are very easy to maintain. Whenever you feel a piece needs cleaning, simply wash it with lukewarm water, a little soap, and a soft brush to have it looking brand new."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-white">
      <Header />
      <main className="flex-grow container w-full mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <h1
          className={`${cinzel.className} text-3xl md:text-5xl font-bold tracking-widest text-center text-gray-900 mb-4`}
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p
          className={`${raleway.className} text-gray-500 text-center tracking-wide mb-12 max-w-2xl`}
        >
          Everything you need to know about caring for and wearing your Lore
          Jewelry moissanite pieces.
        </p>

        <div className="max-w-3xl w-full divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span
                  className={`${cinzel.className} text-base md:text-lg font-semibold tracking-wide text-gray-900`}
                >
                  {faq.question}
                </span>
                <span className="text-gray-400 transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p
                className={`${raleway.className} mt-4 text-gray-600 leading-relaxed tracking-wide`}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </main>
      <FooterSections />
    </div>
  );
}
