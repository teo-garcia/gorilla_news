import clsx from "clsx";
import styles from "./ErrorFallback.module.css";
import { AiFillAlert } from "react-icons/ai";

const ErrorFallback = () => {
  return (
    <main
      className={clsx(
        styles.container,
        "h-100pc d-flex fd-column ai-center jc-center"
      )}
    >
      <AiFillAlert className={clsx(styles.icon, "c-text")} />
      <h1 className={clsx(styles.title, "c-text")}>Something Bad Happened</h1>
    </main>
  );
};

export { ErrorFallback };
