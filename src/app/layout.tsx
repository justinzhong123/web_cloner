import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Roboto } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ETOHA LAB l グラフィック・WEBデザイン",
  description:
    "福岡と東京に拠点を置くデザイン会社「ETOHA LAB（えとはラボ）」です。Web・グラフィック・ブランディングなど、グループ内外の多様なクリエイティブを手がけています。",
  alternates: { canonical: "https://etoha-lab.co.jp/" },
  icons: {
    icon: [
      { url: "/assets/seo/favicon.ico", sizes: "32x32" },
      { url: "/assets/seo/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/seo/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "ETOHA LAB",
    title: "ETOHA LAB l グラフィック・WEBデザイン",
    description:
      "福岡と東京に拠点を置くデザイン会社「ETOHA LAB（えとはラボ）」です。Web・グラフィック・ブランディングなど、グループ内外の多様なクリエイティブを手がけています。",
    type: "website",
    locale: "ja_JP",
    url: "https://etoha-lab.co.jp/",
    images: ["/assets/seo/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETOHA LAB l グラフィック・WEBデザイン",
    description:
      "福岡と東京に拠点を置くデザイン会社「ETOHA LAB（えとはラボ）」です。",
    images: ["/assets/seo/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
