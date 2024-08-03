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
        <BlogContents />
        <MorePosts />
        <Comments />
      </main>
    </>
  );
};

export default BlogView;
