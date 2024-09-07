"use client";
import {
  getLoginUserId,
  PostCommentType,
  UserType,
} from "@/app/utils/supabaseFunctions";
import { Session } from "next-auth";

import { useSession } from "next-auth/react";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type BlogCommentsContextType = {
  comments: Array<PostCommentType>;
  setComments: Dispatch<SetStateAction<Array<PostCommentType>>>;
  session: Session | null;
  loginUser: UserType | null;
};

export const BlogCommentsContext = createContext<BlogCommentsContextType>(
  {} as BlogCommentsContextType
);

export const useBlogComments = (): BlogCommentsContextType =>
  useContext(BlogCommentsContext);

const BlogCommentsProvider = (props: { children: ReactNode }) => {
  const { data: session } = useSession();
  const { children } = props;
  const [comments, setComments] = useState<Array<PostCommentType>>([]);
  const [loginUser, setLoginUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getUserId = async () => {
      if (session && session.user && session.user.name) {
        const name = session.user.name;
        const { data: user } = await getLoginUserId(name);
        user && setLoginUser(user);
      }
    };
    getUserId();
  }, [session]);

  return (
    <BlogCommentsContext.Provider
      value={{ comments, setComments, session, loginUser }}
    >
      {children}
    </BlogCommentsContext.Provider>
  );
};

export default BlogCommentsProvider;
