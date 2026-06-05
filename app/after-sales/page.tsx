import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { FooterSections } from "../../components/FooterSections";
import { cinzel, raleway } from "../../utils/fonts";

export const metadata: Metadata = {
  title: "After-Sales Service | Lore Jewelry",
  description:
    "Lore Jewelry after-sales service — size exchanges, our quality guarantee, and the return & refund process."
};

const policies = [
  {
    title: "Size Exchange",
    body: "We accept a size exchange starting the day after you receive your package, so your piece fits exactly the way you want."
  },
  {
    title: "Quality Guarantee",
    body: "We offer a 3-day quality guarantee for returns and refunds from the day your package is delivered."
  }
];

export default function AfterSales() {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-white">
      <Header />
      <main className="flex-grow container w-full mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <h1
          className={`${cinzel.className} text-3xl md:text-5xl font-bold tracking-widest text-center text-gray-900 mb-4`}
        >
          AFTER-SALES SERVICE
        </h1>
        <p
          className={`${raleway.className} text-gray-500 text-center tracking-wide mb-12 max-w-2xl`}
        >
          We stand behind every piece. Here is how returns, refunds, and size
          exchanges work.
        </p>

        <div className="max-w-3xl w-full space-y-8">
          {policies.map((policy, i) => (
            <div
              key={policy.title}
              className="flex gap-6 border-b border-gray-200 pb-8"
            >
              <span
                className={`${cinzel.className} text-3xl font-bold text-gray-300 leading-none`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2
                  className={`${cinzel.className} text-lg md:text-xl font-semibold tracking-wide text-gray-900 mb-2`}
                >
                  {policy.title}
                </h2>
                <p
                  className={`${raleway.className} text-gray-600 leading-relaxed tracking-wide`}
                >
                  {policy.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`${raleway.className} mt-12 text-gray-500 text-center tracking-wide`}
        >
          Have a question first? Visit our{" "}
          <Link
            href="/faq"
            className="text-gray-900 underline hover:text-gray-600"
          >
            FAQs
          </Link>
          .
        </p>
      </main>
      <FooterSections />
    </div>
  );
}
