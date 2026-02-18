import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "cloud",
  subserviceSlug: "hybrid-cloud-architecture",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="cloud" subserviceSlug="hybrid-cloud-architecture" />;
}

