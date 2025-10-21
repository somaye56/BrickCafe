import iranSans from '@/app/fonts/iransans';
import cn from '@/app/utils/clsxFun';
import type { Metadata } from "next";
import Header from "./components/layout/Header";
import "./globals.css";
import Providers from "./providers/ReactQueryProvider";


export const metadata: Metadata = {
  title: "BrickCafe",
  description: "BrickCafe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={cn(`relative z-0 overflow-y-hidden max-w-[700px] mx-auto bg-[#ffffff]`, iranSans.className)}
      >
        <Providers>
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  );
}
