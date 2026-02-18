import type { Metadata } from "next";

import {
  getSubserviceMetadata,
  SubserviceStaticPage,
} from "@/components/pages/SubserviceStaticPage";

export const metadata: Metadata = getSubserviceMetadata({
  serviceSlug: "backup-dr",
  subserviceSlug: "local-backup",
});

export default function Page() {
  return <SubserviceStaticPage serviceSlug="backup-dr" subserviceSlug="local-backup" />;
}

