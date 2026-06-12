"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightSmall } from "@/components/icons";

/** Contact CTA — meditating character + 相談してみる link. */
export function ContactSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".contact_sec__character", {
      xPercent: -50,
      yPercent: -75,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact_sec",
        start: "top 60%",
        end: "top 30%",
        scrub: false,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".contact_sec__character", {
      opacity: 1,
      yPercent: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="contact_sec">
      <div className="contact_sec__inner">
        <div className="contact_sec__contents_wrap">
          <Link className="contact_sec__contents" href="/contact/">
            <div
              className="contact_sec__contents_bg"
              style={{ transform: "translate(-50%, -100%)" }}
            />
            <div className="contact_sec__balloon">
              <span className="contact_sec__balloon__text">
                <span style={{ ["--delay" as string]: "0.30s" }}>や</span>
                <span style={{ ["--delay" as string]: "0.32s" }}>り</span>
                <span style={{ ["--delay" as string]: "0.34s" }}>た</span>
                <span style={{ ["--delay" as string]: "0.36s" }}>い</span>
                <span style={{ ["--delay" as string]: "0.38s" }}>こ</span>
                <span style={{ ["--delay" as string]: "0.40s" }}>と</span>
                <span style={{ ["--delay" as string]: "0.42s" }}>が</span>
                <span style={{ ["--delay" as string]: "0.44s" }}>ま</span>
                <span style={{ ["--delay" as string]: "0.46s" }}>だ</span>
                <span style={{ ["--delay" as string]: "0.48s" }}>曖</span>
                <span style={{ ["--delay" as string]: "0.50s" }}>昧</span>
                <span style={{ ["--delay" as string]: "0.52s" }}>で</span>
                <span style={{ ["--delay" as string]: "0.54s" }}>も</span>
                <span style={{ ["--delay" as string]: "0.56s" }}>大</span>
                <span style={{ ["--delay" as string]: "0.58s" }}>丈</span>
                <span style={{ ["--delay" as string]: "0.60s" }}>夫</span>
                <span style={{ ["--delay" as string]: "0.62s" }}>で</span>
                <span style={{ ["--delay" as string]: "0.64s" }}>す</span>
                <span style={{ ["--delay" as string]: "0.66s" }}>！</span>
              </span>
              <span className="contact_sec__balloon__line" />
            </div>
            <div className="contact_sec__heading">
              <div className="contact_sec__heading__main_text_wrap">
                <h2 className="contact_sec__heading__main_text cmn_heading__main_text">
                  <img
                    src="/assets/svg/contact-heading.svg"
                    alt="相談してみる"
                    width={228}
                    height={54}
                  />
                </h2>
                <div className="contact_sec__heading__arrow cmn_arrow">
                  <ArrowRightSmall />
                </div>
              </div>
              <p className="contact_sec__heading__sub_text cmn_heading__sub_text">
                <span style={{ transitionDelay: "0.05s" }}>C</span>
                <span style={{ transitionDelay: "0.09s" }}>O</span>
                <span style={{ transitionDelay: "0.13s" }}>N</span>
                <span style={{ transitionDelay: "0.16999999999999998s" }}>T</span>
                <span style={{ transitionDelay: "0.21000000000000002s" }}>A</span>
                <span style={{ transitionDelay: "0.25s" }}>C</span>
                <span style={{ transitionDelay: "0.29s" }}>T</span>
              </p>
            </div>
          </Link>
          <div className="contact_sec__character">
            <img src="/assets/image/contact_sec-character.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
