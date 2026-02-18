import Link from "next/link";

import { brand } from "@/config/brand";

import styles from "./CTASection.module.css";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className={styles.section} aria-label="Покана за действие">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.actions}>
            <a href={`tel:${brand.phone}`} className={styles.primaryButton}>
              Обадете се: {brand.phone}
            </a>
            <Link href="/contact" className={styles.secondaryButton}>
              Изпратете запитване
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

