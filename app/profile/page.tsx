"use client";
import Head from "next/head";
import React from "react";
import { Container } from "../components/Container/Container";
import Header from "../components/Header";
import { CardItem } from "../components/CardItem/CardItem";
import { getLabelTime } from "../utils/dateFormat";
import styles from "../home/home.module.css";
// import "./profile.modules.css";
// import { Pagenation } from "../components/Pagenation";

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

const page = () => {
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
            <div className="mx-auto mt-8 md:mt-20 mb-0">
              <ul className={styles.postWrap}>
                {testArray.map((item, index) => (
                  <CardItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={getLabelTime(item.time)}
                    imageUrl="/images/dummy.png"
                    category={item.category}
                    author={item.author}
                    description={item.description}
                    alt="アイキャッチ"
                    page="create"
                  />
                ))}
              </ul>
            </div>
            {/* <Pagenation /> */}
          </article>
        </main>
      </Container>
    </>
  );
};

export default page;
