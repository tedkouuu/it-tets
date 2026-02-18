import Link from "next/link";

import { brand } from "@/config/brand";
import type { ServicePageData } from "@/data/services";
import type { SubserviceData } from "@/data/subservices";

import { Breadcrumbs } from "../common/Breadcrumbs";
import { CTASection } from "../common/CTASection";
import { Reveal } from "../common/Reveal";
import styles from "./SubservicePageTemplate.module.css";

type SubservicePageTemplateProps = {
  service: ServicePageData;
  subservice: SubserviceData;
};

export function SubservicePageTemplate({
  service,
  subservice,
}: SubservicePageTemplateProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Услуги", href: "/services" },
              { label: service.navLabel, href: `/services/${service.slug}` },
              {
                label: subservice.title,
                href: `/services/${service.slug}/${subservice.slug}`,
              },
            ]}
          />
          <Reveal className={styles.heroContent}>
            <h1>{subservice.title}</h1>
            <p>{subservice.summary}</p>
            <div className={styles.heroActions}>
              <a href={`tel:${brand.phone}`} className={styles.primaryButton}>
                Обадете се: {brand.phone}
              </a>
              <Link href="/contact" className={styles.secondaryButton}>
                Изпратете запитване
              </Link>
              <Link href={`/services/${service.slug}`} className={styles.backLink}>
                Обратно към {service.navLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <Reveal>
              <article className={styles.panel}>
                <h2>Какво включва услугата</h2>
                <ul>
                  {subservice.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className={styles.panel}>
                <h2>Технически акценти</h2>
                <ul>
                  {subservice.technicalFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title={`Нуждаете се от ${subservice.title.toLowerCase()}?`}
        description={`Свържете се с ${brand.brandName} за конкретен план, срокове и SLA параметри, съобразени с вашата инфраструктура.`}
      />
    </>
  );
}

