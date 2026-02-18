import type { Metadata } from "next";

import { brand } from "@/config/brand";

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const normalizePath = (path: string) => {
  if (path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const getCanonicalUrl = (path: string) =>
  `${brand.siteUrl}${normalizePath(path)}`;

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords,
}: CreatePageMetadataParams): Metadata => {
  const url = getCanonicalUrl(path);

  return {
    metadataBase: new URL(brand.siteUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.brandName,
      locale: "bg_BG",
      type: "website",
      images: [
        {
          url: brand.defaultOGImage,
          width: 1200,
          height: 630,
          alt: `${brand.brandName} - IT услуги`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brand.defaultOGImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

