import type { MetadataRoute } from "next";

import { brand } from "@/config/brand";
import { services } from "@/data/services";
import { allSubservices } from "@/data/subservices";

const staticRoutes = ["/", "/services", "/contact", "/reviews", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: route === "/" ? brand.siteUrl : `${brand.siteUrl}${route}`,
    lastModified: now,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${brand.siteUrl}/services/${service.slug}`,
    lastModified: now,
  }));

  const subserviceEntries = allSubservices.map((subservice) => ({
    url: `${brand.siteUrl}/services/${subservice.parentSlug}/${subservice.slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...serviceEntries, ...subserviceEntries];
}

