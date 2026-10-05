import { MapPin } from "lucide-react";
import { stakes } from "@/lib/stakes";

export function DirectoryBadge() {
  return (
    <div className="mb-4 flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-gold backdrop-blur-md sm:text-xs">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(245,192,74,0.9)]"
        />
        Directorio · Bogotá · Colombia
      </span>
    </div>
  );
}

export function StakeChips() {
  return (
    <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
      <span className="flex items-center gap-1.5 text-sm text-white/70">
        <MapPin size={14} aria-hidden="true" />
        Estacas:
      </span>
      {stakes.map((name, i) => (
        <button
          key={name}
          type="button"
          className={`rounded-full border px-3.5 py-1.5 text-xs backdrop-blur-md transition sm:text-sm ${
            i === stakes.length - 1
              ? "border-gold/60 bg-gold/15 text-gold"
              : "border-white/20 bg-black/50 text-white/90 hover:border-gold/60 hover:text-gold"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}