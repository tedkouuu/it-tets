"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { brand } from "@/config/brand";
import { services } from "@/data/services";

import { ServicesDropdown } from "./ServicesDropdown";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceLinks = services.map((service) => ({
    href: `/services/${service.slug}`,
    label: service.navLabel,
  }));

  const navLinks = [
    { href: "/", label: "Начало" },
    { href: "/reviews", label: "Отзиви" },
    { href: "/faq", label: "Въпроси" },
    { href: "/contact", label: "Контакти" },
  ];

  const servicesMenuItems = [
    { href: "/services", label: "Всички услуги" },
    ...serviceLinks,
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandRow}>
          <Link href="/" className={styles.brandLink}>
            <span className={styles.brandName}>{brand.brandName}</span>
            <span className={styles.brandTagline}>Управлявани IT услуги за България</span>
          </Link>
          <a href={`tel:${brand.phone}`} className={styles.phoneLink} aria-label="Телефон за връзка">
            {brand.phone}
          </a>
        </div>

        <nav className={styles.nav} aria-label="Главна навигация">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <ServicesDropdown items={servicesMenuItems} pathname={pathname} />

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

