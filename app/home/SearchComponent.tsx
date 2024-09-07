// app/home/SearchComponent.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './home.module.css';
import searchIcon from '/public/images/search_icon.svg';
import { useRouter } from 'next/navigation';

export default function SearchComponent() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const router = useRouter();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/home?search=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBox}>
      <input
        type="text"
        placeholder="検索ワード"
        value={searchKeyword}
        onChange={handleSearchInput}
      />
      <button type="submit">
        <Image
          src={searchIcon}
          width={24}
          style={{ height: 'auto' }}
          alt="検索"
        />
      </button>
    </form>
  );
}
