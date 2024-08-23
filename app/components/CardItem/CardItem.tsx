import { FC } from "react";
import styles from "./carditem.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  category?: string;
  author?: string;
  description?: string;
  alt?: string | any;
  page?: string;
};

const sanitizeAndTruncate = (text: string): string => {
  // HTMLタグを除去
  const sanitizedText = text.replace(/<\/?[^>]+(>|$)/g, "");

  // 文字数を制限し、38文字以上なら...を追加
  return sanitizedText.length > 38
    ? `${sanitizedText.substring(0, 38)}...`
    : sanitizedText;
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
      <li className={styles.postItem}>
        <Link href={`/${url}/${id}`}>
          <figure>
            {imageUrl && (
              <Image src={imageUrl} alt={alt} width="400" height="100" />
            )}
          </figure>
          <div className={styles.postItem_inner}>
            <div className={`${styles.title} mb-8`}>
              <h3>{title}</h3>
              <p className={styles.txtBlue}>{category}</p>
            </div>
            <div className={styles.status}>
              <p className={styles.txtBlue}>{author}</p>
              <p className={`${styles.time} ${styles.txtBlue}`}>{date}</p>
            </div>
            <p className="description">
              {description && sanitizeAndTruncate(description)}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
};
