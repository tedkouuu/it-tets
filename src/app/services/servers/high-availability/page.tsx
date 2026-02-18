import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "servers",
  subserviceSlug: "high-availability",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="servers" subserviceSlug="high-availability" />;
}

