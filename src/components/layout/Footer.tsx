import Link from "next/link";

import { brand } from "@/config/brand";
import { services } from "@/data/services";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <h2 className={styles.heading}>{brand.brandName}</h2>
          <p>{brand.shortDescription}</p>
          <a href={`tel:${brand.phone}`} className={styles.phone}>
            Телефон: {brand.phone}
          </a>
        </div>

        <div>
          <h3 className={styles.subheading}>Навигация</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/">Начало</Link>
            </li>
            <li>
              <Link href="/services">Услуги</Link>
            </li>
            <li>
              <Link href="/reviews">Отзиви</Link>
            </li>
            <li>
              <Link href="/faq">Често задавани въпроси</Link>
            </li>
            <li>
              <Link href="/contact">Контакти</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.subheading}>Ключови услуги</h3>
          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>
            {new Date().getFullYear()} {brand.legalName}. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}

