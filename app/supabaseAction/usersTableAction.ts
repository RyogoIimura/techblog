import { supabase } from "@/app/utils/supabase";

// Supabase接続テストとして作成した関数です。実際には使用しません。
export async function usersFetchAllData(id: string) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error in usersFetchAllData: ", error);
    throw error;
  }
}
