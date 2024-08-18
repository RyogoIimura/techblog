"use client";

import ImageUploadeSection from "@/app/create/components/ImageUploadeSection";
import dynamic from "next/dynamic";
import React, { useState } from "react";

// React-Quillを動的にインポートし、SSRを無効にする
const QuillEditor = dynamic(() => import("./components/QuillEditor"), {
  ssr: false,
});

function CreatePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* ヘッダー*/}
      <header className='bg-gray-300 h-20 sm:h-32 md:h-40 w-full'>
        ナビゲーションバー
      </header>
      {/* コンテンツエリア */}
      <div className='flex-grow container mx-auto'>
        <main className='px-4'>
          <div className='flex-grow justify-center items-center h-40'>
            <h1 className='text-gray-300 leading-normal text-center text-4xl sm:text-5xl md:text-6xl pt-4 font-bold'>
              Create Blog
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row w-full'>
            {/* メインコンテンツ */}
            <section className='flex-grow lg:ml-16 mr-0 lg:mr-4 order-1 lg:order-2 w-full'>
              {/* タイトル */}
              <div className='my-10'>
                <input
                  type='text'
                  placeholder='Title'
                  className='w-full h-12 sm:h-16 text-[clamp(36px,4.5vw,64px)] placeholder:font-bold text-gray-500 focus:outline-none'
                />
              </div>
              {/* アップロードエリア */}
              <ImageUploadeSection />
              {/* 本文エリア */}
              <div className='lg:mb-4'>
                <QuillEditor />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreatePage;
