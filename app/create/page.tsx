"use client";
import React, { useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import ReactQuill, { Quill } from "react-quill";

// サイズフォーマットの登録
const Size = Quill.import("formats/size");
Size.whitelist = ["small", "normal", "large", "huge"];
Quill.register(Size, true);

function CreatePage() {
  const [content, setContent] = useState("");
  // ReactQuillコンポーネントへの参照を取得
  const quillRef = useRef<ReactQuill>(null);

  const formats = ["bold", "italic", "underline", "strike"];

  // アイコンを押下した際にフォーマットを適用する処理
  const handleFormat = (format: string) => {
    if (quillRef.current) {
      // Quillエディタのインスタンスを取得
      const quill = quillRef.current.getEditor();
      quill.format(format, !quill.getFormat()[format]);
    }
  };

  // フォントサイズを調整する処理
  const adjustFontSize = (increase: boolean) => {
    if (quillRef.current) {
      // Quillエディタのインスタンスを取得
      const quill = quillRef.current.getEditor();
      // 現在選択されているテキストのサイズを取得（デフォルトは"nomal"）
      const currentSize = quill.getFormat().size || "normal";
      const sizes = ["small", "normal", "large", "huge"];
      const currentIndex = sizes.indexOf(currentSize);

      // フォントサイズを変更する処理
      if (increase && currentIndex < sizes.length - 1) {
        quill.format("size", sizes[currentIndex + 1]);
      } else if (!increase && currentIndex > 0) {
        quill.format("size", sizes[currentIndex - 1]);
      }
    }
  };

  return (
    <div className='min-h-screen flex flex-col'>
      {/* ヘッダー*/}
      {/* TODO:ナビゲーションバーコンポーネントに差し替え */}
      <header className='bg-gray-300 h-20 sm:h-32 md:h-40 w-full'>
        ナビゲーションバー
      </header>
      {/* コンテンツエリア */}
      <div className='flex-grow container mx-auto'>
        <main className='px-4'>
          <div className='flex-grow justify-center items-center h-40'>
            <h1 className=' text-gray-300 leading-normal text-center text-4xl sm:text-5xl md:text-6xl pt-4 font-bold'>
              Create Blog
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row w-full'>
            {/* サイドバー */}
            <aside className='w-full lg:w-[120px] lg:pt-[60px] order-2 lg:order-none'>
              <div className='bg-gray-300 rounded-xl p-2 h-[50px] lg:h-[600px] flex flex-row lg:flex-col justify-between items-center'>
                {/* フォーマットボタン */}
                {formats.map((format, i) => (
                  <button
                    key={i}
                    onClick={() => handleFormat(format)}
                    className='w-12 h-12 lg:w-16 lg:h-16 p-2 hover:bg-gray-400 rounded flex items-center justify-center'
                  >
                    {format === "bold" && (
                      <FaBold className='text-xl lg:text-2xl' />
                    )}
                    {format === "italic" && (
                      <FaItalic className='text-xl lg:text-2xl' />
                    )}
                    {format === "underline" && (
                      <FaUnderline className='text-xl lg:text-2xl' />
                    )}
                    {format === "strike" && (
                      <FaStrikethrough className='text-xl lg:text-2xl' />
                    )}
                  </button>
                ))}
                {/* 文字サイズ調整ボタン */}
                <button
                  onClick={() => adjustFontSize(true)}
                  className='w-12 h-12 lg:w-16 lg:h-16 p-2 hover:bg-gray-400 rounded flex items-center justify-center'
                >
                  <FaPlus className='text-xl lg:text-2xl' />
                </button>
                <button
                  onClick={() => adjustFontSize(false)}
                  className='w-12 h-12 lg:w-16 lg:h-16 p-2 hover:bg-gray-400 rounded flex items-center justify-center'
                >
                  <FaMinus className='text-xl lg:text-2xl' />
                </button>
              </div>
            </aside>
            {/* メインコンテンツ */}
            <section className='flex-grow lg:ml-16 mr-0 lg:mr-4 order-1 lg:order-2 w-full'>
              {/* タイトル */}
              <div className='my-10'>
                <input
                  type='text'
                  placeholder='Title'
                  className='w-full h-12 sm:h-16 text-[clamp(36px,4.5vw,64px)] placeholder:font-bold text-gray-500 focus:outline-none '
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
                <ReactQuill
                  ref={quillRef}
                  value={content}
                  onChange={setContent}
                  modules={{ toolbar: false }}
                  formats={[...formats, "size"]}
                  className='h-[500px] mb-1 bg-gray-100 rounded-xl'
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreatePage;
