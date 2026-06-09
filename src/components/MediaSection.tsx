import Image from "next/image";
import {
  ArrowDiagIcon,
  CounterChannelIcon,
  MediaSemicircle,
} from "./icons";
import type { BlogPost } from "@/types";

const BLOG: BlogPost[] = [
  {
    date: "2026.05.16",
    title:
      "Webサイト制作時のヒアリング項目7つ！テンプレートやコツも紹介",
    image: "/images/blog-hearing.jpg",
    href: "/counter-media/website-development-hearing",
  },
  {
    date: "2026.05.15",
    title:
      "Webサイト制作期間の平均？ページ数や依頼先ごとに整理して解説",
    image: "/images/blog-term.jpg",
    href: "/counter-media/website-development-term",
  },
  {
    date: "2026.05.10",
    title:
      "Webサイト制作のスケジュールと流れ！タスクごとの納期一覧や管理方法も紹介",
    image: "/images/blog-schedule.jpg",
    href: "/counter-media/website-development-schedule",
  },
];

const HOSTS = [
  { name: "宮田", image: "/images/media-miyata.webp" },
  { name: "森", image: "/images/media-mori.webp" },
];

export function MediaSection() {
  return (
    <section className="relative bg-white py-[80px] md:py-[120px] overflow-hidden">
      {/* Decorative semicircle */}
      <MediaSemicircle
        className="absolute top-[120px] left-0 h-[120px] w-[120px] md:h-[176px] md:w-[176px] -translate-x-1/3"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px]">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif italic text-brand text-[28px] md:text-[36px] leading-none mb-4">
            (Counter Media)
          </h2>
          <p className="font-jp text-body text-[13px] md:text-[14px] leading-[1.7] max-w-[640px]">
            COUNTERのデジタルナレッジをシェアするメディアです。マーケティングからクリエイティブに関することまで発信しています。
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12">
          {/* COUNTER Channel */}
          <a
            href="/counter-media/channel"
            className="group relative block overflow-hidden rounded-md bg-brand text-white p-6 md:p-8 min-h-[300px] md:min-h-[400px]"
          >
            <Image
              src="/images/media-channel-bg.svg"
              alt=""
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover opacity-30 mix-blend-overlay pointer-events-none"
              aria-hidden
            />
            <div className="relative flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CounterChannelIcon className="h-8 w-8" />
                  <h3 className="font-display text-[18px] md:text-[22px] tracking-wide font-medium">
                    COUNTER Channel
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ul className="flex -space-x-3">
                  {HOSTS.map((h) => (
                    <li
                      key={h.name}
                      className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white"
                    >
                      <Image
                        src={h.image}
                        alt={h.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </li>
                  ))}
                </ul>
                <p className="font-jp text-[13px] tracking-wider">宮田 / 森</p>
              </div>
            </div>
          </a>

          {/* Owned Blog Media */}
          <div>
            <h3 className="font-display text-brand text-[18px] md:text-[20px] font-medium tracking-wide mb-5">
              Owned Blog Media
            </h3>
            <ul className="space-y-5">
              {BLOG.map((post) => (
                <li key={post.href} className="border-b border-brand/20 pb-5">
                  <a
                    href={post.href}
                    className="group grid grid-cols-[80px_1fr] md:grid-cols-[96px_1fr] gap-4 items-center"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <time className="font-display text-brand text-[12px] tracking-wider block mb-1">
                        {post.date}
                      </time>
                      <p className="font-jp text-body text-[13px] md:text-[14px] leading-snug">
                        {post.title}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/counter-media"
                className="group inline-flex items-center gap-3 text-brand"
              >
                <span className="font-display tracking-wider text-[20px] font-medium">
                  MORE
                </span>
                <ArrowDiagIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
