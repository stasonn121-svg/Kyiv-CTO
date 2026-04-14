const SERVICES = [
  {
    title: "Діагностика",
    description: "Комп'ютерна діагностика, замір компресії та сканування помилок з детальним звітом.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_14FD4vu7z4a79ss4xV8reBk-6xOe_6cHqlTg_tkczUxSlUh1cbUTiJ8DrimT3Kg8SzcOnr1Xp-J49OwbkPge6jSXxrUXMgo17CJyfLmv1Ww5h8sNfjsBqCzA_-bCaq6_AWACpsnsxiYLG8fM7S2lY_uh5EDE9IGat0b03aRQ9VP69-gQZbBAWaQbaYJMSddBb8CNYwzYtpmHMlS6_P9_fhzJXpVlj3qQbjtOrwLhzxvA2yeQyyYCI6YSzO-DaSE7QH-FRtx0lrk",
  },
  {
    title: "Ремонт двигуна",
    description: "Капітальний та поточний ремонт агрегатів будь-якої складності з оригінальними запчастинами.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHBJFnq9kqkVAkd2LcnD07gDaWZHBQdjFnCcNgQ5zN_JVaAKhH_RV9bf5R4-9QJYB8twyRFK39xvQKfrJeIryup3KQxkc4qGFZ7Vq9wdcCiSvs5WrN7yYPgsJwagynUTvhPpjcJNHYslncmfRmpEkvOKOE-KJb3xp0YNp0McIl4t-exaZ5V9Kko_7uG4RU6EG2Evj5OYyFLi_pK-8G_mHfrfnc7V9hoFwvu9X4uq6AmTBxZs-hk4rVdphtTQjvTQEDSEHGjWM564k",
  },
  {
    title: "Ходова частина",
    description: "Діагностика на вібростенді, заміна елементів підвіски та розвал-сходження.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2yE8I2wteAcWFYeLRn43F_ApfSOZ21tdBIINKex4OrPycIEdnBT_ScO-vdLaApWr4PKONFHcjDGyV4QA-1-M7zeGMZ9Fgn3MVaNrnhywdOD5gG9lj0qeJyCEBL37XeFPx283rqo8MHPrpOdmLWH6MlZCE4wIQtojPYJElYKnyNxC90BqlPS80VvX67OPaUFDInVlw4buj3bj9t7FKhuUMyWYd51vpM6tXFrsHFV0Qv3r4wlHVEk4eaTOQWg9603QLIAdrMJDEltI",
  },
  {
    title: "Гальмівна система",
    description: "Заміна колодок та дисків, обслуговування гальмівної системи з перевіркою ABS.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHBJFnq9kqkVAkd2LcnD07gDaWZHBQdjFnCcNgQ5zN_JVaAKhH_RV9bf5R4-9QJYB8twyRFK39xvQKfrJeIryup3KQxkc4qGFZ7Vq9wdcCiSvs5WrN7yYPgsJwagynUTvhPpjcJNHYslncmfRmpEkvOKOE-KJb3xp0YNp0McIl4t-exaZ5V9Kko_7uG4RU6EG2Evj5OYyFLi_pK-8G_mHfrfnc7V9hoFwvu9X4uq6AmTBxZs-hk4rVdphtTQjvTQEDSEHGjWM564k",
  },
  {
    title: "Технічне обслуговування",
    description: "Регламентне ТО зі збереженням гарантії та повною історією обслуговування.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_14FD4vu7z4a79ss4xV8reBk-6xOe_6cHqlTg_tkczUxSlUh1cbUTiJ8DrimT3Kg8SzcOnr1Xp-J49OwbkPge6jSXxrUXMgo17CJyfLmv1Ww5h8sNfjsBqCzA_-bCaq6_AWACpsnsxiYLG8fM7S2lY_uh5EDE9IGat0b03aRQ9VP69-gQZbBAWaQbaYJMSddBb8CNYwzYtpmHMlS6_P9_fhzJXpVlj3qQbjtOrwLhzxvA2yeQyyYCI6YSzO-DaSE7QH-FRtx0lrk",
  },
  {
    title: "Електрика",
    description: "Діагностика електрики, ремонт проводки, генератора та стартера.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2yE8I2wteAcWFYeLRn43F_ApfSOZ21tdBIINKex4OrPycIEdnBT_ScO-vdLaApWr4PKONFHcjDGyV4QA-1-M7zeGMZ9Fgn3MVaNrnhywdOD5gG9lj0qeJyCEBL37XeFPx283rqo8MHPrpOdmLWH6MlZCE4wIQtojPYJElYKnyNxC90BqlPS80VvX67OPaUFDInVlw4buj3bj9t7FKhuUMyWYd51vpM6tXFrsHFV0Qv3r4wlHVEk4eaTOQWg9603QLIAdrMJDEltI",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Основні послуги
          </h2>
          <p className="font-headline text-secondary tracking-widest uppercase text-sm">
            Комплексний сервіс для вашого автомобіля
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="relative h-[350px] lg:h-[400px] overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={service.image}
                alt={service.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-headline text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-white/60 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
