import React from "react";

import "./page.modules.css";
import MorePosts from "./MorePosts";
import Comments from "./Comments";
import Header from "@/app/components/Header";
import { Container } from "@/app/components/Container/Container";
import { getBlog, getPostComments } from "@/app/utils/supabaseFunctions";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogContents from "./BlogContents";
import BlogCommentsProvider from "./BlogCommentsProvider";

type PageParams = {
  params: { id: string };
};

export const revalidate = 0;

const getThisBlogData = async (id: string) => {
  const { data } = await getBlog(id);
  return { data };
};

export async function generateMetadata(params: PageParams): Promise<Metadata> {
  // メタデータ（タイトル）設定
  const { id } = params.params;
  const { data } = await getThisBlogData(id); // 記事データ取得

  if (!data) {
    return { title: "Not Found" };
  }

  return {
    title: data.title,
  };
}

const page = async (params: PageParams) => {
  const { id } = params.params;
  const { data: getBlogData } = await getBlog(id); // 記事データ取得
  if (!getBlogData) {
    notFound();
  }
  const { data: postComments } = await getPostComments(id); // 記事に紐づいたコメントデータ取得
  const { user_id } = getBlogData;
  return (
    <>
      <Header page="Blog"></Header>
      <Container>
        <main>
          {/** メインコンテンツ */}
          <BlogContents blog={getBlogData} />
          {/** その他の記事一覧 */}
          <MorePosts user_id={user_id} />
          {/** コメント一覧 */}
          <BlogCommentsProvider>
            <Comments post_id={id} postComments={postComments} />
          </BlogCommentsProvider>
        </main>
      </Container>
    </>
  );
};

export default page;
