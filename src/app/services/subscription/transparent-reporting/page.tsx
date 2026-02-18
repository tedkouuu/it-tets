import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "subscription",
  subserviceSlug: "transparent-reporting",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="subscription" subserviceSlug="transparent-reporting" />;
}

