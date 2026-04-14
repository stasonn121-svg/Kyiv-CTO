const REVIEWS = [
  {
    text: "Найкращий сервіс у Києві. Ремонтував тут свою машину — підхід як до космічного корабля. Професійно, чітко і якісно.",
    name: "Олександр К.",
    car: "BMW 320d",
  },
  {
    text: "Після дилера приїхала сюди на ТО. Здивував рівень діагностики — всі помилки показали на графіках, пояснили кожен пункт. Тепер тільки до них.",
    name: "Олена В.",
    car: "Audi A4",
  },
  {
    text: "Відновлювали ходову, знайшли всі проблеми, зробили все в ідеал. Справжні фанати своєї справи. Рекомендую всім!",
    name: "Ігор С.",
    car: "Volkswagen Passat",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full" />
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <h2 className="font-headline text-center text-4xl font-bold uppercase mb-16 tracking-tighter">
          Відгуки клієнтів
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-surface-container/60 backdrop-blur-xl p-8 border border-white/5 relative group hover:border-secondary/30 transition-colors"
            >
              <svg
                className="text-secondary w-8 h-8 absolute -top-4 -left-4 bg-background p-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <p className="italic text-on-surface-variant mb-6 text-sm">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-bright rounded-sm" />
                <div>
                  <div className="font-headline font-bold text-sm uppercase">{review.name}</div>
                  <div className="text-[10px] font-headline text-secondary uppercase">{review.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
