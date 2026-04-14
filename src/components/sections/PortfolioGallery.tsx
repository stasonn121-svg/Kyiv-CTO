"use client";

import { useState } from "react";
import { getCategoryLabel } from "@/lib/portfolio";
import type { PortfolioImage } from "@/lib/portfolio";

interface Props {
  images: PortfolioImage[];
  categories: string[];
}

export default function PortfolioGallery({ images, categories }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? images.filter((img) => img.category === active)
    : images;

  return (
    <section className="px-6 lg:px-10 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActive(null)}
            className={`font-headline text-sm uppercase tracking-wider px-5 py-2 border transition-colors ${
              active === null
                ? "bg-primary-container text-on-primary border-primary-container"
                : "border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-white/30"
            }`}
          >
            Усі роботи
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-headline text-sm uppercase tracking-wider px-5 py-2 border transition-colors ${
                active === cat
                  ? "bg-primary-container text-on-primary border-primary-container"
                  : "border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-white/30"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <div
              key={img.url}
              className="relative h-[300px] overflow-hidden group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={img.url}
                alt={img.caption || getCategoryLabel(img.category)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {img.caption && (
                  <p className="font-headline text-sm font-bold text-white mb-1">
                    {img.caption}
                  </p>
                )}
                <span className="text-xs text-secondary uppercase tracking-widest">
                  {getCategoryLabel(img.category)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
