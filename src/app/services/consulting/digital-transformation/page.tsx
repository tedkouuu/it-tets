import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "consulting",
  subserviceSlug: "digital-transformation",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="consulting" subserviceSlug="digital-transformation" />;
}

