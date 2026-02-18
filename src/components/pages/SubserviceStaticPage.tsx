import type { Metadata } from "next";

import { serviceBySlug, type ServiceSlug } from "@/data/services";
import { getSubservice } from "@/data/subservices";
import { createBreadcrumbSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import { JsonLd } from "../seo/JsonLd";
import { SubservicePageTemplate } from "./SubservicePageTemplate";

type SubserviceRouteInput = {
  serviceSlug: ServiceSlug;
  subserviceSlug: string;
};

export function getSubserviceMetadata({
  serviceSlug,
  subserviceSlug,
}: SubserviceRouteInput): Metadata {
  const service = serviceBySlug[serviceSlug];
  const subservice = getSubservice(serviceSlug, subserviceSlug);

  if (!subservice) {
    return createPageMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/services/${service.slug}`,
      keywords: service.seoKeywords,
    });
  }

  return createPageMetadata({
    title: subservice.metaTitle,
    description: subservice.metaDescription,
    path: `/services/${serviceSlug}/${subserviceSlug}`,
    keywords: subservice.keywords,
  });
}

export function SubserviceStaticPage({
  serviceSlug,
  subserviceSlug,
}: SubserviceRouteInput) {
  const service = serviceBySlug[serviceSlug];
  const subservice = getSubservice(serviceSlug, subserviceSlug);

  if (!subservice) {
    return null;
  }

  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Начало", path: "/" },
          { name: "Услуги", path: "/services" },
          { name: service.navLabel, path: `/services/${service.slug}` },
          {
            name: subservice.title,
            path: `/services/${serviceSlug}/${subserviceSlug}`,
          },
        ])}
      />
      <SubservicePageTemplate service={service} subservice={subservice} />
    </>
  );
}

