"use client";
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";

import "./Comments.modules.css";
import CommentItem from "./CommentItem";
import { useBlogComments } from "./BlogCommentsProvider";
import {
  addPostComment,
  getPostComments,
  PostCommentType,
  UserType,
} from "@/app/utils/supabaseFunctions";
import { v4 as uuidv4 } from "uuid";
type Props = {
  post_id: string;
  postComments: Array<PostCommentType> | null;
};

const Comments: FC<Props> = React.memo((props) => {
  const { post_id, postComments } = props;
  const [comment, setComment] = useState<string>("");
  const { comments, setComments, loginUser } = useBlogComments();
  const [error, setError] = useState<string | null>(null);
  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = useCallback(async () => {
    if (!loginUser) {
      setError("認証に失敗しました。");
      return;
    }
    if (comment === "") {
      setError("コメントを入力してください。");
      return;
    }
    const newComment: PostCommentType = {
      id: uuidv4(),
      user_id: loginUser.id!,
      post_id,
      content: comment,
      created_at: "",
    };
    const { error } = await addPostComment(newComment);
    if (error) {
      setError(`保存に失敗しました: ${error.message}`);
    } else {
      setError(null);
      setComment("");
      const { data: postComments } = await getPostComments(post_id); // 記事に紐づいたコメントデータ取得
      postComments && setComments(postComments);
    }
  }, [comment, setComments, loginUser, post_id]);

  useEffect(() => {
    postComments && setComments(postComments);
  }, [setComments, postComments]);

  return (
    <section className="blogComments">
      <h2>Comments</h2>
      <div className="flex gap-9 mt-7">
        {loginUser ? (
          <>
            <input
              className="border h-10 flex-1 placeholder-opacity-5 p-2"
              type="text"
              placeholder="Your Comment..."
              value={comment}
              onChange={handleChangeComment}
            />
            <button onClick={handleAddComment}>Comment</button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </>
        ) : (
          <p>サインインするとコメントができます。</p>
        )}
      </div>
      <div className="mt-7 flex flex-col gap-9">
        {comments &&
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
      </div>
    </section>
  );
});

Comments.displayName = "Comments";

export default Comments;
