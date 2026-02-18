import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("cybersecurity");

export default function CybersecurityPage() {
  return <ServiceStaticPage slug="cybersecurity" />;
}

