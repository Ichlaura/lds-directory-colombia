import { Globe, Heart, MapPin, MessageCircle, Star } from "lucide-react";
import type { Business } from "@/lib/data";
import SafeImage from "./SafeImage";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function BusinessCard({ business }: { business: Business }) {
  const b = business;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-950 transition duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_12px_40px_rgba(245,192,74,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ruby/40 via-neutral-900 to-gold/30">
        <SafeImage
          src={b.image}
          alt={b.name}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
          className="transition duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent"
        />
        <button
          type="button"
          aria-label={`Guardar ${b.name}`}
          className="absolute right-3 top-3 text-white/90 transition hover:text-gold"
        >
          <Heart size={22} />
        </button>
        <h3 className="absolute bottom-2 left-4 right-4 font-serif text-2xl leading-tight text-white">
          {b.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-1">
        <p className="text-sm text-white/80">{b.category}</p>

        <div className="flex items-center gap-1.5 text-sm">
          <span className="flex gap-0.5 text-gold" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </span>
          <span className="font-medium text-white">{b.rating.toFixed(1)}</span>
          <span className="text-white/50">({b.ratingCount})</span>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-white/80">
          <MapPin size={14} aria-hidden="true" />
          {b.city}
        </p>

        <p className="flex-1 text-sm leading-snug text-white/60">
          {b.description}
        </p>

        <div className="mt-2 flex items-center justify-around border-t border-white/10 pt-3">
          <a
            href={`https://wa.me/${b.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp de ${b.name}`}
            className="text-[#25d366] transition hover:scale-125"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href={`https://instagram.com/${b.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${b.name}`}
            className="text-[#e1306c] transition hover:scale-125"
          >
            <InstagramIcon />
          </a>
          <a
            href={b.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Sitio web de ${b.name}`}
            className="text-white transition hover:scale-125"
          >
            <Globe size={22} />
          </a>
        </div>
      </div>
    </article>
  );
}