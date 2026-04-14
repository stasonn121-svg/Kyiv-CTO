import Link from "next/link";
import { SITE_CONFIG } from "@/config/seo";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 py-16">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-xl font-black text-primary-container tracking-tight font-headline mb-4">
              AUTO SERVICE GARAGE
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Професійний автосервіс у Києві на Оболоні. Діагностика, ремонт та обслуговування автомобілів.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-white mb-4">
              Навігація
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-on-surface-variant hover:text-white transition-colors">Послуги</Link></li>
              <li><Link href="/pricing" className="text-on-surface-variant hover:text-white transition-colors">Ціни</Link></li>
              <li><Link href="/portfolio" className="text-on-surface-variant hover:text-white transition-colors">Наші роботи</Link></li>
              <li><Link href="/contacts" className="text-on-surface-variant hover:text-white transition-colors">Контакти</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-white mb-4">
              Контакти
            </h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li>
                <a href={SITE_CONFIG.phoneHref} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.district}, {SITE_CONFIG.address.city}</li>
              <li>{SITE_CONFIG.hours}</li>
              <li>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center text-xs text-outline">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
