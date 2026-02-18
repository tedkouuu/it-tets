import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "consulting",
  subserviceSlug: "strategic-it-planning",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="consulting" subserviceSlug="strategic-it-planning" />;
}

