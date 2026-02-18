import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("it-support");

export default function ITSupportPage() {
  return <ServiceStaticPage slug="it-support" />;
}

