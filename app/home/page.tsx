"use client";


import React, { useEffect, useState } from 'react'
import styles from "./home.module.css";
import Image from 'next/image'
import dummy from '/public/images/dummy.png'
import searchIcon from "/public//images//search_icon.svg"
import { Pagenation } from '../components/Pagenation'
import { Container } from '../components/Container/Container';
import { CardItem } from '../components/CardItem/CardItem';



type Props = {
  currentPage: number;
  limit: number;
  count: number;
  path: string
}

const Page = () => {

  const testArray = [
    { id: 1, title: "PostTitle1", category: "Category1", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { id: 2, title: "PostTitle2", category: "Category2", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { id: 3, title: "PostTitle3", category: "Category3", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },


    { id: 4, title: "PostTitle4", category: "Category1", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { id: 5, title: "PostTitle5", category: "Category2", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { id: 6, title: "PostTitle6", category: "Category3", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },


    { id: 7, title: "PostTitle7", category: "Category7", author: "Author1", time: "0 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { id: 8, title: "PostTitle8", category: "Category8", author: "Author2", time: "5 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
    { id: 9, title: "PostTitle9", category: "Category9", author: "Author3", time: "10 min ago", description: "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります" },
  ];



  const itemsPerPage = 3; // 1ページに表示するアイテム数
  const [currentPage, setCurrentPage] = useState(1);

  // 表示するページのアイテムを計算
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testArray.slice(indexOfFirstItem, indexOfLastItem);

  // 全ページ数の計算
  const totalPages = Math.ceil(testArray.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(`${pageNumber}`);
  };



  return (
    <>
      <Container>
        <main className='p-4'>
          <div className={styles.searchBox}>
            <input type="text" placeholder="検索ワード" />
            <button type="submit">
              <Image src={searchIcon} width={24} style={{ height: 'auto' }} alt='' />
            </button >
          </div>

          <div className="mx-auto mt-0 mb-0">
            <ul className={styles.postWrap}>
              {currentItems.map((item) => (
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
            {/* <Pagenation /> */}
          </div>

          <div className='flex justify-between items-center max-w-xs		mx-auto'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`w-14 h-14 text-center flex items-center justify-center rounded-full border-2 border-black ${
                  currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-black'
                }`}
                onClick={() => handleClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>
      </Container>

    </>
  )
}

export default Page