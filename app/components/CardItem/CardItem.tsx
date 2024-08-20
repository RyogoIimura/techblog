import { FC } from "react";
import styles from "./carditem.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id?: number;
  title: string;
  date: string;
  imageUrl: string;
  category?: string;
  author?: string;
  description?: string;
  alt?: string | any;
  page?: string;
};

export const CardItem: FC<Props> = (props) => {
  const {
    id,
    imageUrl,
    alt,
    title,
    date,
    category,
    author,
    description,
    page,
  } = props;
  const url = page || "blog";
  return (
    <>
      <li key={id} className={styles.postItem}>
        <Link href={`/${url}/${id}`}>
          <Image src={imageUrl} alt={alt} width="400" height="100" />
          <div className={styles.postItem_inner}>
            <div className={`${styles.title} mb-8`}>
              <h3>{title}</h3>
              <p className={styles.txtBlue}>{category}</p>
            </div>
            <div className={styles.status}>
              <p className={styles.txtBlue}>{author}</p>
              <p className={`${styles.time} ${styles.txtBlue}`}>{date}</p>
            </div>
            <p className="description">{description}</p>
          </div>
        </Link>
      </li>
    </>
  );
};
