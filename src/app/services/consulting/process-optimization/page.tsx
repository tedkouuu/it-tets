import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "consulting",
  subserviceSlug: "process-optimization",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="consulting" subserviceSlug="process-optimization" />;
}

