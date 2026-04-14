import { SITE_CONFIG } from "@/config/seo";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: `+380${SITE_CONFIG.phone.replace(/\s/g, "").replace(/^0/, "")}`,
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
    sameAs: [SITE_CONFIG.instagram],
    serviceType: [
      "Діагностика автомобіля",
      "Ремонт двигуна",
      "Ремонт ходової частини",
      "Обслуговування гальмівної системи",
      "Технічне обслуговування",
      "Ремонт електрики",
    ],
    areaServed: {
      "@type": "City",
      name: "Київ",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
