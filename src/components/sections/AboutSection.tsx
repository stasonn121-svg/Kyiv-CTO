export default function AboutSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video">
              <img
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxOMgLn5PyPOxq-O66jI2pc13s95hIHP5kzf6VVToPBSP2KB6YEKZJjtSfNY7AGmWMrJ1kSi_WmiYYh3CVhpkF_nLBCFj5sssnbH2XlAvbKoTHtxz32OpuHzBDbfyD51AgS21tfz_jNrGhQwxEUz-v-AUrpXMQv5rrxlxJEPQxon6aY9JvU58AnzUpJMz5jbeHl84hCMZhyj6pIGxS9ZwUwok7MNWi2vhPJb5A-xzGLP_1k_S6KeM6gMIcocxwCzSS2ghv7xG-HMg"
                alt="Наш автосервіс"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container p-6 flex flex-col justify-center">
                <span className="font-headline text-4xl font-bold text-on-primary">24/7</span>
                <span className="font-headline text-[8px] uppercase font-bold text-on-primary">
                  Підтримка
                </span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-headline text-secondary text-xs tracking-widest uppercase mb-4 block">
              Про нас
            </span>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-8">
              Більше ніж сервіс. <br /> Культура ремонту.
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Auto Service Garage — це професійний автосервіс на Оболоні в Києві. Ми спеціалізуємося на
              діагностиці, ремонті та обслуговуванні автомобілів будь-яких марок. Наша філософія проста:
              кожен автомобіль заслуговує на найкращий догляд.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-headline font-bold text-white mb-2">6</div>
                <div className="text-[10px] font-headline text-white/40 uppercase tracking-widest">
                  Напрямків послуг
                </div>
              </div>
              <div>
                <div className="text-3xl font-headline font-bold text-white mb-2">15+</div>
                <div className="text-[10px] font-headline text-white/40 uppercase tracking-widest">
                  Років на ринку
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
