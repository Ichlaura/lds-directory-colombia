import { Code2 } from "lucide-react";
import { creator } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 text-center text-sm text-white/60 sm:flex-row sm:text-left">
        <p>© {year} Directorio de emprendimientos · Bogotá, Colombia</p>

        <p className="flex flex-wrap items-center justify-center gap-2">
          <Code2 size={16} aria-hidden="true" className="text-gold" />
          <span>Diseñado y desarrollado por</span>
          {creator.profileUrl ? (
            <a
              href={creator.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold underline-offset-4 transition hover:underline"
            >
              {creator.name}
            </a>
          ) : (
            <span className="font-medium text-gold">{creator.name}</span>
          )}
          <span aria-hidden="true">·</span>
          <span>{creator.role}</span>
        </p>
      </div>
    </footer>
  );
}