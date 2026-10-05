import SafeImage from "./SafeImage";

export default function TempleBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-[15] h-[88%] overflow-hidden"
    >
      {/* Cielo al atardecer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#14102a_0%,#4a1a3a_40%,#a8402e_70%,transparent_100%)] opacity-70" />

      {/* Montañas */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="mtn-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b2a55" />
            <stop offset="100%" stopColor="#120c1c" />
          </linearGradient>
          <linearGradient id="mtn-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1428" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
        </defs>
        <path
          d="M0 430 L120 360 L230 410 L380 300 L520 390 L640 330 L780 410 L900 320 L1040 400 L1180 310 L1320 380 L1440 330 L1440 600 L0 600 Z"
          fill="url(#mtn-far)"
        />
        <path
          d="M0 500 L160 440 L300 480 L470 420 L620 485 L800 430 L980 490 L1160 440 L1300 485 L1440 450 L1440 600 L0 600 Z"
          fill="url(#mtn-near)"
        />
      </svg>

      {/* Luces de la ciudad */}
      <div
        className="absolute inset-x-0 bottom-[8%] h-[22%] bg-[radial-gradient(circle,rgba(255,205,110,0.95)_1px,transparent_1.6px)] bg-[length:9px_7px] opacity-70"
        style={{
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Templo de Bogotá (ilustración SVG) */}
      <svg
        viewBox="0 0 200 400"
        className="absolute bottom-[6%] right-[2%] h-[62%] w-auto sm:right-[14%]"
      >
        <defs>
          <linearGradient id="temple-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fffaf0" />
            <stop offset="100%" stopColor="#e8c88e" />
          </linearGradient>
          <radialGradient id="temple-glow" cx="0.5" cy="0.55" r="0.55">
            <stop offset="0%" stopColor="#ffd98a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffd98a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="100" cy="230" rx="130" ry="190" fill="url(#temple-glow)" />

        {/* Ángel Moroni */}
        <circle cx="100" cy="10" r="4" fill="#ffe7a8" />
        <path d="M96 14 L104 14 L106 30 L94 30 Z" fill="#ffe7a8" />
        <path d="M104 12 L122 4" stroke="#ffe7a8" strokeWidth="2" strokeLinecap="round" />

        {/* Aguja */}
        <path d="M100 28 L93 130 L107 130 Z" fill="url(#temple-body)" />
        <rect x="88" y="130" width="24" height="10" fill="url(#temple-body)" />

        {/* Torre */}
        <rect x="78" y="140" width="44" height="60" fill="url(#temple-body)" />
        <rect x="95" y="152" width="10" height="26" rx="5" fill="#b98a3e" opacity="0.7" />

        {/* Cuerpo principal */}
        <rect x="38" y="200" width="124" height="130" fill="url(#temple-body)" />
        {[52, 74, 96, 118, 140].map((x) => (
          <rect key={x} x={x} y="222" width="8" height="48" rx="4" fill="#b98a3e" opacity="0.65" />
        ))}
        <rect x="38" y="200" width="124" height="6" fill="#fff3d6" />

        {/* Alas laterales */}
        <rect x="8" y="262" width="34" height="68" fill="url(#temple-body)" />
        <rect x="158" y="262" width="34" height="68" fill="url(#temple-body)" />
        {[16, 28, 166, 178].map((x) => (
          <rect key={x} x={x} y="280" width="6" height="30" rx="3" fill="#b98a3e" opacity="0.6" />
        ))}

        {/* Base */}
        <rect x="0" y="330" width="200" height="12" fill="#f3dcae" />
        <rect x="10" y="342" width="180" height="10" fill="#d9b36e" />
      </svg>

      {/* Foto real opcional: public/images/hero/bogota-templo.jpg */}
      <div className="absolute inset-0">
        <SafeImage
          src="/images/hero/bogota-templo.jpg"
          alt=""
          sizes="100vw"
          priority
        />
      </div>

      {/* Oscurecimiento para que el texto se lea */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#050505]" />
    </div>
  );
}