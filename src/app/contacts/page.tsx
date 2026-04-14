import { PAGE_SEO, SITE_CONFIG } from "@/config/seo";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: PAGE_SEO.contacts.title,
  description: PAGE_SEO.contacts.description,
  keywords: PAGE_SEO.contacts.keywords,
};

export default function ContactsPage() {
  return (
    <>
      {/* Hero / Map */}
      <section className="relative w-full h-[500px] lg:h-[614px] overflow-hidden bg-surface-container-low pt-20">
        <div className="absolute inset-0 z-0">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.5!2d${SITE_CONFIG.geo.lng}!3d${SITE_CONFIG.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDMwJzI3LjciTiAzMMKwMjknNTMuOSJF!5e0!3m2!1suk!2sua!4v1`}
            className="w-full h-full border-0 grayscale opacity-60"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Auto Service Garage на карті"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-10 h-full flex flex-col justify-end pb-16 pointer-events-none">
          <div className="max-w-2xl">
            <span className="font-headline text-secondary text-xs tracking-[0.3em] uppercase mb-4 block">
              Об&apos;єкт: Київ, Оболонь
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
              AUTO SERVICE GARAGE
            </h1>
            <p className="text-on-surface-variant font-light text-lg max-w-lg leading-relaxed">
              Високоточна автомобільна діагностика та інжиніринг у Києві. Професійний сервіс для автомобілів будь-яких марок.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="container mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold tracking-tight uppercase border-l-4 border-primary-container pl-6">
                Прямий зв&apos;язок
              </h2>
              <div className="grid gap-4">
                <ContactCard
                  icon={<PhoneIcon />}
                  label="Гаряча лінія та Запис"
                  value={SITE_CONFIG.phone}
                  href={SITE_CONFIG.phoneHref}
                />
                <ContactCard
                  icon={<LocationIcon />}
                  label="Адреса"
                  value={`${SITE_CONFIG.address.street}\n${SITE_CONFIG.address.district}, ${SITE_CONFIG.address.city}`}
                  href={`https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.geo.lat},${SITE_CONFIG.geo.lng}`}
                />
                <ContactCard
                  icon={<ClockIcon />}
                  label="Графік роботи"
                  value={SITE_CONFIG.hours}
                  sub="Неділя: вихідний"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-[10px] text-on-surface-variant uppercase tracking-[0.4em]">
                Соцмережі
              </h3>
              <div className="flex gap-4">
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-container flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactFormSection />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  sub?: string;
}) {
  const ValueTag = href ? "a" : "p";
  const isExternal = href?.startsWith("http");
  return (
    <div className="group bg-surface-container-low p-6 transition-all duration-200 hover:bg-surface-container border border-transparent hover:border-secondary/30">
      <div className="flex items-start gap-4">
        <div className="text-secondary">{icon}</div>
        <div>
          <p className="font-headline text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
            {label}
          </p>
          <ValueTag
            {...(href ? { href } : {})}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-headline text-xl font-bold whitespace-pre-line hover:text-secondary transition-colors cursor-pointer"
          >
            {value}
          </ValueTag>
          {sub && <p className="text-tertiary text-xs font-bold mt-1 uppercase">{sub}</p>}
        </div>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
