const ALIANCE = [
  "ARUTEGA",
  "LEOGRAPH",
  "NOW VILLAGE",
  "HONE",
  "HINOTORI",
  "CARDS",
  "ROCAL",
  "KIRAHOSHI",
];

const CREATORS = [
  "ALGORHYTHM",
  "KEISUKE ZUZUKI",
  "KIKUTI KEITA",
  "KUDOU MASAYA",
  "SHIORI HIGASHIYAMA",
  "SHINODA EMI",
  "TAKANORI YAMDA",
  "YASUTAKE TERUI",
  "YUJI AONO",
  "YOSHIMURA YUKI",
];

export function PartnershipSection() {
  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px]">
        <h2 className="font-serif italic text-brand text-[28px] md:text-[36px] leading-none mb-10 md:mb-14">
          (Partnership)
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="font-display text-brand text-[20px] md:text-[24px] font-medium tracking-wide mb-6 border-b border-brand pb-3">
              Aliance
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-display text-body text-[14px] md:text-[16px]">
              {ALIANCE.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-brand text-[20px] md:text-[24px] font-medium tracking-wide mb-6 border-b border-brand pb-3">
              Creator
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-3 font-display text-body text-[13px] md:text-[14px]">
              {CREATORS.map((name) => (
                <li key={name}>{name} /</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
