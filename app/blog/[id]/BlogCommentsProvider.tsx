"use client";
import { PostCommentType } from "@/app/utils/supabaseFunctions";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type BlogCommentsContextType = {
  comments: Array<PostCommentType>;
  setComments: Dispatch<SetStateAction<Array<PostCommentType>>>;
};

export const BlogCommentsContext = createContext<BlogCommentsContextType>(
  {} as BlogCommentsContextType
);

export const useBlogComments = (): BlogCommentsContextType =>
  useContext(BlogCommentsContext);

const BlogCommentsProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [comments, setComments] = useState<Array<PostCommentType>>([]);
  return (
    <BlogCommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </BlogCommentsContext.Provider>
  );
};

export default BlogCommentsProvider;
