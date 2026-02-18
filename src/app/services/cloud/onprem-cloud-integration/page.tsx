import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "cloud",
  subserviceSlug: "onprem-cloud-integration",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="cloud" subserviceSlug="onprem-cloud-integration" />;
}

