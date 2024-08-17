"use client";

import React, { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

// サイズフォーマットの登録
const Size = Quill.import("formats/size");
Size.whitelist = ["small", "normal", "large", "huge"];
Quill.register(Size, true);

function QuillEditor() {
  const [content, setContent] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  const formats = ["bold", "italic", "underline", "strike"];

  const handleFormat = (format: string) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.format(format, !quill.getFormat()[format]);
    }
  };

  const adjustFontSize = (increase: boolean) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const currentSize = quill.getFormat().size || "normal";
      const sizes = ["small", "normal", "large", "huge"];
      const currentIndex = sizes.indexOf(currentSize);

      if (increase && currentIndex < sizes.length - 1) {
        quill.format("size", sizes[currentIndex + 1]);
      } else if (!increase && currentIndex > 0) {
        quill.format("size", sizes[currentIndex - 1]);
      }
    }
  };

  return (
    <div className='flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4'>
      {/* サイドバー */}
      <aside className='w-full lg:w-[80px] order-2 lg:order-none'>
        <div className='bg-gray-300 rounded-xl p-2 h-[50px] lg:h-[500px] flex flex-row lg:flex-col justify-between items-center'>
          {/* フォーマットボタン */}
          {formats.map((format, i) => (
            <button
              key={i}
              onClick={() => handleFormat(format)}
              className='w-10 h-10 lg:w-14 lg:h-14 p-2 hover:bg-gray-400 rounded flex items-center justify-center mb-2'
            >
              {format === "bold" && <FaBold className='text-lg lg:text-xl' />}
              {format === "italic" && (
                <FaItalic className='text-lg lg:text-xl' />
              )}
              {format === "underline" && (
                <FaUnderline className='text-lg lg:text-xl' />
              )}
              {format === "strike" && (
                <FaStrikethrough className='text-lg lg:text-xl' />
              )}
            </button>
          ))}
          {/* 文字サイズ調整ボタン */}
          <button
            onClick={() => adjustFontSize(true)}
            className='w-10 h-10 lg:w-14 lg:h-14 p-2 hover:bg-gray-400 rounded flex items-center justify-center mb-2'
          >
            <FaPlus className='text-lg lg:text-xl' />
          </button>
          <button
            onClick={() => adjustFontSize(false)}
            className='w-10 h-10 lg:w-14 lg:h-14 p-2 hover:bg-gray-400 rounded flex items-center justify-center'
          >
            <FaMinus className='text-lg lg:text-xl' />
          </button>
        </div>
      </aside>
      <div className='flex-grow'>
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={{ toolbar: false }}
          formats={[...formats, "size"]}
          className='h-[500px] bg-gray-100 rounded-xl'
        />
      </div>
    </div>
  );
}

export default QuillEditor;
