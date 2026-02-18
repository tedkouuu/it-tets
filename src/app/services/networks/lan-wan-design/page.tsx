import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "networks",
  subserviceSlug: "lan-wan-design",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="networks" subserviceSlug="lan-wan-design" />;
}

