import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTASection } from "@/components/common/CTASection";
import { ServiceCard } from "@/components/common/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { brand } from "@/config/brand";
import { benefits, processSteps, trustIndicators } from "@/data/content";
import { services } from "@/data/services";
import { createOrganizationSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Управлявани IT услуги в България за сигурен растеж",
  description:
    `Премиум управлявани IT услуги, cloud, мрежи и киберсигурност за компании в България. Обадете се на ${brand.phone} за бърз технически план.`,
  path: "/",
  keywords: [
    "IT услуги България",
    "управлявани IT услуги",
    "IT поддръжка",
    "киберсигурност",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Премиум IT решения за компании в България</p>
            <h1>Управлявани IT услуги, сигурност и стабилна инфраструктура</h1>
            <p className={styles.heroText}>
              Помагаме на бизнеса да работи без прекъсване с проактивна IT поддръжка,
              cloud оптимизация, надеждни мрежи и измерими SLA показатели.
            </p>
            <div className={styles.heroActions}>
              <a href={`tel:${brand.phone}`} className={styles.primaryButton}>
                Обадете се: {brand.phone}
              </a>
              <Link href="/services" className={styles.secondaryButton}>
                Разгледайте услугите
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/hero-operations.svg"
              alt="Визуализация на IT мониторинг и операции"
              width={620}
              height={430}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className="section-heading">
            <h2>Защо компаниите избират {brand.brandName}</h2>
            <p>
              Комбинираме дълбока техническа експертиза, бърз отговор при инциденти и
              стратегически подход към растежа на вашата IT среда.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <article key={benefit.title} className={styles.benefitCard}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="services-overview">
        <div className="container">
          <div className={`section-heading ${styles.servicesHeader}`}>
            <h2>Пълна гама IT услуги за модерни организации</h2>
            <p>
              От ежедневна поддръжка до киберсигурност и cloud архитектура - всяка
              услуга е разработена с фокус върху бизнес устойчивост и резултати.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.navLabel}
                description={service.cardDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className="section-heading">
            <h2>Как работим</h2>
            <p>
              Следваме ясен процес - от първичен одит до непрекъсната оптимизация и
              отчетност към управленския екип.
            </p>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <article key={step.title} className={styles.processCard}>
                <span className={styles.stepIndex}>{`0${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className="section-heading">
            <h2>Доверие и SLA показатели</h2>
            <p>
              Поставяме измерими стандарти за реакция и качествено изпълнение, за да
              имате реална увереност в ежедневните операции.
            </p>
          </div>
          <div className={styles.trustGrid}>
            {trustIndicators.map((indicator) => (
              <article key={indicator.metric} className={styles.trustCard}>
                <p className={styles.metric}>{indicator.metric}</p>
                <p>{indicator.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Искате премиум IT партньор с ясни резултати?"
        description="Свържете се с нашия екип и ще получите конкретен план за поддръжка, сигурност и мащабиране според целите на вашата компания."
      />
    </>
  );
}
