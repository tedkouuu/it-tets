import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "subscription",
  subserviceSlug: "sla-guarantees",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="subscription" subserviceSlug="sla-guarantees" />;
}

