import { Poppins } from "next/font/google";

export const poppins = Poppins({
  // フォントスタイルを指定するためのオブジェクトを渡す
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});