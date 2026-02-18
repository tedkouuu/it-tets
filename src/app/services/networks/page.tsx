import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("networks");

export default function NetworksPage() {
  return <ServiceStaticPage slug="networks" />;
}

