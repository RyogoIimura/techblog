"use client";


import React, { useEffect, useState } from 'react'
import styles from "./home.module.css";
import Image from 'next/image'
import dummy from '/public/images/dummy.png'
import searchIcon from "/public//images//search_icon.svg"
import { Pagenation } from '../components/Pagenation'
import { Container } from '../components/Container/Container';
import { CardItem } from '../components/CardItem/CardItem';

const Page = () => {

  const testArray = [
    { id:1, title: "PostTitle1", category: "Category1", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:2, title: "PostTitle2", category: "Category2", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:3, title: "PostTitle3", category: "Category3", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:4, title: "PostTitle4", category: "Category1", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:5, title: "PostTitle5", category: "Category2", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:6, title: "PostTitle6", category: "Category3", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:7, title: "PostTitle7", category: "Category7", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:8, title: "PostTitle8", category: "Category8", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    {id:9, title: "PostTitle9", category: "Category9", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
  ];

  return (
    <>
      <Container>
        <main className='p-4'>
          <div className={styles.searchBox}>
            <input type="text" placeholder="検索ワード" />
            <button type="submit">
              <Image src={searchIcon} width={24} style={{ height: 'auto' }} alt='' />
            </button>
          </div>

          <div className="mx-auto mt-0 mb-0">
            <ul className={styles.postWrap}>
              {testArray.map((item, index) => (
                <CardItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.time}
                  imageUrl="/images/dummy.png"
                  category={item.category}
                  author={item.author}
                  description={item.description}
                  alt="アイキャッチ"
                />

              ))}
            </ul>
            <Pagenation />
          </div>
        </main>
      </Container>

    </>
  )
}

export default Page