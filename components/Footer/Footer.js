"use client";

import clsx from "clsx";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const { description } = props;

  return (
    <footer
      className={clsx(styles.footer, "bc-secondary d-flex ai-center jc-center")}
    >
      <p className={clsx(styles.text, "c-background")}>{description}</p>
    </footer>
  );
};

export { Footer };
