"use client";
import styles from "./NewsDetail.module.css";
import clsx from "clsx";
import Image from "next/image";
import { useState, useTransition } from "react";
import { FaHome, FaLongArrowAltLeft, FaThumbsUp } from "react-icons/fa";
import { editNew } from "../../utils/fakeAPI";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NewsDetail = (props) => {
  const { title, content, cover, likes } = props;
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();
  const likeButtonIsDisabled = isFetching || isPending;

  const onClick = async () => {
    setIsFetching(true);
    await editNew({ ...props, likes: likes + 1 });
    setIsFetching(false);
    startTransition(() => router.refresh());
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.coverWrapper}>
        <Image alt={title} src={cover} fill />
      </div>
      <div className={styles.contentWrapper}>
        <Link href="/" className={clsx(styles.backTo, "d-flex ai-end c-text")}>
          <FaHome className={clsx(styles.backToIcon, "c-text")} />
          Back to home
        </Link>
        <h1 className={clsx(styles.title, "c-text w-100pc")}>{title}</h1>
        {content?.map((contentItem, index) => (
          <p key={index} className={styles.content}>
            {contentItem}
          </p>
        ))}
        <div className={clsx(styles.likesDetail, "d-flex ai-center")}>
          <button
            className={clsx(styles.button, "bc-secondary")}
            aria-label="Like this new"
            onClick={onClick}
            disabled={likeButtonIsDisabled}
          >
            <FaThumbsUp
              className={clsx(styles.icon, "c-background h-100pc w-100pc")}
            />
          </button>
          <p>{likes} people liked this new</p>
        </div>
      </div>
    </section>
  );
};

export { NewsDetail };
