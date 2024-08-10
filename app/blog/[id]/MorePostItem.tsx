import Image from "next/image";
import React, { FC } from "react";

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

type MorePosts = Pick<PostsType, "image_path" | "title">;

const MorePostItem: FC<MorePosts> = React.memo((props) => {
  const { image_path, title } = props;
  return (
    <article>
      <Image
        src={image_path}
        alt=""
        width="333"
        height="166"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <h3 className="font-bold">{title}</h3>
    </article>
  );
});

MorePostItem.displayName = "MorePost";

export default MorePostItem;
