import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "servers",
  subserviceSlug: "physical-servers-storage",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="servers" subserviceSlug="physical-servers-storage" />;
}

