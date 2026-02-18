import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "consulting",
  subserviceSlug: "project-management",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="consulting" subserviceSlug="project-management" />;
}

