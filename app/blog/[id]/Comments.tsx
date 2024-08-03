"use client";
import React, { ChangeEvent, FC, useState } from "react";

import "./Comments.modules.css";
import CommentItem from "./CommentItem";

type CommentsType = {
  id: string;
  user_id: string;
  post_id: string;
  content: string;
  image_path: string;
  created_at: Date;
  updated_at: string;
};

type PostCommentsType = Pick<
  CommentsType,
  "id" | "user_id" | "content" | "image_path" | "created_at"
>;

const getDateTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Tokyo",
  };

  const formattedDate = new Intl.DateTimeFormat("ja-JP", options).format(date);

  // YYYY-MM-DD HH:MM:SS 形式に変換
  return formattedDate.replace(/\//g, "-").replace(", ", " ");
};

const getLabelTime = (date: Date): string => {
  const seconds: number = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  );

  let interval: number = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return "a min ago";
};

// ダミーコメント
const sampleComments: Array<PostCommentsType> = [
  {
    id: "1",
    user_id: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.",
    image_path: "https://picsum.photos/60/60",
    created_at: new Date(),
  },
  {
    id: "2",
    user_id: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.",
    image_path: "https://picsum.photos/60/60",
    created_at: new Date(),
  },
];

const Comments: FC<Record<string, never>> = React.memo(() => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] =
    useState<Array<PostCommentsType>>(sampleComments);

  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    const newComments: Array<PostCommentsType> = [
      ...comments,
      {
        id: (comments.length + 1).toString(),
        user_id: "user",
        content: comment,
        image_path: "https://picsum.photos/60/60",
        created_at: new Date(),
      },
    ];
    setComments(newComments);
    setComment("");
  };
  return (
    <section className="blogComments">
      <h2>Comments</h2>
      <div className="flex gap-9 mt-7">
        <input
          className="border h-10 flex-1 placeholder-opacity-5 p-2"
          type="text"
          placeholder="Your Comment..."
          value={comment}
          onChange={handleChangeComment}
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
      <div className="mt-7 flex flex-col gap-9">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            user_id={comment.user_id}
            image_path={comment.image_path}
            content={comment.content}
            dateTime={getDateTime(comment.created_at)}
            labelTime={getLabelTime(comment.created_at)}
          />
        ))}
      </div>
    </section>
  );
});

Comments.displayName = "Comments";

export default Comments;
