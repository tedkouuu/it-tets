import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/common/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { reviews } from "@/data/content";
import { createBreadcrumbSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Отзиви за IT поддръжка и управлявани услуги в България",
  description:
    "Вижте реалистични клиентски отзиви за IT поддръжка, cloud решения и киберсигурност. Доверете се на екип с проактивен подход и ясни SLA резултати.",
  path: "/reviews",
  keywords: ["отзиви IT услуги", "управлявани услуги мнения", "IT поддръжка"],
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Начало", path: "/" },
          { name: "Отзиви", path: "/reviews" },
        ])}
      />

      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Отзиви", href: "/reviews" },
            ]}
          />
          <Reveal>
            <h1>Какво споделят нашите клиенти за работата с нас</h1>
            <p>
              Фирмите, с които работим, ценят комбинацията от бърза реакция,
              стратегическо планиране и устойчиви технологични решения.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {reviews.map((review, index) => (
              <Reveal key={`${review.name}-${review.company}`} delay={index * 70}>
                <article className={styles.card}>
                  <div className={styles.stars} aria-label="Оценка 5 от 5">
                    {"★★★★★"}
                  </div>
                  <p className={styles.quote}>&bdquo;{review.quote}&ldquo;</p>
                  <div className={styles.author}>
                    <p className={styles.name}>{review.name}</p>
                    <p>{review.role}</p>
                    <p>{review.company}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Искате същото ниво на надеждност за вашия бизнес?"
        description="Обсъдете с нас как да изградим стабилна, сигурна и мащабируема IT среда, която подкрепя растежа на компанията ви."
      />
    </>
  );
}

