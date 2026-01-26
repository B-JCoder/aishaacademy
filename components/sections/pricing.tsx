import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Weekday Evening",
    price: "$65",
    period: "/month",
    description: "Monday to Thursday from 5:30pm to 7:30pm",
    features: ["Quran classes for children aged 5 and over"],
    highlight: false,
  },
  {
    title: "Weekend Morning",
    price: "$65",
    period: "/month",
    description: "Saturday and Sunday from 10am to 12:45pm",
    features: ["Quran classes for children aged 5 and over"],
    highlight: true,
  },
  {
    title: "Weekend Afternoon",
    price: "$65",
    period: "/month",
    description: "Saturday and Sunday from 12:00 to 14:45",
    features: ["Quran classes for children aged 5 and over"],
    highlight: false,
  },
  {
    title: "Private 1-on-1",
    price: "$12.50",
    period: "/session",
    description:
      "35-minute private one-on-one lessons with an experienced teacher",
    features: ["Quran classes for children aged 4 and over"],
    highlight: false,
  },
  {
    title: "Online Classes",
    price: "$60",
    period: "/month",
    description:
      "Online classes Monday to Wednesday AND Friday from 5:00 PM to 6:15 PM",
    features: ["Quran classes for children aged 5 and over"],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* BG Blurs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
        <div className="flex flex-col space-y-12">
          <div className="flex gap-4 flex-col items-center">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <span className="text-accent font-bold tracking-wider uppercase text-sm">
                Pricing
              </span>
              <h1 className="text-3xl md:text-4xl xl:text-5xl text-primary dark:text-white font-bold font-serif">
                Our Pricing Plans
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
              Choose the best plan that fits your schedule and learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PriceCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function PriceCard({
  title,
  price,
  period,
  description,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 h-full ${
        highlight
          ? "bg-white dark:bg-gray-800 shadow-2xl scale-105 border-2 border-accent/20 z-10"
          : "bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-1"
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-primary dark:text-white font-serif mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
        {description}
      </p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-accent">{price}</span>
        <span className="text-gray-500 dark:text-gray-400 font-medium">
          {period}
        </span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200"
          >
            <div className="mt-0.5 rounded-full bg-primary/10 p-1 flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/enroll"
        className={`block w-full py-3 rounded-xl font-bold text-center transition-all shadow-md ${
          highlight
            ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg"
            : "bg-white dark:bg-gray-700 text-primary dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-primary/5 dark:hover:bg-gray-600"
        }`}
      >
        Enroll Now
      </Link>
    </div>
  );
}

export default PricingSection;
