import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'
import dummy from "/public/Rectangle.png"

const page = () => {

  const testArray = [
    { title: "PostTitle1", category: "Category1", author: "Author1", time: "0 min ago", description: "記事内容1" },
    { title: "PostTitle2", category: "Category2", author: "Author2", time: "5 min ago", description: "記事内容2" },
    { title: "PostTitle3", category: "Category3", author: "Author3", time: "10 min ago", description: "記事内容3" },
    { title: "PostTitle4", category: "Category1", author: "Author1", time: "0 min ago", description: "記事内容4" },
    { title: "PostTitle5", category: "Category2", author: "Author2", time: "5 min ago", description: "記事内容5" },
    { title: "PostTitle6", category: "Category3", author: "Author3", time: "10 min ago", description: "記事内容6" },
    { title: "PostTitle7", category: "Category7", author: "Author1", time: "0 min ago", description: "記事内容7" },
    { title: "PostTitle8", category: "Category8", author: "Author2", time: "5 min ago", description: "記事内容8" },
    { title: "PostTitle9", category: "Category9", author: "Author3", time: "10 min ago", description: "記事内容9" },
  ];

  return (
    <>
      <main className={styles.main}>

        <div className={styles.search}>
          <input type="text" placeholder="記事の検索" />
        </div>

        <div className={styles.container}>
          <ul className={styles.postWrap}>


            {testArray.map((item, index) => (
              <li key={index} className={styles.postItem}>
                <a href="">
                  <Image src={dummy} width={467} height={304} alt="" />
                  <div className={styles.postItem_inner}>
                    <div className={styles.title}>
                      <p>{item.title}</p>
                      <p>{item.category}</p>
                    </div>
                    <div className={styles.status}>
                      <p>{item.author}</p>
                      <p className={styles.time}>{item.time}</p>
                    </div>
                    <p className="description">
                      {item.description}
                    </p>
                  </div>
                </a>

              </li>
            ))}
          </ul>



          <div className={styles.pageNation}>
            <a href="" className={styles.pageNation_prev}>
              <p>← Prev Page</p>
            </a>
            <div className={styles.pageNum}>
              <div className={`${styles.active} ${styles.num}`}>
                <a href="">1</a>
              </div>
              <div className={`${styles.num}`}>
                <a href="">2</a>
              </div>
              <div className={`${styles.num}`}>
                <a href="">3</a>
              </div>

              <div className={styles.pc_only}>
                <div className={`${styles.num}`}>
                  <a href="">4</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">4</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">5</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">6</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">7</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">8</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">9</a>
                </div>
                <div className={`${styles.num}`}>
                  <a href="">10</a>
                </div>
              </div>


            </div>
            <a href="" className={styles.pageNation_next}>
              <p>Next Page →</p>
            </a>
          </div>
        </div>
      </main>

    </>
  )
}

export default page