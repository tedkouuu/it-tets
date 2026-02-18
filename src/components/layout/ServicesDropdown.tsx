"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";

import styles from "./ServicesDropdown.module.css";

type ServiceLink = {
  href: string;
  label: string;
};

type ServicesDropdownProps = {
  items: ServiceLink[];
  pathname: string;
};

const CLOSE_DELAY_MS = 320;

export function ServicesDropdown({ items, pathname }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const closeMenuWithDelay = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY_MS);
  };

  const closeImmediately = () => {
    clearCloseTimer();
    setIsOpen(false);
  };

  const focusItem = (index: number) => {
    itemRefs.current[index]?.focus();
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMenu();
      requestAnimationFrame(() => focusItem(0));
      return;
    }

    if (event.key === "Escape") {
      closeImmediately();
    }
  };

  const handleItemKeyDown = (index: number, event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem((index + 1) % items.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusItem((index - 1 + items.length) % items.length);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeImmediately();
      rootRef.current?.querySelector("button")?.focus();
    }
  };

  const handleBlur = () => {
    window.setTimeout(() => {
      const activeElement = document.activeElement;
      if (!rootRef.current?.contains(activeElement)) {
        closeImmediately();
      }
    }, 0);
  };

  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuWithDelay}
      onBlur={handleBlur}
      ref={rootRef}
    >
      <button
        type="button"
        className={`${styles.trigger} ${servicesActive ? styles.active : ""}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={listId}
        onFocus={openMenu}
        onKeyDown={handleTriggerKeyDown}
      >
        Услуги
      </button>

      <ul
        id={listId}
        className={`${styles.menu} ${isOpen ? styles.open : ""}`}
        role="menu"
        aria-label="Подменю услуги"
      >
        {items.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                tabIndex={isOpen ? 0 : -1}
                onKeyDown={(event) => handleItemKeyDown(index, event)}
                onClick={closeImmediately}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

