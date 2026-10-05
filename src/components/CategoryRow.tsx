import { categories } from "@/lib/data";
import SafeImage from "./SafeImage";

export default function CategoryRow() {
  return (
    <section aria-label="Categorías" className="px-4 sm:px-8">
      <ul className="mx-auto grid max-w-[1500px] grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <button
              type="button"
              className="group flex w-full flex-col items-center gap-3"
            >
              <span className="block w-full max-w-[170px] rounded-[50%] bg-gradient-to-br from-gold via-ruby to-[#7a1ea1] p-[2px] shadow-[0_0_22px_rgba(212,20,31,0.35)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_34px_rgba(245,192,74,0.6)]">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-[50%] bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <SafeImage
                    src={cat.image}
                    alt={cat.name}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 170px"
                    className="transition duration-500 group-hover:scale-110"
                  />
                </span>
              </span>
              <span className="font-serif text-lg tracking-wide text-white transition group-hover:text-gold">
                {cat.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}