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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateScrollState = () => {
      const nextValue = window.scrollY > 6;
      setIsScrolled((previous) => (previous === nextValue ? previous : nextValue));
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandRow}>
          <Link href="/" className={styles.brandLink}>
            <span className={styles.brandName}>{brand.brandName}</span>
            <span className={styles.brandTagline}>Стратегически IT операции и NOC 24/7</span>
          </Link>

          <div className={styles.mobileActions}>
            <a
              href={`tel:${brand.phone}`}
              className={styles.phoneLink}
              aria-label="Телефон за връзка"
            >
              {brand.phone}
            </a>
            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Затвори менюто" : "Отвори менюто"}
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            >
              <span className={styles.menuIcon} />
            </button>
          </div>
        </div>

        <nav className={styles.navDesktop} aria-label="Главна навигация">
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

        <div
          id="mobile-navigation"
          className={`${styles.mobilePanel} ${isMobileMenuOpen ? styles.mobilePanelOpen : ""}`}
        >
          <nav className={styles.mobileNav} aria-label="Мобилна навигация">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ""}`}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className={`${styles.mobileServicesTrigger} ${servicesActive ? styles.mobileLinkActive : ""}`}
              aria-expanded={isMobileServicesOpen}
              onClick={() => setIsMobileServicesOpen((previous) => !previous)}
            >
              Услуги
              <span
                className={`${styles.mobileChevron} ${isMobileServicesOpen ? styles.mobileChevronOpen : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              className={`${styles.mobileServicesList} ${isMobileServicesOpen ? styles.mobileServicesListOpen : ""}`}
            >
              {servicesMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`${styles.mobileSubLink} ${pathname === item.href ? styles.mobileLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

