import { Globe, Heart, MapPin, Sparkles, Star } from "lucide-react";
import type { Business } from "@/lib/data";
import SafeImage from "./SafeImage";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

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
  const hasRating = b.rating !== undefined && b.ratingCount !== undefined;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-950 transition duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_12px_40px_rgba(245,192,74,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ruby/40 via-neutral-900 to-gold/30">
        <SafeImage
          src={b.image}
          alt={b.name}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
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

        {hasRating ? (
          <div className="flex items-center gap-1.5 text-sm">
            <span className="flex gap-0.5 text-gold" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </span>
            <span className="font-medium text-white">{b.rating!.toFixed(1)}</span>
            <span className="text-white/50">({b.ratingCount})</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-sm text-gold">
            <Sparkles size={14} aria-hidden="true" />
            Nuevo
          </div>
        )}

        <p className="flex items-center gap-1.5 text-sm text-white/80">
          <MapPin size={14} aria-hidden="true" />
          {b.city}
        </p>

        <p className="flex-1 text-sm leading-snug text-white/60">{b.description}</p>

        <div className="mt-2 flex min-h-[44px] items-center justify-around border-t border-white/10 pt-3">
          {b.whatsapp && (
            <a
              href={`https://wa.me/${b.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp de ${b.name}`}
              className="text-[#25d366] transition hover:scale-125"
            >
              <WhatsAppIcon />
            </a>
          )}
          {b.instagram && (
            <a
              href={`https://instagram.com/${b.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${b.name}`}
              className="text-[#e1306c] transition hover:scale-125"
            >
              <InstagramIcon />
            </a>
          )}
          {b.website && (
            <a
              href={b.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Sitio web de ${b.name}`}
              className="text-white transition hover:scale-125"
            >
              <Globe size={22} />
            </a>
          )}
          {!b.whatsapp && !b.instagram && !b.website && (
            <span className="text-xs text-white/40">Contacto próximamente</span>
          )}
        </div>
      </div>
    </article>
  );
}