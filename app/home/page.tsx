"use client"; // これをファイルの最上部に追加


import React, { useEffect, useState } from 'react'
import styles from "./home.module.css";
import Image from 'next/image'
import dummy from '/public/images/dummy.png'
import searchIcon from "/public//images//search_icon.svg"
import {Pagenation} from '../components/Pagenation'

const Page = () => {

  const testArray = [
    { title: "PostTitle1", category: "Category1", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
  { title: "PostTitle2", category: "Category2", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle3", category: "Category3", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle4", category: "Category1", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle5", category: "Category2", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle6", category: "Category3", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle7", category: "Category7", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle8", category: "Category8", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { title: "PostTitle9", category: "Category9", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
  ];

  return (
    <>
      <main className='p-4'>
        <div className={styles.searchBox}>
          <input type="text" placeholder="検索ワード" />
          <button type="submit">
            {/* <i className={styles.fa-search}></i> */}
            <Image src={searchIcon} width={24} height={24} alt='' />
          </button>
        </div>

        <div className="mx-auto mt-0 mb-0">
          <ul className={styles.postWrap}>


            {testArray.map((item, index) => (
              <li key={index} className={styles.postItem}>
                <a href="">
                  <Image src={dummy} width={467} height={304} alt="" />
                  <div className={styles.postItem_inner}>
                    <div className={`${styles.title} mb-8`}>
                      <h3>{item.title}</h3>
                      <p className={styles.txtBlue}>{item.category}</p>
                    </div>
                    <div className={styles.status}>
                      <p className={styles.txtBlue}>{item.author}</p>
                      <p className={`${styles.time} ${styles.txtBlue}`}>{item.time}</p>
                    </div>
                    <p className="description">
                      {item.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <Pagenation/>
        </div>

        <p className="mb-20">テスト</p>

      </main>

    </>
  )
}

export default Page