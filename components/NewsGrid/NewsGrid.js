import clsx from "clsx";
import { NewsCard } from "../NewsCard/NewsCard";
import styles from "./NewsGrid.module.css";

const NewsGrid = (props) => {
  const { news, headline } = props;
  return (
    <section className={clsx(styles.container, "d-flex fd-column jc-center")}>
      <h1 className={clsx(styles.title, "c-text")}>{headline.title}</h1>
      <p className={styles.description}>{headline.description}</p>
      <ul className={clsx(styles.list, "d-flex wrap-wrap")}>
        {news.map((newItem) => (
          <NewsCard key={newItem.id} {...newItem} />
        ))}
      </ul>
    </section>
  );
};

export { NewsGrid };
