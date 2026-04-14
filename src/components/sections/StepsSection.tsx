const STEPS = [
  { num: 1, title: "Заявка", desc: "Залиште запит на сайті або по телефону", active: true },
  { num: 2, title: "Запис", desc: "Менеджер узгодить зручний час візиту", active: false },
  { num: 3, title: "Діагностика", desc: "Точне визначення несправностей", active: false },
  { num: 4, title: "Ремонт", desc: "Виконання робіт майстрами СТО", active: false },
  { num: 5, title: "Готово!", desc: "Ви забираєте свій ідеальний авто", active: false },
];

export default function StepsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <h2 className="font-headline text-center text-4xl font-bold uppercase mb-20 tracking-tighter">
          Етапи роботи
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
          <div className="absolute top-8 left-8 right-8 h-[1px] bg-white/10 hidden md:block">
            <div className="h-full w-1/5 bg-gradient-to-r from-secondary to-transparent shadow-[0_0_10px_#00f1fe]" />
          </div>
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="relative z-20 flex flex-col items-center text-center max-w-[200px] mx-auto md:mx-0"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center font-headline text-2xl font-bold mb-6 ${
                  step.active
                    ? "bg-surface-container border border-secondary text-secondary shadow-[0_0_15px_rgba(0,241,254,0.2)]"
                    : "bg-surface-container border border-white/20 text-white/50"
                }`}
              >
                {step.num}
              </div>
              <div className="font-headline font-bold uppercase text-sm mb-2">{step.title}</div>
              <p className="text-[10px] text-white/40 uppercase">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
