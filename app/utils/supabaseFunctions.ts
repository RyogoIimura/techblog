import { create } from "domain";
import { supabase } from "../utils/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { getFormatParseDateTime, getNowParseDateTime } from "./dateFormat";

export type UserType = {
    id?: string;
    name?: string;
    email?: string;
    image?: string
}

export type OptionUserType = Pick<UserType, "name" | "image">

export type GetBlogType = {
    id: string;
    user_id: string;
    title: string;
    content: string;
    image_path: string | null;
}


export const getAllPosts = async () => {
    const posts = await supabase.from("posts").select("*");
    return posts.data;
}

export const getBlog = async (id: string): Promise<{ data: GetBlogType | null; }> => {
    const { data } = await supabase.from("posts").select("id,user_id,title,content,image_path").eq('id', id).limit(1).single();
    return { data }
    User?: Array<OptionUserType>;
}

export type GetMoreBlogType = {
    id: string;
    user_id: string;
    title: string;
    image_path: string | null;
}

export type PostCommentType = {
    id?: string;
    user_id: string;
    post_id: string;
    content: string;
    created_at: string;
    updated_at?: string;
    User?: Array<OptionUserType>;
}

export const getAllPosts = async () => {
    const posts = await supabase.from("").select("*");
    return posts.data;
}

export const getBlog = async (id: string): Promise<{ data: GetBlogType | null; }> => {
    const { data } = await supabase.from("posts")
        .select("id,user_id,title,content,image_path,User!inner(name,image)")
        .eq('id', id)
        .single();
    return { data }
}

export const getMoreBlog = async (user_id: string, post_id: string): Promise<{ data: Array<GetMoreBlogType> | null; }> => {
    const { data } = await supabase.from("posts")
        .select("id,user_id,title,image_path")
        .eq('user_id', user_id)
        .order("created_at", { ascending: false })
        .not('id', 'eq', post_id)
        .limit(3);
    return { data }
}

export const getPostComments = async (post_id: string): Promise<{ data: Array<PostCommentType> | null; }> => {
    const { data } = await supabase.from("comments").select("id,user_id,post_id,content,created_at,User!inner(name,image)").eq('post_id', post_id).order("created_at", { ascending: false });
    return { data }
}

export const addPostComment = async (comment: PostCommentType): Promise<{ data: Array<PostCommentType> | null; error: PostgrestError | null }> => {
    const { id, user_id, post_id, content } = comment;
    const { data, error } = await supabase.from('comments').insert({ id, user_id, post_id, content, created_at: getNowParseDateTime(), updated_at: getNowParseDateTime() })
    return { data, error }
}

export const getLoginUserId = async (userName: string): Promise<{ data: UserType | null; error: PostgrestError | null }> => {
    const { data, error } = await supabase.from('User').select("id,name,image,email").eq("name", userName).single();
    return { data, error }
}
