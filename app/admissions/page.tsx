import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AdmissionsForm from "@/components/sections/admissions-form";
import { CheckCircle, FileText, CreditCard, GraduationCap } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Admissions Information
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Begin your journey of sacred knowledge. We have a simple and
            transparent admission process for both online and physical classes.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              How to Enroll
            </h2>
            <p className="text-muted-foreground">
              Follow these simple steps to join our academy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "1. Submit Application",
                desc: "Fill out the online admission form below with your details.",
              },
              {
                icon: CheckCircle,
                title: "2. Assessment / Demo",
                desc: "We'll schedule a quick assessment or free demo class.",
              },
              {
                icon: CreditCard,
                title: "3. Pay Fees",
                desc: "Secure your spot by paying the first month's fee.",
              },
              {
                icon: GraduationCap,
                title: "4. Start Learning",
                desc: "Receive your schedule and join your class!",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              Fee Structure
            </h2>
            <p className="text-muted-foreground">
              Affordable quality education for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-2">
                Group Classes
              </h3>
              <div className="text-4xl font-bold text-accent mb-4">
                $50
                <span className="text-base text-muted-foreground font-normal">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" /> 3 Days /
                  Week
                </li>
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Small
                  Groups
                </li>
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Online or
                  Physical
                </li>
              </ul>
              <a
                href="#admission-form"
                className="block text-center py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
              >
                Select Plan
              </a>
            </div>
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Private 1-on-1</h3>
              <div className="text-4xl font-bold text-accent mb-4">
                $100
                <span className="text-base text-white/60 font-normal">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" /> Flexible
                  Schedule
                </li>
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" /> Individual
                  Attention
                </li>
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-accent" /> Customized
                  Pace
                </li>
              </ul>
              <a
                href="#admission-form"
                className="block text-center py-3 rounded-xl bg-accent text-primary font-bold hover:bg-white transition-all shadow-lg"
              >
                Select Plan
              </a>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-2">
                Hifz Program
              </h3>
              <div className="text-4xl font-bold text-accent mb-4">
                $120
                <span className="text-base text-muted-foreground font-normal">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" /> 5 Days /
                  Week
                </li>
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Intensive
                  Monitoring
                </li>
                <li className="flex gap-2 items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Ijaza
                  Tracks
                </li>
              </ul>
              <a
                href="#admission-form"
                className="block text-center py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
              >
                Select Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <AdmissionsForm />

      <Footer />
    </main>
  );
}
