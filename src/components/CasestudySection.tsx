import Image from "next/image";
import { ArrowDiagIcon } from "./icons";
import type { CaseStudy } from "@/types";

const CASES: CaseStudy[] = [
  {
    id: "nichigas",
    title: "日本瓦斯株式会社様 コーポレートサイト(BtoC領域)",
    image: "/images/case-nichigas.png",
    href: "/creative-case/nichigas",
  },
  {
    id: "ag-corp",
    title: "エージェントグロー様 コーポレートサイト",
    image: "/images/case-ag-corp.png",
    href: "/creative-case/ag_corp",
  },
  {
    id: "ag-recruit",
    title: "エージェントグロー様 採用サイト",
    image: "/images/case-ag-recruit.png",
    href: "/creative-case/ag_recruit",
  },
  {
    id: "bokan",
    title: "世界へボカン様 BtoBサービスサイト",
    image: "/images/case-bokan-full.png",
    href: "/creative-case/bokan",
  },
  {
    id: "ryokanbook",
    title: "Ryokanbook OTAサイト",
    image: "/images/case-ryokanbook.png",
    href: "/creative-case/ryokanbook",
  },
  {
    id: "neologi",
    title: "NEOlogi サービスサイト",
    image: "/images/case-misc-1.png",
    href: "/creative-case/neologi",
  },
];

export function CasestudySection() {
  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px]">
        <h2 className="font-serif italic text-brand text-[28px] md:text-[36px] leading-none mb-10 md:mb-14">
          (Casestudy)
        </h2>

        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="grid grid-flow-col auto-cols-[280px] md:auto-cols-[400px] gap-6 md:gap-8">
            {CASES.map((c) => (
              <li key={c.id}>
                <a href={c.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-soft">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 font-jp text-body text-[13px] md:text-[14px] leading-snug">
                    {c.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 md:mt-16">
          <a
            href="/creative-case"
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
