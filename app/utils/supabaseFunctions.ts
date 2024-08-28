import { create } from "domain";
import { supabase } from "./supabase";
import { PostgrestError } from "@supabase/supabase-js";
import { getFormatParseDateTime, getNowParseDateTime } from "./dateFormat";

export type GetBlogType = {
    id: string;
    user_id: string;
    title: string;
    content: string;
    image_path: string | null;
}

export const getBlog = async (id: string): Promise<{ data: GetBlogType | null; }> => {
    const { data } = await supabase.from("posts").select("id,user_id,title,content,image_path").eq('id', id).limit(1).single();
    return { data }
}

export type GetMoreBlogType = {
    id: string;
    user_id: string;
    title: string;
    image_path: string | null;
}

export const getMoreBlog = async (user_id: string): Promise<{ data: Array<GetMoreBlogType> | null; }> => {
    const { data } = await supabase.from("posts").select("id,user_id,title,image_path").eq('user_id', user_id).order("created_at", { ascending: false }).limit(3);
    return { data }
}

export type PostCommentType = {
    id?: string;
    user_id: string;
    post_id: string;
    content: string;
    created_at: string;
    updated_at?: string;
}

export const getPostComments = async (post_id: string): Promise<{ data: Array<PostCommentType> | null; }> => {
    const { data } = await supabase.from("comments").select("id,user_id,post_id,content,created_at").eq('post_id', post_id).order("created_at", { ascending: false });
    return { data }
}

export const addPostComment = async (comment: PostCommentType): Promise<{ data: Array<PostCommentType> | null; error: PostgrestError | null }> => {
    const { id, user_id, post_id, content } = comment;
    const { data, error } = await supabase.from('comments').insert({ id, user_id, post_id, content, created_at: getNowParseDateTime(), updated_at: getNowParseDateTime() })
    return { data, error }
}
