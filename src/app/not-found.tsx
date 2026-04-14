import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hud-grid opacity-40" />
      <div className="relative z-10 text-center px-6">
        <p className="font-headline text-8xl md:text-[12rem] font-black text-primary-container leading-none tracking-tighter">
          404
        </p>
        <h1 className="font-headline text-2xl md:text-4xl font-bold uppercase tracking-tight mt-4 mb-4">
          Сторінку не знайдено
        </h1>
        <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-10">
          Схоже, ця сторінка зникла швидше, ніж масло без заміни. Поверніться на головну.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-container text-on-primary font-headline font-black uppercase text-lg px-12 py-4 tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(253,228,3,0.3)]"
        >
          На головну
        </Link>
      </div>
    </section>
  );
}
