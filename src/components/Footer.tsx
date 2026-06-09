import { ArrowDiagIcon, CounterLogo } from "./icons";

const PRIMARY = [
  { label: "ABOUT US", href: "/company" },
  { label: "SERVICE", href: "/service" },
  { label: "CASESTUDY", href: "/creative-case" },
  { label: "VOICE", href: "/voice" },
  { label: "NEWS", href: "/news" },
];

const SECONDARY = [
  { label: "PRIVACY", href: "/privacy" },
  { label: "TERMS", href: "/terms" },
];

const SOCIAL = [
  { label: "YouTube", href: "https://www.youtube.com/@countermedia" },
  { label: "COUNTER MEDIA", href: "/counter-media" },
  { label: "X", href: "https://x.com/" },
];

export function Footer() {
  return (
    <footer className="relative bg-brand bg-assort text-cream overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-[80px] lg:px-[120px] py-[60px] md:py-[100px]">
        {/* Top — SAITAMA越谷 + tagline */}
        <div className="mb-10 md:mb-14">
          <p className="font-display text-[11px] md:text-[12px] tracking-[0.3em] uppercase mb-3">
            SAITAMA 越谷
          </p>
          <h2 className="font-jp font-medium text-[28px] md:text-[44px] lg:text-[56px] leading-tight">
            ローカルから最先端をつくる。
          </h2>
          <p className="font-display italic text-[13px] md:text-[15px] mt-3 opacity-80">
            Turn the mainstream upside down.
          </p>
        </div>

        {/* Big CTAs */}
        <div className="grid md:grid-cols-2 gap-4 mb-14 md:mb-20">
          <a
            href="/download"
            className="group flex items-center justify-between gap-6 border border-cream/50 px-6 md:px-8 py-6 md:py-8 hover:bg-cream hover:text-brand transition-colors"
          >
            <div>
              <p className="font-display text-[24px] md:text-[32px] font-medium tracking-wide">
                DOWNLOAD
              </p>
              <p className="font-jp text-[12px] md:text-[13px] mt-1 opacity-80">
                資料ダウンロード
              </p>
            </div>
            <ArrowDiagIcon className="h-7 w-7 md:h-9 md:w-9 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="/contact"
            className="group flex items-center justify-between gap-6 border border-cream/50 px-6 md:px-8 py-6 md:py-8 hover:bg-cream hover:text-brand transition-colors"
          >
            <div>
              <p className="font-display text-[24px] md:text-[32px] font-medium tracking-wide">
                Contact Us
              </p>
              <p className="font-jp text-[12px] md:text-[13px] mt-1 opacity-80">
                お問い合わせ
              </p>
            </div>
            <ArrowDiagIcon className="h-7 w-7 md:h-9 md:w-9 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Nav columns */}
        <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-10 md:gap-12 pb-10 md:pb-14 border-t border-cream/30 pt-10 md:pt-14">
          <div>
            <CounterLogo className="text-cream h-6 w-auto mb-4" />
            <p className="font-jp text-[11px] md:text-[12px] opacity-75 leading-relaxed">
              〒343-0827 埼玉県越谷市川柳町2-578-1
              <br />
              COUNTER株式会社
            </p>
          </div>

          <ul className="flex flex-col gap-3 font-display text-[14px] md:text-[15px] tracking-wider">
            {PRIMARY.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:opacity-70 transition-opacity">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3 font-display text-[13px] md:text-[14px] tracking-wider">
            {SOCIAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:opacity-70 transition-opacity">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-[11px] md:text-[12px] opacity-75">
          <ul className="flex gap-6">
            {SECONDARY.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:opacity-70 transition-opacity">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-display tracking-wider">© COUNTER co.ltd.</p>
        </div>
      </div>
    </footer>
  );
}
