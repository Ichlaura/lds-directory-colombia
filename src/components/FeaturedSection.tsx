import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredBusinesses } from "@/lib/data";
import BusinessCard from "./BusinessCard";

export default function FeaturedSection() {
  return (
    <section className="px-4 pb-20 pt-14 sm:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="flex items-center gap-4 font-serif text-2xl uppercase tracking-wide sm:text-4xl">
            <span aria-hidden="true" className="h-8 w-1 rounded bg-gold sm:h-9" />
            Emprendimientos destacados
          </h2>
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-sm text-gold transition hover:gap-3 sm:text-base"
          >
            Ver todos <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredBusinesses.map((b) => (
            <BusinessCard key={b.slug} business={b} />
          ))}
        </div>
      </div>
    </section>
  );
}