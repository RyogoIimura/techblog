import { FC, ReactNode } from 'react';
import styles from './carditem.module.css'
import Image from 'next/image';

type Props = {
  id?: number;
  title: string;
  date: string;
  imageUrl: string;
  category?: string;
  author?: string;
  description?: string;
  alt?: string | any;
}


export const CardItem: FC<Props> = ((props) => {
  const { id, imageUrl, alt, title, date, category, author, description } = props;

  return (
    <>
      <li key={id} className={styles.postItem}>
        <a href="">
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
            <p className="description">
              {description}
            </p>
          </div>
        </a>
      </li>

    </>
  )

})