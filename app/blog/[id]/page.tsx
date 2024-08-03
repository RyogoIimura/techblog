import Head from "next/head";
import React from "react";
import BlogContents from "./BlogContents";

import "./page.modules.css";
import MorePosts from "./MorePosts";
import Comments from "./Comments";

const BlogView = () => {
  return (
    <>
      <Head>
        <title>Blog Title</title>
      </Head>
      <main>
        {/** メインコンテンツ */}
        <BlogContents />
        {/** その他の記事一覧 */}
        <MorePosts />
        {/** コメント一覧 */}
        <Comments />
      </main>
    </>
  );
};

export default BlogView;
