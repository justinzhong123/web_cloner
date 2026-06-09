import Link from "next/link";
import { CounterLogo, MenuGridIcon } from "./icons";

const NAV = [
  { label: "about", href: "/company" },
  { label: "service", href: "/service" },
  { label: "Casestudy", href: "/creative-case" },
  { label: "Blog", href: "/counter-media" },
  { label: "News", href: "/news" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[500] h-[100px] pointer-events-none">
      <div className="relative h-full pointer-events-auto">
        <Link
          href="/"
          aria-label="COUNTER株式会社 ホーム"
          className="absolute top-[40px] left-[40px] text-white transition-opacity hover:opacity-80"
        >
          <CounterLogo />
        </Link>

        {/* Pill nav — visible on desktop only */}
        <nav className="absolute top-[35px] left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-7 rounded-full bg-white/70 backdrop-blur-sm px-7 h-[40px] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-brand hover:underline underline-offset-4 leading-none tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster: EN + menu */}
        <div className="absolute top-[35px] right-[24px] flex items-center gap-2">
          <button
            type="button"
            className="hidden lg:flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[11px] font-semibold text-brand border border-brand/40"
            aria-label="言語切替"
          >
            EN
          </button>
          <button
            type="button"
            aria-label="メニューを開く"
            className="h-[44px] w-[44px] hover:scale-105 transition-transform"
          >
            <MenuGridIcon className="h-full w-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
