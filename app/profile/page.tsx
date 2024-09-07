import Head from "next/head";
import React from "react";
import { Container } from "../components/Container/Container";
import Header from "../components/Header";
import { CardItem } from "../components/CardItem/CardItem";
import { getFormatLabelTime, getLabelTime } from "../utils/dateFormat";
import styles from "../home/home.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import { supabase } from "../utils/supabase";

const testArray = [
  {
    id: 1,
    title: "PostTitle1",
    category: "Category1",
    author: "Author1",
    time: new Date(),
    description:
      "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります",
  },
  {
    id: 2,
    title: "PostTitle2",
    category: "Category2",
    author: "Author2",
    time: new Date(new Date().setMinutes(new Date().getMinutes() - 5)),
    description:
      "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります",
  },
  {
    id: 3,
    title: "PostTitle3",
    category: "Category3",
    author: "Author3",
    time: new Date(new Date().setMinutes(new Date().getMinutes() - 10)),
    description:
      "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります",
  },
  {
    id: 4,
    title: "PostTitle4",
    category: "Category1",
    author: "Author1",
    time: new Date(),
    description:
      "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります",
  },
  {
    id: 5,
    title: "PostTitle5",
    category: "Category2",
    author: "Author2",
    time: new Date(new Date().setMinutes(new Date().getMinutes() - 5)),
    description:
      "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります",
  },
  {
    id: 6,
    title: "PostTitle6",
    category: "Category3",
    author: "Author3",
    time: new Date(new Date().setMinutes(new Date().getMinutes() - 10)),
    description:
      "ここに記事が入りますここに記事が入りますここに記事が入りますここに記事が入ります",
  },
];

type ProfilePostType = {
  id: string;
  title: string;
  content: string;
  image_path: string;
  created_at: string;
};

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    notFound();
  }
  const name = session.user?.name;
  if (!name) {
    notFound();
  }
  const { data: user } = await supabase
    .from("User")
    .select("id")
    .eq("name", name)
    .single();

  const getPosts = async (
    id: string
  ): Promise<{ data: Array<ProfilePostType> | null }> => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", id)
      .order("created_at", { ascending: false });

    return { data };
  };
  const { data: posts } = await getPosts(user?.id);
  console.log(posts);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Header page="Profile"></Header>
      <Container>
        <main>
          <article className="profile">
            <h1 className=" text-gray-300 leading-normal text-center text-4xl sm:text-5xl md:text-6xl pt-4 font-bold">
              Your Post
            </h1>
            {posts && (
              <div className="mx-auto mt-8 md:mt-20 mb-0">
                <ul className={styles.postWrap}>
                  {posts.map((post) => {
                    console.log(post.created_at);
                    return (
                      <CardItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={getFormatLabelTime(post.created_at)}
                        imageUrl={post.image_path}
                        category=""
                        author={name}
                        description={post.content}
                        alt="アイキャッチ"
                        page="create"
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </article>
        </main>
      </Container>
    </>
  );
};

export default page;
