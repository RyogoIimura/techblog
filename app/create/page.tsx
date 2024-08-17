import dynamic from "next/dynamic";
import React from "react";

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
              <div className='mb-5'>
                <div className='w-full h-[clamp(200px,30vw,400px)] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center'>
                  <div className='my-8 text-7xl text-gray-300'>↑</div>
                  <button className='bg-blue-400 w-[clamp(100px,30vw,200px)] h-[clamp(40px,10vw,50px)] text-[clamp(12px,3vw,20px)] mb-5 rounded-full flex items-center justify-center'>
                    Upload Image
                  </button>
                </div>
              </div>
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
