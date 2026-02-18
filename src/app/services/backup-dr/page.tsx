import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("backup-dr");

export default function BackupDrPage() {
  return <ServiceStaticPage slug="backup-dr" />;
}

