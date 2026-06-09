import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, EB_Garamond } from "next/font/google";
import "./globals.css";

// Display sans — substitute for HelveticaNeueeTextPro (used for big English headlines)
const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Japanese body type — substitute for Tazugane Gothic HondaMKTA Med
const notoSansJp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Serif — substitute for ITCGaramondStd-BkCond (used for "(Service)", "(Promise)" labels)
const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "COUNTER株式会社 | 埼玉県越谷市のデジタルマーケティングカンパニー",
  description:
    "Webサイト(ホームページ)制作やSEO対策などのデジタルマーケティング課題はCOUNTER株式会社へお問い合わせください。各分野トップクラスのコンサルタント、ディレクターが支援いたします。",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "COUNTER株式会社 | 埼玉県越谷市のデジタルマーケティングカンパニー",
    description:
      "Webサイト(ホームページ)制作やSEO対策などのデジタルマーケティング課題はCOUNTER株式会社へお問い合わせください。",
    type: "website",
    locale: "ja_JP",
    url: "https://counter-digital.jp/",
    siteName:
      "COUNTER株式会社 | 埼玉県越谷市のデジタルマーケティングカンパニー",
    images: [{ url: "/seo/ogp.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJp.variable} ${ebGaramond.variable} antialiased`}
    >
      <body className="font-jp text-body bg-white">{children}</body>
    </html>
  );
}
