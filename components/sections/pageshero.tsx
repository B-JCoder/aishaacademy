import Link from "next/link";
import Image from "next/image";
import { Monitor, Video, Globe, LucideIcon } from "lucide-react";

interface PagesHeroProps {
  title: string;
  highlight?: string;
  description: string;
  badge?: {
    text: string;
    icon: LucideIcon;
  };
  imageSrc?: string;
  imageAlt?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;

    href: string;
  };
  video?: React.ReactNode;
}

const PagesHero = ({
  title,
  highlight,
  description,
  badge,
  imageSrc = "/images/online-learning.png",
  imageAlt = "Hero Image",
  primaryAction,
  secondaryAction,
  video,
}: PagesHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-primary dark:bg-gray-950">
        {/* Pattern/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-800 opacity-90"></div>
        {/* Optional: Add a subtle pattern if needed, or keep it clean */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="text-white space-y-6">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-sm font-bold animate-fade-in-up">
              <badge.icon className="w-4 h-4" />
              {badge.text}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            {title}{" "}
            {highlight && (
              <span className="text-accent italic">{highlight}</span>
            )}
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="px-6 py-3 md:px-8 md:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 text-sm md:text-base"
                >
                  {primaryAction.text}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="px-6 py-3 md:px-8 md:py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all active:scale-95 text-sm md:text-base"
                >
                  {secondaryAction.text}
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="relative animate-fade-in-up delay-100">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative group bg-black">
            {video ? (
              <div className="w-full h-full">{video}</div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white/50">
                  {/* Fallback */}
                </div>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </>
            )}
          </div>
          {/* Float Card - Optional or configurable? Keeping it for "Live Sessions" context which is common, 
              but maybe should be optional or prop driven. 
              For now, I'll keep it static or make it generic if 'badge' is passed? 
              Actually, the user said "same hero section...". 
              I'll leave it as is but maybe change text if needed. 
              Let's make it conditioned on being 'online' or just generic 'Quality Education'.
              For now I will hardcode it for 'online' vibe or remove it if not relevant to 'About'.
              The prompt implies reusing the component. I'll make it generic or remove specific "Live Sessions" text if it doesn't fit.
              Let's just keep it as a "Quality" indicator or hide it if no props.
              I will hide the floating card for now to be safe, or make it a prop? 
              Let's adding a prop `showFloatingCard` or similar if I want to be perfect.
              But to keep it simple and effective, I'll remove the specific "Live Sessions" card to avoid context mismatch (e.g. physical classes).
              OR I can replace it with a generic "Trusted since 2015" or similar. 
              Let's remove it for generic usage to avoid confusion.
          */}
        </div>
      </div>
    </section>
  );
};

export default PagesHero;
