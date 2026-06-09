import Image from "next/image";
import { ArrowDiagIcon } from "./icons";
import type { VoiceCard } from "@/types";

const VOICES: VoiceCard[] = [
  {
    client: "HAIR SALON ACT",
    quote:
      "短い期間の中でスピーディかつ品質の高いWEBサイトを作成いただきました。",
    avatar: "/images/voice-hirano.png",
    href: "/voice/hirano",
  },
  {
    client: "株式会社Play Blue",
    quote: "決め手は高い提案力。プロジェクトも安心してお任せできました。",
    avatar: "/images/voice-aono.png",
    href: "/voice/aono",
  },
  {
    client: "株式会社HONE",
    quote:
      "企業のマーケティング戦略から実行まで、プロの提案力に驚きました。",
    avatar: "/images/voice-sakurai.png",
    href: "/voice/sakurai",
  },
];

export function VoiceSection() {
  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px]">
        <h2 className="font-serif italic text-brand text-[28px] md:text-[36px] leading-none mb-10 md:mb-14">
          (Voice)
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {VOICES.map((v) => (
            <li key={v.client}>
              <a
                href={v.href}
                className="group block bg-brand-soft/40 hover:bg-brand-soft transition-colors p-6 h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
                    <Image
                      src={v.avatar}
                      alt={v.client}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-jp text-body text-[14px] font-medium">
                    {v.client}
                  </p>
                </div>
                <p className="font-jp text-body text-[14px] leading-[1.7]">
                  {v.quote}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16">
          <a
            href="/voice"
            className="group inline-flex items-center gap-4 text-brand"
          >
            <span className="font-display tracking-wider text-[24px] font-medium">
              MORE
            </span>
            <ArrowDiagIcon className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
