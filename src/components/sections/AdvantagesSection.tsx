const ADVANTAGES = [
  {
    title: "Технології",
    description: "Використовуємо дилерське обладнання останнього покоління для точного виявлення несправностей.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    borderHover: "hover:border-secondary/50",
    iconColor: "text-secondary",
  },
  {
    title: "Майстерність",
    description: "Наші механіки мають багаторічний досвід роботи з автомобілями різних марок та моделей.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    borderHover: "hover:border-primary-container/50",
    iconColor: "text-primary-container",
  },
  {
    title: "Гарантія",
    description: "Надаємо безумовну гарантію на всі види робіт та запчастини терміном до 24 місяців.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    borderHover: "hover:border-tertiary/50",
    iconColor: "text-tertiary",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24 bg-surface-container-low hud-grid">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Чому обирають нас?
            </h2>
            <div className="h-1 w-24 bg-secondary mt-4" />
          </div>
          <p className="font-headline text-xs text-white/40 max-w-xs uppercase tracking-widest">
            Технічна перевага в кожній деталі вашого обслуговування
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className={`p-10 bg-surface-container border border-outline-variant/20 ${item.borderHover} transition-all duration-300 group`}
            >
              <div className={`${item.iconColor} mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-headline text-xl font-bold uppercase mb-4">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
