import Image from "next/image";
import React, { FC } from "react";

import "./BlogContents.modules.css";

const BlogContents: FC<Record<string, never>> = React.memo(() => {
  return (
    <article className="blogArticle">
      <header className="flex justify-center md:justify-between">
        <h1>Blog Title</h1>
        <div className="hidden md:block rounded-full w-24 h-24 overflow-hidden">
          <Image
            //className="hidden md:block rounded-full"
            src="https://picsum.photos/200/300"
            alt=""
            width="96"
            height="96"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </header>
      <div className="mt-7">
        <div>
          <Image
            src="https://picsum.photos/1200/700"
            alt=""
            width="1197"
            height="618"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>

        <div className="content mt-12">
          <p>
            ここに文章が入ります。
            <br />
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
          </p>
          <p></p>
          <p>
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
          </p>
        </div>
      </div>
    </article>
  );
});

BlogContents.displayName = "BlogContents";

export default BlogContents;
