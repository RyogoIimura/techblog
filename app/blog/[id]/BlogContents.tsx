import Image from "next/image";
import React, { FC } from "react";

import "./BlogContents.modules.css";
import { GetBlogType, UserType } from "@/app/utils/supabaseFunctions";

type Props = {
  blog: GetBlogType;
  thumb: string;
};

const BlogContents: FC<Props> = React.memo((props) => {
  const { blog, thumb } = props;
  return (
    <article className="blogArticle">
      <header className="flex justify-center md:justify-between">
        <h1>{blog.title}</h1>
        <div className="hidden md:block rounded-full w-24 h-24 overflow-hidden">
          <Image
            src={thumb}
            alt=""
            width="96"
            height="96"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </header>

      <div className="mt-7">
        {blog.image_path && (
          <div>
            <Image
              src={blog.image_path}
              alt=""
              width="1197"
              height="618"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        )}

        {blog.content && (
          <div
            className="content mt-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        )}
      </div>
    </article>
  );
});

BlogContents.displayName = "BlogContents";

export default BlogContents;
