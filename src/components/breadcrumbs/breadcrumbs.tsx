import { BreadcrumbsProps } from "./breadcrumbs.types";
import styles from "./breadcrumbs.module.scss";
import Link from "next/link";

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumb">
      <div className={styles.breadcrumbs}>
        {items.map((item, index) => (
          <Link key={index} className={styles.item} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
