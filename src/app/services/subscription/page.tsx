import type { Metadata } from "next";

import {
  getServiceMetadata,
  ServiceStaticPage,
} from "@/components/pages/ServiceStaticPage";

export const metadata: Metadata = getServiceMetadata("subscription");

export default function SubscriptionPage() {
  return <ServiceStaticPage slug="subscription" />;
}

