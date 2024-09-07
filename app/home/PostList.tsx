// app/home/PostList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardItem } from '../components/CardItem/CardItem';
import styles from './home.module.css';
import { getAllPosts } from '../utils/supabaseFunctions';

interface Post {
  id: number;
  title: string;
  time: string;
  category: string;
  author: string;
  description: string;
}

export default function PostList() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const items = await getAllPosts();
        setPosts(items!);
        setFilteredPosts(items!);
        const total = Math.ceil(items!.length / itemsPerPage);
        setTotalPages(total);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const page = searchParams.get('page');
    const search = searchParams.get('search');

    if (page) {
      setCurrentPage(parseInt(page, 10));
    }

    if (search) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    } else {
      setFilteredPosts(posts);
      setTotalPages(Math.ceil(posts.length / itemsPerPage));
    }
  }, [searchParams, posts]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', pageNumber.toString());
    window.history.pushState({}, '', url.toString());
    setCurrentPage(pageNumber);
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
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

      <div className="pagination flex justify-between items-center max-w-md mx-auto">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`w-14 h-14 text-center flex items-center justify-center rounded-full border-2 border-black ${
              page === currentPage ? 'bg-black text-white' : 'bg-white'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}