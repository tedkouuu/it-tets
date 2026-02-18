"use client";

import { useEffect, useState } from "react";

import styles from "./ScrollToTop.module.css";

const SCROLL_THRESHOLD = 500;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Връщане в началото"
      className={styles.button}
      onClick={handleClick}
    >
      Нагоре
    </button>
  );
}

