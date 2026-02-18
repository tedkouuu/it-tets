import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { brand } from "@/config/brand";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

import "./globals.css";

const headingFont = Manrope({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: "NOC мониторинг, киберсигурност и IT инфраструктура",
    template: `%s | ${brand.brandName}`,
  },
  description:
    "GuardNOC осигурява NOC наблюдение, киберсигурност, cloud и инфраструктурни решения с ясни SLA нива и професионално изпълнение.",
  alternates: {
    canonical: brand.siteUrl,
  },
  openGraph: {
    title: "NOC мониторинг, киберсигурност и IT инфраструктура",
    description:
      "GuardNOC осигурява NOC наблюдение, киберсигурност, cloud и инфраструктурни решения с ясни SLA нива и професионално изпълнение.",
    url: brand.siteUrl,
    siteName: brand.brandName,
    locale: "bg_BG",
    images: [brand.defaultOGImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOC мониторинг, киберсигурност и IT инфраструктура",
    description:
      "GuardNOC осигурява NOC наблюдение, киберсигурност, cloud и инфраструктурни решения с ясни SLA нива и професионално изпълнение.",
    images: [brand.defaultOGImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
