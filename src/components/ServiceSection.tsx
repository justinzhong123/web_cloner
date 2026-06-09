import Image from "next/image";
import { ArrowDiagIcon } from "./icons";
import type { ServiceItem } from "@/types";

const ITEMS: ServiceItem[] = [
  {
    id: "marketing",
    index: "01",
    title: "デジタルマーケティング",
    description:
      "SEOコンサルティングを中心としたデジタルマーケティングサービスをご提供します。",
    image: {
      src: "/images/service-marketing.webp",
      alt: "デジタルマーケティング",
      width: 1124,
      height: 580,
    },
    imageSp: "/images/service-marketing-sp.webp",
  },
  {
    id: "creative",
    index: "02",
    title: "クリエイティブワーク",
    description:
      "Webサイトをはじめとした、クリエイティブ制作サービスをご提供します。",
    image: {
      src: "/images/service-creative.webp",
      alt: "クリエイティブワーク",
      width: 880,
      height: 560,
    },
    imageSp: "/images/service-creative-sp.webp",
  },
  {
    id: "media",
    index: "03",
    title: "ローカルメディア運営",
    description:
      "越谷市を中心とした、埼玉県のローカルメディアを運営しています。",
    image: {
      src: "/images/service-media.webp",
      alt: "ローカルメディア運営",
      width: 656,
      height: 836,
    },
    imageSp: "/images/service-media-sp.webp",
  },
];

export function ServiceSection() {
  return (
    <section className="relative bg-brand-soft pt-[100px] md:pt-[225px] pb-[120px] md:pb-[200px] overflow-hidden">
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 bg-counter-grid-soft opacity-60 pointer-events-none"
        aria-hidden
      />

      {/* Head with section label and vertical Japanese type */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px] pb-[100px] md:pb-[160px]">
        <div className="flex items-start justify-between gap-12">
          <h2 className="font-serif italic text-brand text-[44px] md:text-[68px] lg:text-[96px] leading-none">
            (Service)
          </h2>
          <Image
            src="/images/service-type.webp"
            alt="デジタル起点 全方位支援"
            width={269}
            height={768}
            className="hidden md:block animate-glitch select-none"
            priority
          />
        </div>
        <p className="mt-10 max-w-[600px] font-jp text-brand text-[16px] md:text-[18px] leading-[1.7] md:hidden">
          デジタル起点 全方位支援
        </p>
      </div>

      {/* Items */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px] space-y-[100px] md:space-y-[200px]">
        {ITEMS.map((item, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={item.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                reverse ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden bg-white">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="w-full h-auto animate-glitch"
                />
              </div>
              <div>
                <span className="font-serif italic text-brand text-[20px] block mb-3">
                  ({item.index})
                </span>
                <h3 className="font-jp font-medium text-brand text-[24px] md:text-[32px] leading-tight mb-4">
                  {item.title}
                </h3>
                <p className="font-jp text-brand text-[14px] leading-[1.7] max-w-[440px]">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* MORE link */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px] mt-[80px] md:mt-[140px]">
        <a
          href="/service"
          className="group flex items-center justify-between gap-8 border-t border-b border-brand py-7 text-brand"
        >
          <span className="font-jp text-[14px] md:text-[18px] leading-[1.6] max-w-[860px]">
            デジタルマーケティング戦略からクリエイティブ制作までを一貫してご支援します。
          </span>
          <span className="flex items-center gap-4 shrink-0">
            <span className="font-display tracking-wider text-[20px] md:text-[24px] font-medium">
              MORE
            </span>
            <ArrowDiagIcon className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </a>
      </div>
    </section>
  );
}
