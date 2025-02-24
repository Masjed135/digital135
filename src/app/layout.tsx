import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";



const shabnam = localFont({
  src: [
    {
      path: '../../public/fonts/shabnam/Shabnam-FD.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/shabnam/Shabnam-Bold-FD.woff2',
      weight: '600',
      style: 'bold',
    },
   
  ],
})

export const lalezar = localFont({
  src: [
    {
      path: '../../public/fonts/lalezar/Lalezar-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
   
  ],
})


export const metadata: Metadata = {
  title: "خانه فرهنگ و دیجیتال مسجد الزهرا(س)",
  description: "خانه فرهنگ و دیجیتال مسجد الزهرا(س)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${shabnam.className}`}
      >
        {children}
      </body>
    </html>
  );
}
