import type { Metadata } from "next";

import { brand } from "@/config/brand";

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const TITLE_MIN_LENGTH = 48;
const TITLE_MAX_LENGTH = 60;
const DESCRIPTION_MIN_LENGTH = 135;
const DESCRIPTION_MAX_LENGTH = 155;

const normalizeWhitespace = (value: string) => value.replace(/\s+/g, " ").trim();

const truncateAtWordBoundary = (value: string, maxLength: number) => {
  if (value.length <= maxLength) {
    return value;
  }

  const sliced = value.slice(0, maxLength + 1);
  const boundaryIndex = sliced.lastIndexOf(" ");

  if (boundaryIndex > Math.floor(maxLength * 0.7)) {
    return sliced.slice(0, boundaryIndex).trim();
  }

  return value.slice(0, maxLength).trim();
};

const normalizeTitleLength = (title: string) => {
  const normalized = normalizeWhitespace(title);
  if (normalized.length > TITLE_MAX_LENGTH) {
    return truncateAtWordBoundary(normalized, TITLE_MAX_LENGTH);
  }

  if (normalized.length < TITLE_MIN_LENGTH && !normalized.toLowerCase().includes("бизнес")) {
    const extended = `${normalized} за бизнес`;
    if (extended.length <= TITLE_MAX_LENGTH) {
      return extended;
    }
  }

  return normalized;
};

const normalizeDescriptionLength = (description: string) => {
  let normalized = normalizeWhitespace(description);

  if (normalized.length < DESCRIPTION_MIN_LENGTH) {
    normalized = `${normalized} Свържете се с ${brand.brandName} за експертна консултация.`;
  }

  if (normalized.length > DESCRIPTION_MAX_LENGTH) {
    normalized = truncateAtWordBoundary(normalized, DESCRIPTION_MAX_LENGTH);
  }

  return normalized;
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
  const normalizedTitle = normalizeTitleLength(title);
  const normalizedDescription = normalizeDescriptionLength(description);

  return {
    metadataBase: new URL(brand.siteUrl),
    title: normalizedTitle,
    description: normalizedDescription,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: normalizedTitle,
      description: normalizedDescription,
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
      title: normalizedTitle,
      description: normalizedDescription,
      images: [brand.defaultOGImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

