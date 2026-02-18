import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("cloud");

export default function CloudPage() {
  return <ServiceStaticPage slug="cloud" />;
}

