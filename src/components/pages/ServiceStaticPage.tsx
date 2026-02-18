import type { Metadata } from "next";

import { serviceBySlug, type ServicePageData } from "@/data/services";
import { createBreadcrumbSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import { ServicePageTemplate } from "./ServicePageTemplate";
import { JsonLd } from "../seo/JsonLd";

export function getServiceMetadata(slug: ServicePageData["slug"]): Metadata {
  const service = serviceBySlug[slug];

  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.seoKeywords,
  });
}

type ServiceStaticPageProps = {
  slug: ServicePageData["slug"];
};

export function ServiceStaticPage({ slug }: ServiceStaticPageProps) {
  const service = serviceBySlug[slug];

  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Начало", path: "/" },
          { name: "Услуги", path: "/services" },
          { name: service.navLabel, path: `/services/${service.slug}` },
        ])}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}

