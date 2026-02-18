import Link from "next/link";

import { brand } from "@/config/brand";
import type { ServicePageData } from "@/data/services";
import { subservicesByService } from "@/data/subservices";

import { Breadcrumbs } from "../common/Breadcrumbs";
import { CTASection } from "../common/CTASection";
import { Reveal } from "../common/Reveal";
import styles from "./ServicePageTemplate.module.css";

type ServicePageTemplateProps = {
  service: ServicePageData;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const subservices = subservicesByService[service.slug];

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
          <Reveal className={styles.heroContent}>
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
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2>Подуслуги</h2>
          <div className={styles.cards}>
            {subservices.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <article className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link href={`/services/${service.slug}/${item.slug}`} className={styles.cardLink}>
                    Към подуслугата
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <Reveal>
              <article className={styles.panel}>
                <h2>Основни дейности</h2>
                <ul>
                  {service.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className={styles.panel}>
                <h2>Технически акценти</h2>
                <ul>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
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

