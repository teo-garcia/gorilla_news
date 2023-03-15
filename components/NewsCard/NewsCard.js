import styles from "./NewsCard.module.css";
import clsx from "clsx";
import Link from "next/link";

const NewsCard = (props) => {
  const { id, title, description } = props;
  return (
    <li className={clsx(styles.card, "bc-text")}>
      <Link
        href={`/${id}`}
        className={clsx(styles.link, "h-100pc d-flex fd-column jc-center")}
      >
        <h2 className={clsx(styles.title, "c-background")}>{title}</h2>
        <p className={clsx(styles.description, "c-background")}>
          {description}
        </p>
      </Link>
    </li>
  );
};

export { NewsCard };
