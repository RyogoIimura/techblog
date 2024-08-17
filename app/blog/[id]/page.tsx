import Head from "next/head";
import React from "react";
import BlogContents from "./BlogContents";

import "./page.modules.css";
import MorePosts from "./MorePosts";
import Comments from "./Comments";
import Header from "@/app/components/Header";
import { Container } from "@/app/components/Container/Container";

const BlogView = () => {
  return (
    <>
      <Head>
        <title>Blog Title</title>
      </Head>
      <Header page="Blog"></Header>
      <Container>
        <main>
          {/** メインコンテンツ */}
          <BlogContents />
          {/** その他の記事一覧 */}
          <MorePosts />
          {/** コメント一覧 */}
          <Comments />
        </main>
      </Container>
    </>
  );
};

export default BlogView;
