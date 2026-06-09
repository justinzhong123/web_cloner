import { ArrowDownIcon } from "./icons";

export function HeroSection() {
  return (
    <section className="relative h-[900px] w-full overflow-hidden bg-brand text-white">
      {/* Orange grid pattern */}
      <div className="absolute inset-0 bg-counter-grid" aria-hidden />
      {/* Noise overlay */}
      <div
        className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay"
        aria-hidden
      />

      {/* Right-side vertical Japanese text */}
      <div
        className="absolute right-[40px] top-[180px] hidden md:flex flex-col items-center gap-4 text-[11px] tracking-[0.4em] text-white/90 z-10"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden
      >
        <span>ローカルから最先端をつくる</span>
      </div>

      {/* Floating right CTAs (only visible on hero) */}
      <div className="absolute right-[24px] top-[120px] z-10 hidden lg:flex flex-col gap-2">
        {/* Reserved for c-btn-aside if we later overlay download/contact pills */}
      </div>

      {/* Scroll indicator bottom-right */}
      <div className="absolute bottom-[40px] right-[40px] z-10 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/80">
        <span>SCROLL</span>
        <ArrowDownIcon className="h-6 w-6 text-white" />
      </div>

      {/* Main content */}
      <div className="relative z-[5] mx-auto h-full max-w-[1440px] px-6 md:px-[40px] lg:px-[80px] flex flex-col justify-between pt-[210px] pb-[40px]">
        <p className="max-w-[420px] text-[12px] leading-[1.3] font-display animate-fade-up opacity-0 [animation-delay:200ms]">
          We utilize our digital content and marketing expertise to overcome
          marketing challenges companies face.
        </p>

        <h1 className="font-display font-medium uppercase text-white text-[46px] sm:text-[68px] md:text-[88px] lg:text-[110px] leading-[0.9] tracking-[-0.05em] animate-fade-up opacity-0 [animation-delay:400ms]">
          BUILDING
          <br />
          CUTTING-EDGE
          <br />
          MODELS FROM
          <br />
          LOCAL INNOVATION.
        </h1>

        <p className="font-jp text-[16px] md:text-[25px] leading-[1.5] text-white animate-fade-up opacity-0 [animation-delay:600ms]">
          ローカルから最先端をつくる。
        </p>
      </div>
    </section>
  );
}
