import { ChevronDown, MapPin, Search } from "lucide-react";
import SafeImage from "./SafeImage";
import { DirectoryBadge, StakeChips } from "./HeroBadges";

const fadeRight =
  "linear-gradient(to right, black 40%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)";
const fadeLeft =
  "linear-gradient(to left, black 40%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28">
      {/* Resplandor base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[#050505]"
      />

      {/* Fondo: ciudad + templo (visible arriba, oscuro abajo) */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <SafeImage
          src="/images/hero/fondo-templo.jpg"
          alt=""
          sizes="100vw"
          priority
          className="object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_50%_55%,rgba(0,0,0,0.75),transparent_75%)]" />
      </div>

      {/* Personas izquierda */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-[15] hidden w-[34%] md:block"
        style={{
          maskImage: fadeRight,
          WebkitMaskImage: fadeRight,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <SafeImage
          src="/images/hero/izquierda.jpg"
          alt=""
          sizes="34vw"
          className="object-[left_center]"
        />
      </div>

      {/* Personas derecha */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-[15] hidden w-[34%] md:block"
        style={{
          maskImage: fadeLeft,
          WebkitMaskImage: fadeLeft,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <SafeImage
          src="/images/hero/derecha.jpg"
          alt=""
          sizes="34vw"
          className="object-[right_center]"
        />
      </div>

      {/* Ondas de luz (encima de las fotos) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[5] h-[80%] w-full"
      >
        <defs>
          <linearGradient id="wave-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff1f33" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#ff2a3a" />
            <stop offset="65%" stopColor="#ffc94d" />
            <stop offset="100%" stopColor="#ffd98a" />
          </linearGradient>
          <linearGradient id="wave-b" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#ffd98a" />
            <stop offset="45%" stopColor="#ffb83d" />
            <stop offset="85%" stopColor="#e0141f" />
            <stop offset="100%" stopColor="#e0141f" stopOpacity="0.2" />
          </linearGradient>
          <filter id="wave-glow" x="-10%" y="-20%" width="120%" height="140%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <g fill="none" strokeLinecap="round">
          <path
            d="M-20 420 C 220 250, 420 490, 700 390 S 1180 210, 1460 320"
            stroke="url(#wave-a)"
            strokeWidth="9"
            opacity="0.9"
            filter="url(#wave-glow)"
          />
          <path
            d="M-20 420 C 220 250, 420 490, 700 390 S 1180 210, 1460 320"
            stroke="url(#wave-a)"
            strokeWidth="2.5"
          />
          <path
            d="M-20 455 C 260 330, 480 510, 760 430 S 1200 300, 1460 385"
            stroke="url(#wave-b)"
            strokeWidth="7"
            opacity="0.85"
            filter="url(#wave-glow)"
          />
          <path
            d="M-20 455 C 260 330, 480 510, 760 430 S 1200 300, 1460 385"
            stroke="url(#wave-b)"
            strokeWidth="2"
          />
        </g>
      </svg>

      <div className="relative mx-auto max-w-4xl text-center">
       <DirectoryBadge />
        <h1 className="font-serif font-medium uppercase leading-[0.95] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]">
          <span className="block text-[clamp(2.2rem,6vw,4.4rem)] text-white">
            Nuestra gente.
          </span>
          <span className="block bg-gradient-to-r from-[#f7d27a] via-[#f5c04a] to-[#c8912a] bg-clip-text text-[clamp(2.2rem,6vw,4.4rem)] italic text-transparent">
            Nuestros negocios.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base text-white drop-shadow-[0_1px_12px_rgba(0,0,0,1)] sm:text-lg">
          Directorio de emprendimientos de miembros de la iglesia de Jesucristo en Bogotá, Colombia.
        </p>

        <div
          role="search"
          className="mx-auto mt-6 flex w-full max-w-3xl items-center rounded-full border-2 border-white/80 bg-black/85 p-1.5 shadow-[0_0_40px_rgba(212,20,31,0.3)] backdrop-blur-md sm:mt-7"
        >
          <Search
            size={22}
            aria-hidden="true"
            className="ml-3 shrink-0 text-white sm:ml-5"
          />
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            aria-label="¿Qué estás buscando?"
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base text-white placeholder:text-white/50 focus:outline-none sm:px-5 sm:text-lg"
          />
          <div className="hidden items-center gap-2 border-l border-white/20 px-5 text-white sm:flex">
            <MapPin size={18} aria-hidden="true" />
            <span>Bogotá</span>
            <ChevronDown size={18} aria-hidden="true" />
          </div>
          <button
            type="button"
            aria-label="Buscar"
            className="ml-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ruby text-white shadow-[0_0_20px_rgba(212,20,31,0.6)] transition hover:brightness-125 sm:h-14 sm:w-14"
          >
            <Search size={22} aria-hidden="true" />
          </button>
        </div>

       <StakeChips />

      </div>
    </section>
  );
}