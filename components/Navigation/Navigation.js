"use client";

import styles from "./Navigation.module.css";
import clsx from "clsx";
import { GiGorilla } from "react-icons/gi";
import Link from "next/link";

const Navigation = (props) => {
  const { title } = props;

  return (
    <nav className={clsx(styles.nav, "bc-secondary w-100vw d-flex ai-center")}>
      <Link href="/" className={clsx(styles.link, "d-flex ai-center h-100pc")}>
        <GiGorilla className={clsx(styles.icon, "c-background")} />
        <span className={clsx(styles.title, "c-background fw-bold")}>
          {title}
        </span>
      </Link>
    </nav>
  );
};

export { Navigation };
