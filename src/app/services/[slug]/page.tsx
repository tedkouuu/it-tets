import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceBySlug, services, type ServicePageData } from "@/data/services";
import { createBreadcrumbSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

type RouteParams = {
  slug: string;
};

const getService = (slug: string) =>
  serviceBySlug[slug as ServicePageData["slug"]];

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createPageMetadata({
      title: "IT услуги за бизнес клиенти и управлявана поддръжка",
      description:
        "Открийте надеждни IT услуги, cloud оптимизация и киберсигурност с ясен SLA модел. Потърсете професионална консултация за вашата среда.",
      path: "/services",
    });
  }

  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.seoKeywords,
  });
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

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

