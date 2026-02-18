import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "cloud",
  subserviceSlug: "cloud-migration",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="cloud" subserviceSlug="cloud-migration" />;
}

