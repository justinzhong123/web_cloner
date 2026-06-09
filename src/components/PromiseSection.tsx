const TELOP = "デジタルコンテンツ支援で地域に活力をもたらす。";

const PARAGRAPHS = [
  "マーケットには“負けないための作法”がある。だがそこに美意識はなく、汎用的な式が残るだけ。私たちは憂ます。“いっせーのーで”で、同じものをつくること。負けないために、同じものになろうとすること。ロジックとは違うリベラルアーツこそ、私たちが大切にすべきではないか。そんなふうに考えます。",
  "市場原理の外側には、魅力があるにも関わらず、気づかれていないモノやコトがあります。それらはそれぞれの環境で変形し、同じものはありません。私たちは決めました。本来の主役をデジタルの力で表舞台に押し上げることを。だから私たちは憂ません。スポットライトを当てたその対象に、また新たな影ができることを。かつての主役は、舞台ごと入れ替わる。さぁ、メインストリームをひっくり返そう。",
];

export function PromiseSection() {
  return (
    <section className="relative py-0 pt-[80px] md:pt-[140px] bg-white">
      {/* Horizontal marquee telop */}
      <div className="relative h-[60px] md:h-[84px] flex items-center overflow-hidden">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap text-brand font-jp font-medium text-[28px] md:text-[45px] leading-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="px-6">
              {TELOP}
            </span>
          ))}
        </div>
      </div>

      {/* Content wrap */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px] pt-[80px] md:pt-[120px] pb-[120px] md:pb-[200px]">
        <h2 className="font-serif italic text-brand text-[28px] md:text-[36px] leading-none mb-10 md:mb-14">
          (Promise)
        </h2>

        <div className="font-jp text-brand text-[36px] md:text-[58px] lg:text-[74px] font-medium leading-[1.3] mb-12 md:mb-16">
          メインストリームを
          <br />
          ひっくり返す。
        </div>

        <div className="max-w-[860px] ml-auto space-y-7 md:space-y-8 text-brand font-jp text-[16px] md:text-[20px] lg:text-[25px] leading-[1.3]">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
