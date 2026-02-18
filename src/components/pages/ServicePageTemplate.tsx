import Link from "next/link";

import { brand } from "@/config/brand";
import type { ServicePageData } from "@/data/services";

import { Breadcrumbs } from "../common/Breadcrumbs";
import { CTASection } from "../common/CTASection";
import styles from "./ServicePageTemplate.module.css";

type ServicePageTemplateProps = {
  service: ServicePageData;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Услуги", href: "/services" },
              { label: service.navLabel, href: `/services/${service.slug}` },
            ]}
          />
          <div className={styles.heroContent}>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
            <div className={styles.heroActions}>
              <a href={`tel:${brand.phone}`} className={styles.primaryButton}>
                Обадете се: {brand.phone}
              </a>
              <Link href="/contact" className={styles.secondaryButton}>
                Заявете консултация
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2>Подуслуги</h2>
          <div className={styles.cards}>
            {service.subservices.map((item) => (
              <article key={item} className={styles.card}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <article className={styles.panel}>
              <h2>Основни дейности</h2>
              <ul>
                {service.activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.panel}>
              <h2>Технически акценти</h2>
              <ul>
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Нуждаете се от надежден технически партньор?"
        description="Свържете се с нас за конкретен план, ясен SLA модел и професионално управление на вашата IT среда."
      />
    </>
  );
}

