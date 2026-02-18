import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "backup-dr",
  subserviceSlug: "cloud-backup",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="backup-dr" subserviceSlug="cloud-backup" />;
}

