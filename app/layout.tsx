import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google'
import NextAuthProvider from './providers/NextAuth'
import "./globals.css";

export const noto_sans_jp = Noto_Sans_JP({
  // フォントスタイルを指定するためのオブジェクトを渡す
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "techblog",
  description: "エンジニア向けブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
