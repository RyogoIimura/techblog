"use client";

import React, { useEffect, useState } from 'react'
import styles from "./home.module.css";
import Image from 'next/image'
import dummy from '/public/images/dummy.png'
import searchIcon from "/public//images//search_icon.svg"
import { Container } from '../components/Container/Container';
import { CardItem } from '../components/CardItem/CardItem';
import { useSearchParams } from 'next/navigation';




interface Post {
  id: number;
  title: string;
  time: string;
  category: string;
  author: string;
  description: string;
}

const Page = () => {

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();


  // 記事の取得
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/dummy.json');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Post[] = await res.json();
        setPosts(data);

        const total = Math.ceil(data.length / itemsPerPage);
        setTotalPages(total);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);


  // URLパラメーターから現在のページ番号を取得
  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [searchParams]);


  // 表示するページのアイテムを計算
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);


  // ページ変更のfunction
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    // URL のクエリパラメーターを更新
    const url = new URL(window.location.href);
    url.searchParams.set('page', pageNumber.toString());
    window.history.pushState({}, '', url.toString());
  };

  // ページネーション
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);


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
                  alt="サムネイル"
                />
              ))}
            </ul>
          </div>

          <div className="pagination flex justify-between items-center  max-w-md mx-auto">
            <button
              // カレントページが1の時disabled
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
            {pages.map((page) => (
              <button
                key={page}
                className={`w-14 h-14 text-center flex items-center justify-center rounded-full border-2 border-black ${page === currentPage ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handlePageChange(page)}
              >{page}</button>
            ))}
            <button
              // カレントページとページの総数が同じ時disabled
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >Next</button>
          </div>

        </main>
      </Container>
    </>
  )
}

export default Page