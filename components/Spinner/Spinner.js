import clsx from "clsx";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={clsx(styles.wrapper, "d-flex jc-center ai-center")}>
      <div className={styles.spinner} />
    </div>
  );
};

export { Spinner };
