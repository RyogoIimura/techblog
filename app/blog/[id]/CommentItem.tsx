"use client";

import Image from "next/image";
import React, { FC } from "react";

type CommentsType = {
  id: string;
  user_id: string;
  post_id: string;
  content: string;
  image_path: string;
  created_at: Date;
  updated_at: Date;
};

type PostCommentsType = Pick<
  CommentsType,
  "user_id" | "content" | "image_path"
>;

type PostCommentsTimeType = {
  dateTime: string;
  labelTime: string;
};

type Props = PostCommentsType & PostCommentsTimeType;

const CommentItem: FC<Props> = React.memo((props) => {
  const { user_id, content, image_path, dateTime, labelTime } = props;
  return (
    <article
      className="flex gap-11 p-5"
      style={{ background: "rgba(196, 196, 196, 0.3)" }}
    >
      <div className="shrink-0">
        <Image
          src={image_path}
          alt=""
          width="60"
          height="60"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
        <h3 className="font-normal text-lg mt-2.5 text-lg">{user_id}</h3>
      </div>
      <div className="flex-1">
        <p>{content}</p>
        <time dateTime={dateTime} style={{ color: "rgba(24, 160, 251, 0.5)" }}>
          {labelTime}
        </time>
      </div>
    </article>
  );
});

CommentItem.displayName = "Comment";

export default CommentItem;
