import { PAGE_SEO } from "@/config/seo";
import Link from "next/link";

export const metadata = {
  title: PAGE_SEO.pricing.title,
  description: PAGE_SEO.pricing.description,
  keywords: PAGE_SEO.pricing.keywords,
};

const ENGINE_PRICES = [
  { name: "Комп'ютерна діагностика та замір компресії", price: "від 1 200 ₴" },
  { name: "Заміна прокладки головки блоку циліндрів", price: "від 8 500 ₴" },
  { name: "Сервіс ГРМ (пасок / ланцюг)", price: "від 4 200 ₴" },
  { name: "Капітальний ремонт двигуна", price: "від 25 000 ₴" },
];

const MAINTENANCE_PRICES = [
  { name: "Заміна мастила та фільтрів", price: "800 ₴", desc: "Синтетичне мастило, заміна фільтра та візуальний огляд." },
  { name: "Повний тех-аудит", price: "2 400 ₴", desc: "Глибока діагностика, аналіз робочих рідин та телеметрія." },
  { name: "Зимовий пакет", price: "1 500 ₴", desc: "Тест АКБ, промивка системи охолодження та обробка ущільнювачів." },
];

const SUSPENSION_PRICES = [
  { name: "Діагностика ходової", price: "від 500 ₴" },
  { name: "Заміна амортизаторів (пара)", price: "від 2 000 ₴" },
  { name: "Розвал-сходження", price: "від 800 ₴" },
  { name: "Заміна важелів підвіски", price: "від 1 500 ₴" },
];

const BRAKES_PRICES = [
  { name: "Заміна колодок (вісь)", price: "від 400 ₴" },
  { name: "Заміна гальмівних дисків", price: "від 1 200 ₴" },
  { name: "Діагностика ABS", price: "від 500 ₴" },
];

const ELECTRIC_PRICES = [
  { name: "Діагностика електрики", price: "від 600 ₴" },
  { name: "Ремонт генератора", price: "від 1 500 ₴" },
  { name: "Ремонт стартера", price: "від 1 200 ₴" },
  { name: "Ремонт проводки", price: "від 800 ₴" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/20 pb-10">
          <div className="max-w-2xl">
            <span className="font-headline text-secondary text-sm tracking-[0.3em] uppercase mb-4 block">
              Інженерна точність
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Протоколи <span className="text-primary-container">обслуговування</span>
            </h1>
          </div>
          <p className="text-white/60 max-w-xs text-sm">
            Прозоре ціноутворення на технічне обслуговування. Ціни вказані без урахування запчастин.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Engine — large card */}
          <div className="md:col-span-8 bg-surface-container-low p-8 border border-outline-variant/20">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <h2 className="font-headline text-3xl font-black uppercase tracking-tighter">Двигун та трансмісія</h2>
            </div>
            <div className="space-y-4">
              {ENGINE_PRICES.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-4 border-b border-outline-variant/10 hover:bg-white/5 px-2 transition-colors">
                  <span className="font-body font-medium">{item.name}</span>
                  <span className="font-headline text-secondary ml-4 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance — side */}
          <div className="md:col-span-4 bg-surface-container p-8 border border-outline-variant/20 border-l-4 border-l-primary-container">
            <h2 className="font-headline text-2xl font-black uppercase tracking-tighter mb-8">Регламентне ТО</h2>
            <ul className="space-y-6">
              {MAINTENANCE_PRICES.map((item) => (
                <li key={item.name} className="group cursor-default">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-headline text-lg uppercase font-bold tracking-tight group-hover:text-primary-container transition-colors">{item.name}</span>
                    <span className="font-headline text-secondary ml-2">{item.price}</span>
                  </div>
                  <p className="text-xs text-outline">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Suspension */}
          <div className="md:col-span-6 bg-surface-container-low p-8 border border-outline-variant/20">
            <h2 className="font-headline text-2xl font-black uppercase tracking-tighter mb-6">Ходова частина</h2>
            <div className="space-y-4">
              {SUSPENSION_PRICES.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-3 border-b border-outline-variant/10 hover:bg-white/5 px-2 transition-colors">
                  <span className="font-body font-medium">{item.name}</span>
                  <span className="font-headline text-secondary ml-4 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brakes */}
          <div className="md:col-span-3 bg-surface-container p-8 border border-outline-variant/20">
            <h2 className="font-headline text-xl font-black uppercase tracking-tighter mb-6">Гальма</h2>
            <div className="space-y-4">
              {BRAKES_PRICES.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <span className="text-sm">{item.name}</span>
                  <span className="font-headline text-secondary text-sm ml-2 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Electric */}
          <div className="md:col-span-3 bg-surface-container p-8 border border-outline-variant/20">
            <h2 className="font-headline text-xl font-black uppercase tracking-tighter mb-6">Електрика</h2>
            <div className="space-y-4">
              {ELECTRIC_PRICES.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                  <span className="text-sm">{item.name}</span>
                  <span className="font-headline text-secondary text-sm ml-2 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-container">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter text-on-primary mb-4">
            Готові записатися?
          </h2>
          <p className="text-on-primary/70 mb-8 max-w-lg mx-auto">
            Залиште заявку онлайн або зателефонуйте нам. Точна вартість визначається після діагностики.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-background text-white font-headline font-bold uppercase tracking-tighter px-10 py-4 hover:bg-surface-container-high transition-colors"
          >
            Записатися на сервіс
          </Link>
        </div>
      </section>
    </>
  );
}
