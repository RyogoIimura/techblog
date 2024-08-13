"use client";
import React, { ChangeEvent, FC, useState } from "react";

import "./Comments.modules.css";
import CommentItem from "./CommentItem";
import { getLabelTime } from "@/app/utils/dateFormat";

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
            labelTime={getLabelTime(comment.created_at)}
          />
        ))}
      </div>
    </section>
  );
});

Comments.displayName = "Comments";

export default Comments;
