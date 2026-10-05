import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-5">
        <Link href="/" className="flex items-center gap-3" aria-label="ACE inicio">
          <svg
            width="40"
            height="44"
            viewBox="0 0 40 44"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M20 0 40 8v22c0 6-9 11-20 14C9 41 0 36 0 30V8L20 0Z" fill="#d4141f" />
            <rect x="9" y="22" width="5" height="12" fill="#fff" />
            <rect x="17.5" y="15" width="5" height="19" fill="#fff" />
            <rect x="26" y="9" width="5" height="25" fill="#fff" />
          </svg>
          <span className="hidden font-serif text-lg leading-[1.1] text-white sm:block sm:text-xl">
            Academia para la
            <br />
            Creación de Empresas
          </span>
          <span className="font-serif text-xl font-semibold tracking-wide text-white sm:hidden">
            ACE
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-sm text-white backdrop-blur-md transition hover:border-gold/50 sm:gap-3 sm:px-5 sm:py-3"
          >
            <MapPin size={16} aria-hidden="true" />
            <span>Bogotá</span>
            <ChevronDown size={16} aria-hidden="true" />
          </button>

          <Link
            href="/registrar-negocio"
            className="rounded-full bg-gradient-to-b from-[#f7c85c] to-[#d9a03a] px-4 py-2.5 text-sm font-medium text-black shadow-[0_0_24px_rgba(245,192,74,0.35)] transition hover:brightness-110 sm:px-6 sm:py-3"
          >
            Registra tu negocio
          </Link>
        </div>
      </div>
    </header>
  );
}