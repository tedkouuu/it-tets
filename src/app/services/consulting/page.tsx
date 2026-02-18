import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("consulting");

export default function ConsultingPage() {
  return <ServiceStaticPage slug="consulting" />;
}

