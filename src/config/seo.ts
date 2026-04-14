export const SITE_CONFIG = {
  name: "Auto Service Garage",
  shortName: "Auto Service",
  url: "https://autoservicegarage.com.ua",
  locale: "uk_UA",
  language: "uk",
  themeColor: "#0e0e0f",
  phone: "073 222 69 68",
  phoneHref: "tel:+380732226968",
  address: {
    street: "вул. Лугова 15",
    city: "Київ",
    district: "Оболонь",
    postalCode: "04214",
    country: "UA",
  },
  hours: "ПН — СБ / 09:00 — 18:00",
  instagram: "https://www.instagram.com/avtoservis_garage_cto",
  geo: { lat: 50.5072997, lng: 30.4770974 },
  googleMapsUrl: "https://maps.app.goo.gl/QqFfFmVHMdaaJkxk9",
} as const;

export type PageKey = "home" | "portfolio" | "contacts" | "pricing" | "reviews";

export const PAGE_SEO: Record<PageKey, { title: string; description: string; keywords: string[] }> = {
  home: {
    title: "Автосервіс у Києві — діагностика та ремонт авто",
    description:
      "Auto Service Garage — професійне СТО на Оболоні в Києві. Діагностика, ремонт двигуна, ходової, гальм, електрики. Гарантія на всі роботи.",
    keywords: ["СТО Київ", "автосервіс Київ", "ремонт авто Київ", "діагностика авто", "СТО Оболонь"],
  },
  portfolio: {
    title: "Наші роботи — приклади ремонтів",
    description:
      "Портфоліо виконаних робіт Auto Service Garage. Ремонт двигунів, ходової частини, діагностика — реальні результати наших майстрів.",
    keywords: ["ремонт авто приклади", "портфоліо автосервіс", "СТО роботи Київ"],
  },
  contacts: {
    title: "Контакти — адреса, телефон, запис на сервіс",
    description:
      "Запишіться на сервіс: м. Київ, Оболонь, вул. Лугова 15т. Телефон: 073 222 69 68. Працюємо ПН-СБ 09:00-18:00.",
    keywords: ["автосервіс Оболонь адреса", "СТО контакти Київ", "запис на СТО"],
  },
  pricing: {
    title: "Прайс-лист — ціни на ремонт та обслуговування",
    description:
      "Прозорі ціни на діагностику, ремонт двигуна, ходової, ТО та інші послуги. Auto Service Garage — СТО Київ, Оболонь.",
    keywords: ["ціни СТО Київ", "прайс автосервіс", "вартість ремонту авто Київ"],
  },
  reviews: {
    title: "Відгуки клієнтів — що кажуть про нас",
    description:
      "Реальні відгуки клієнтів Auto Service Garage. Дізнайтеся, чому нам довіряють власники авто в Києві.",
    keywords: ["відгуки автосервіс Київ", "СТО відгуки", "Auto Service Garage відгуки"],
  },
};
