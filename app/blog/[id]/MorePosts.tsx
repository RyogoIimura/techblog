import React, { FC } from "react";

import MorePostItem from "./MorePostItem";
import "./MorePosts.modules.css";

type PostsType = {
  id: string;
  user_id: string;
  category_id: string;
  title: string;
  content: string;
  image_path: string;
  created_at: EpochTimeStamp;
  updated_at: EpochTimeStamp;
};

type MorePosts = Pick<PostsType, "id" | "image_path" | "title">;

// ダミー記事
const samplePosts: Array<MorePosts> = [
  {
    id: "1",
    image_path: "https://picsum.photos/1200/700",
    title: "Post Title",
  },
  {
    id: "2",
    image_path: "https://picsum.photos/1200/700",
    title: "Post Title",
  },
  {
    id: "3",
    image_path: "https://picsum.photos/1200/700",
    title: "Post Title",
  },
];

const MorePosts: FC<Record<string, never>> = React.memo(() => {
  return (
    <section className="morePosts">
      <h2 className="text-2xl">More Posts</h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-40 mt-7">
        {samplePosts.map((post) => (
          <MorePostItem
            key={post.id}
            image_path={post.image_path}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
});

MorePosts.displayName = "BlogMorePosts";

export default MorePosts;
