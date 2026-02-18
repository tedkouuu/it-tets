import Link from "next/link";

import styles from "./Breadcrumbs.module.css";

export type BreadcrumbLink = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbLink[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.wrapper} aria-label="Хлебни трохи">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className={styles.item}>
              {isLast ? (
                <span className={styles.current}>{item.label}</span>
              ) : (
                <>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                  <span aria-hidden="true" className={styles.separator}>
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

