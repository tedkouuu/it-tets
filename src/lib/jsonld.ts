import { brand } from "@/config/brand";
import { services } from "@/data/services";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${brand.siteUrl}${item.path}`,
  })),
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.brandName,
  legalName: brand.legalName,
  url: brand.siteUrl,
  telephone: brand.phone,
  description: brand.shortDescription,
  areaServed: "Bulgaria",
  serviceType: services.map((service) => service.navLabel),
});

export const createFaqSchema = (
  items: {
    question: string;
    answer: string;
  }[],
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

