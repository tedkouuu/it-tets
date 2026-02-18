import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "it-support",
  subserviceSlug: "endpoint-management",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="it-support" subserviceSlug="endpoint-management" />;
}

