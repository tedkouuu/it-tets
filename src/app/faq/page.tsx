import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/common/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/data/content";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Често задавани въпроси за IT поддръжка и SLA услуги",
  description:
    "Прегледайте отговори за IT поддръжка, цени, SLA, време за реакция, onboarding и сигурност. Получете яснота преди да стартирате партньорство.",
  path: "/faq",
  keywords: ["FAQ IT поддръжка", "SLA въпроси", "цени IT услуги", "onboarding"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={createFaqSchema(faqItems)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Начало", path: "/" },
          { name: "Често задавани въпроси", path: "/faq" },
        ])}
      />

      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Често задавани въпроси", href: "/faq" },
            ]}
          />
          <Reveal>
            <h1>Често задавани въпроси за IT услуги и поддръжка</h1>
            <p>
              Подготвихме практични отговори, които помагат да вземете информирано
              решение за поддръжка, сигурност и дългосрочна IT стратегия.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.list}>
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={index * 65}>
                <details className={styles.item}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Имате допълнителен въпрос за вашата IT среда?"
        description="Свържете се с нас за конкретна консултация по SLA, сигурност, cloud миграция или абонаментна поддръжка."
      />
    </>
  );
}

