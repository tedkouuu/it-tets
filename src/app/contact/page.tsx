import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Reveal } from "@/components/common/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { brand } from "@/config/brand";
import { createBreadcrumbSchema } from "@/lib/jsonld";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Контакти за IT поддръжка, cloud и киберсигурност",
  description:
    `Свържете се с екипа ни за IT поддръжка, инфраструктура и киберсигурност. Обадете се на ${brand.phone} или изпратете запитване за конкретен план.`,
  path: "/contact",
  keywords: ["контакти IT поддръжка", "IT услуги телефон", "SLA консултация"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Начало", path: "/" },
          { name: "Контакти", path: "/contact" },
        ])}
      />

      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Контакти", href: "/contact" },
            ]}
          />
          <Reveal>
            <h1>Свържете се с нас за премиум IT решение</h1>
            <p>
              Опишете бизнес нуждите си и ще получите експертна консултация, ясни
              следващи стъпки и реалистичен график за изпълнение.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <Reveal>
            <aside className={styles.contactCard}>
              <h2>Бърз контакт</h2>
              <p>
                За приоритетно обслужване и техническа консултация, обадете се директно
                на нашия екип.
              </p>
              <a href={`tel:${brand.phone}`} className={styles.phone}>
                {brand.phone}
              </a>
              <div className={styles.points}>
                <p>Работим с компании от цяла България.</p>
                <p>Възможност за абонаментни и проектни модели.</p>
                <p>Фокус върху сигурност, непрекъсваемост и резултати.</p>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={120}>
            <article className={styles.formCard}>
              <h2>Изпратете запитване</h2>
              <p className={styles.formIntro}>
                Въведете име, контакт и кратко описание. Ще се свържем с вас с конкретни
                предложения за действие.
              </p>
              <ContactForm />
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

