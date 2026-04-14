import Link from "next/link";

const PRICES = [
  { name: "Комп'ютерна діагностика", sub: "Повне сканування + звіт помилок", price: "від 500 ₴" },
  { name: "Заміна мастила та фільтрів", sub: "Перевірка рідин за 12 пунктами", price: "від 800 ₴" },
  { name: "Ремонт ходової (робота)", sub: "Підвіска, рульове, розвал-сходження", price: "від 1 200 ₴" },
  { name: "Обслуговування гальм", sub: "Колодки, диски, перевірка ABS", price: "від 1 000 ₴" },
  { name: "Діагностика електрики", sub: "Генератор, стартер, проводка", price: "від 600 ₴" },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter">
              Ціни на послуги
            </h2>
            <div className="flex-grow h-px bg-outline-variant/30" />
          </div>
          <div className="space-y-4">
            {PRICES.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center p-6 bg-surface-container hover:bg-surface-bright transition-colors group"
              >
                <div className="flex flex-col">
                  <span className="font-headline font-bold uppercase group-hover:text-primary-container transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-headline text-white/30 uppercase tracking-widest">
                    {item.sub}
                  </span>
                </div>
                <div className="font-headline text-secondary text-xl font-bold whitespace-nowrap ml-4">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-block font-headline uppercase tracking-widest text-sm text-secondary hover:text-white transition-colors border-b border-secondary/30 pb-1"
            >
              Повний прайс-лист →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
