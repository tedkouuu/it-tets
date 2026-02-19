import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/common/Reveal";
import { ServiceCard } from "@/components/common/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { createBreadcrumbSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Всички IT услуги за поддръжка, облак и киберсигурност",
  description:
    "Разгледайте пълно портфолио от IT услуги - поддръжка, мрежи, сървъри, cloud и киберсигурност. Изберете правилната услуга за вашия бизнес.",
  path: "/services",
  keywords: ["IT услуги", "управлявани услуги", "cloud", "киберсигурност"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Начало", path: "/" },
          { name: "Услуги", path: "/services" },
        ])}
      />

      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Услуги", href: "/services" },
            ]}
          />
          <h1>Професионални IT услуги за модерни компании в България</h1>
          <p>
            Изберете цялостен модел за управление на инфраструктура, сигурност и cloud
            среди. Всяка услуга е проектирана с фокус върху устойчивост, скорост и
            измерими бизнес резултати.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 55} className={styles.cardItem}>
                <ServiceCard
                  title={service.navLabel}
                  description={service.cardDescription}
                  href={`/services/${service.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Нуждаете се от съдействие при избор на услуга?"
        description="Ще анализираме текущата ви среда и ще препоръчаме най-подходящия модел - от единична услуга до пълен управляван IT абонамент."
      />
    </>
  );
}

