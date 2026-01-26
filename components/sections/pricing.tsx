import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Weekday Evening",
    price: "$65",
    period: "/month",
    description: "Monday to Thursday from 5:30pm to 7:30pm",
    features: ["Quran classes for children aged 5 and over"],
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
  },
  {
    title: "Private 1-on-1",
    price: "$12.50",
    period: "/session",
    description:
      "35-minute private one-on-one lessons with an experienced teacher",
    features: ["Quran classes for children aged 4 and over"],
  },
  {
    title: "Online Classes",
    price: "$60",
    period: "/month",
    description:
      "Online classes Monday to Wednesday AND Friday from 5:00 PM to 6:15 PM",
    features: ["Quran classes for children aged 5 and over"],
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col space-y-12">
          <div className="flex gap-4 flex-col items-center">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <span className="border border-accent/20 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm">
                Pricing
              </span>
              <h1 className="text-3xl md:text-4xl xl:text-5xl text-primary font-bold font-serif">
                Our Pricing Plans
              </h1>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
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
      className={`rounded-3xl p-8 border hover:border-accent/50 transition-all flex flex-col ${
        highlight
          ? "bg-card shadow-xl border-accent ring-1 ring-accent"
          : "bg-card border-secondary/20 hover:shadow-lg"
      }`}
    >
      <h3 className="text-xl font-bold text-primary font-serif mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
        {description}
      </p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-accent">{price}</span>
        <span className="text-muted-foreground font-medium">{period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-foreground"
          >
            <div className="mt-0.5 rounded-full bg-primary/10 p-1">
              <Check className="w-3 h-3 text-primary shrink-0" />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/enroll"
        className={`block w-full py-3 rounded-xl font-bold text-center transition-colors ${
          highlight
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-secondary/10 text-primary hover:bg-secondary/20"
        }`}
      >
        Enroll Now
      </Link>
    </div>
  );
}

export default PricingSection;
