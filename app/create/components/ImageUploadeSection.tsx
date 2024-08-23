"use client";

import useImageUploder from "@/app/hooks/useImageUploder";
import React, { useEffect, useRef } from "react";

type ImageUploadeSectionProps = {
  onImageUpload: (url: string) => void;
};

export default function ImageUploadeSection({
  onImageUpload,
}: ImageUploadeSectionProps) {
  // 画像アップロードのカスタムフックを使用
  const { uploading, error, handleFileChange, uploadedImageUrl } =
    useImageUploder();

  // ボタンクリック時にファイル選択ダイアログを開くためにinput要素を参照
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 画像URLが変更されたときに親コンポーネントに通知
  useEffect(() => {
    if (uploadedImageUrl) {
      onImageUpload(uploadedImageUrl);
    }
  }, [uploadedImageUrl, onImageUpload]);

  console.log(uploading);

  return (
    <div className='mb-5'>
      <div className='w-full h-[clamp(200px,30vw,400px)] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center'>
        <div className='my-8 text-7xl text-gray-300'>↑</div>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        {/* {file && <p className='mb-2'>Selected file: {file.name}</p>} */}
        <button
          onClick={handleButtonClick}
          disabled={uploading}
          className='bg-blue-400 w-[clamp(100px,30vw,200px)] h-[clamp(40px,10vw,50px)] text-[clamp(12px,3vw,20px)] mb-5 rounded-full flex items-center justify-center'
        >
          {uploading ? "uploading..." : "Upload Image"}
        </button>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </div>
    </div>
  );
}
