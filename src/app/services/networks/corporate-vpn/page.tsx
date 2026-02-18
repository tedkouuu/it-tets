import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "networks",
  subserviceSlug: "corporate-vpn",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="networks" subserviceSlug="corporate-vpn" />;
}

