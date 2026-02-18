import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "servers",
  subserviceSlug: "capacity-optimization",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="servers" subserviceSlug="capacity-optimization" />;
}

