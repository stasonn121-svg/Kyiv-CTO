import { SITE_CONFIG } from "@/config/seo";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_CONFIG.name,
    alternateName: "СТО Гараж",
    url: SITE_CONFIG.url,
    telephone: `+380${SITE_CONFIG.phone.replace(/\s/g, "").replace(/^0/, "")}`,
    image: `${SITE_CONFIG.url}/logo.png`,
    description:
      "Професійний автосервіс на Оболоні в Києві. Діагностика, ремонт двигуна, ходової частини, гальм, електрики. Гарантія до 24 місяців.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.district,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.lat,
      longitude: SITE_CONFIG.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "₴₴",
    currenciesAccepted: "UAH",
    paymentAccepted: "Готівка, Картка",
    sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.googleMapsUrl],
    hasMap: SITE_CONFIG.googleMapsUrl,
    serviceType: [
      "Комп'ютерна діагностика автомобіля",
      "Ремонт двигуна",
      "Ремонт ходової частини",
      "Ремонт гальмівної системи",
      "Технічне обслуговування авто",
      "Ремонт електрики автомобіля",
      "Заміна мастила та фільтрів",
      "Розвал-сходження",
      "Ремонт підвіски",
      "Капітальний ремонт двигуна",
    ],
    areaServed: [
      { "@type": "City", name: "Київ" },
      { "@type": "AdministrativeArea", name: "Оболонь" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Олександр К." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Найкращий сервіс у Києві. Ремонтував тут свою машину — підхід як до космічного корабля. Професійно, чітко і якісно.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Олена В." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Після дилера приїхала сюди на ТО. Здивував рівень діагностики — всі помилки показали на графіках, пояснили кожен пункт.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ігор С." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Відновлювали ходову, знайшли всі проблеми, зробили все в ідеал. Справжні фанати своєї справи. Рекомендую всім!",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
