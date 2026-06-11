"use client";

import Link from "next/link";
import { ArrowRightSmall } from "@/components/icons";

/** Hero section — character + balloon + CTA over wireframe grid. */
export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero__inner">
        <div className="hero__lines">
          <div className="hero__lines__balloon">
            <img
              src="/assets/image/index/hero-lines_balloon.webp"
              width="382"
              height="235"
              alt=""
            />
          </div>
          <div className="hero__lines__text">
            <img
              src="/assets/image/index/hero-lines_text.webp"
              width="212"
              height="37"
              alt=""
            />
          </div>
        </div>
        <div className="hero__cta">
          <Link href="/contact/" className="hero__cta__link">
            <div className="hero__cta__hana _01">
              <img src="/assets/image/icon-hana_ao_saku.gif" alt="" />
            </div>
            <div className="hero__cta__balloon view_pc">
              <img src="/assets/image/index/hero-cta_balloon.webp" alt="" />
              <span className="hero__cta__balloon__text">相談してみる</span>
              <span className="hero__cta__balloon__arrow">
                <ArrowRightSmall />
              </span>
            </div>
            <div className="hero__cta__balloon view_sp">
              <span className="hero__cta__balloon__icon">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.05198 9.22975L0 15.5705V2.88672L8.05198 9.22975Z" />
                  <path d="M24 2.88672V15.5705L15.948 9.22975L24 2.88672Z" />
                  <path d="M24 17.0104V17.2658C24 17.3155 23.9593 17.354 23.9095 17.354H0.0904209C0.0406894 17.354 0 17.3155 0 17.2658V17.0104L0.34812 16.7368L8.96523 9.94849L10.0571 10.8075C10.629 11.2573 11.3139 11.4834 11.9989 11.4834C12.6838 11.4834 13.371 11.2573 13.9429 10.8075L15.0325 9.94849L23.6518 16.7368L24 17.0104Z" />
                  <path d="M24 0.0881604V1.44673L23.6518 1.72026L15.0325 8.50861L14.5759 8.86803L14.1192 9.22971L13.2421 9.91917C12.512 10.4956 11.488 10.4956 10.7556 9.91917L9.87848 9.22971L9.42412 8.87029L8.96523 8.50861L0.34812 1.72026L0 1.44673V0.0881604C0 0.0406894 0.0406894 0 0.0904209 0H23.9095C23.9593 0 24 0.0406894 24 0.0881604Z" />
                </svg>
              </span>
            </div>
            <div className="hero__cta__hana _02">
              <img src="/assets/image/icon-hana_saku.gif" alt="" />
            </div>
          </Link>
        </div>
        <div className="hero__copy">
          <div className="hero__copy__main_text">
            <img
              src="/assets/svg/hero-copy.svg"
              alt="これでいい じゃなく これがいい"
              width={228}
              height={156}
            />
          </div>
          <p className="hero__copy__sub_text _roboto">
            Not good enough. But just right.
          </p>
        </div>
      </div>
    </section>
  );
}
