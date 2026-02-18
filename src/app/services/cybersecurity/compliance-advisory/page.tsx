import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "cybersecurity",
  subserviceSlug: "compliance-advisory",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="cybersecurity" subserviceSlug="compliance-advisory" />;
}

