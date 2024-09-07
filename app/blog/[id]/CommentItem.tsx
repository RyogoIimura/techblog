"use client";

import { getFormatLabelTime } from "@/app/utils/dateFormat";
import { PostCommentType, UserType } from "@/app/utils/supabaseFunctions";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  comment: PostCommentType;
};

const CommentItem: FC<Props> = React.memo((props) => {
  const { comment } = props;
  const users = comment.User;
  const user = users
    ? (users as Pick<UserType, "name" | "image">)
    : { name: "" };
  const name = user.name || "";
  const image = user.image || "";
  const { content, created_at } = comment;
  const dateTime = getFormatLabelTime(created_at);
  return (
    <article
      className="flex gap-11 p-5"
      style={{ background: "rgba(196, 196, 196, 0.3)" }}
    >
      <div className="shrink-0">
        <Image
          src={image}
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
        <h3 className="font-normal text-lg mt-2.5 text-lg">{name}</h3>
      </div>
      <div className="flex-1">
        <p>{content}</p>
        <span style={{ color: "rgba(24, 160, 251, 0.5)" }}>{dateTime}</span>
      </div>
    </article>
  );
});

CommentItem.displayName = "Comment";

export default CommentItem;
