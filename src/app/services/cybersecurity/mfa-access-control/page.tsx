import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "cybersecurity",
  subserviceSlug: "mfa-access-control",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="cybersecurity" subserviceSlug="mfa-access-control" />;
}

