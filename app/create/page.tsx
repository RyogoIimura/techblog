"use client";

import ImageUploadeSection from "@/app/create/components/ImageUploadeSection";
import { supabase } from "@/app/utils/supabase";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// React-Quillを動的にインポートし、SSRを無効にする
const QuillEditor = dynamic(() => import("./components/QuillEditor"), {
  ssr: false,
});

function CreatePage() {
  // タイトル、本文、画像のURLを管理するステート
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 画像がアップロードされたときに呼ばれるコールバック関数
  const handleImageUpload = (url: string) => {
    setImageUrl(url);
  };

  // 投稿をデータベースに保存する処理
  const handleSavePost = async () => {
    if (!title || !content || !imageUrl) {
      setError("すべてのフィールドを入力してください。");
      return;
    }

    const { error } = await supabase.from("posts").insert([
      {
        id: uuidv4(),
        user_id: 1, // TODO:ユーザーIDは仮で1を設定（後で実際のユーザーIDを取得するように変更）
        category_id: 1, // TODO:カテゴリーIDについても別途実装
        title: title,
        content: content,
        image_path: imageUrl,
      },
    ]);

    if (error) {
      setError(`保存に失敗しました: ${error.message}`);
    } else {
      setError(null);
      alert("投稿が保存されました！");
      // 投稿が保存されたらフォームをクリア
      setTitle("");
      setContent("");
      setImageUrl(null);
    }
  };

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
                  value={title}
                  placeholder='Title'
                  onChange={(e) => setTitle(e.target.value)}
                  className='w-full h-12 sm:h-16 text-[clamp(36px,4.5vw,64px)] placeholder:font-bold text-gray-500 focus:outline-none'
                />
              </div>
              {/* アップロードエリア */}
              {/* URLを設定 */}
              <ImageUploadeSection onImageUpload={handleImageUpload} />
              {/* 本文エリア */}
              <div className='lg:mb-4'>
                {/* 本文を設定 */}
                <QuillEditor content={content} setContent={setContent} />
              </div>
              <div className='flex justify-end'>
                {/* TODO:ボタンは別途共通コンポーネントを採用 */}
                <button
                  onClick={handleSavePost}
                  className='bg-blue-500 text-white px-4 py-2 rounded'
                >
                  Save Post
                </button>
              </div>
              {error && <p className='text-red-500 mt-2'>{error}</p>}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreatePage;
