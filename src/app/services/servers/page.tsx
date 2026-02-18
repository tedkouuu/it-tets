import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("servers");

export default function ServersPage() {
  return <ServiceStaticPage slug="servers" />;
}

