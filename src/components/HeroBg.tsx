"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Wireframe-grid background tiles behind the hero. Fades to opacity 0 as user scrolls past the hero. */
export function HeroBg() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#hero_bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="hero_bg">
      <div className="hero_bg__inner">
        <div className="hero_bg__main">
          <img
            src="/assets/image/index/hero_bg-main_bg.webp"
            width="598"
            height="955"
            alt=""
          />
          <img
            src="/assets/image/index/hero_bg-main_texture.webp"
            width="598"
            height="955"
            alt=""
          />
          <div className="hero_bg__main__character">
            <img
              src="/assets/image/index/hero_bg-character.webp"
              width="592"
              height="597"
              alt=""
            />
          </div>
        </div>
        <div className="hero_bg__image _01">
          <img
            src="/assets/image/index/hero_bg-image_01.webp"
            width="578"
            height="916"
            alt=""
          />
        </div>
        <div className="hero_bg__image _02">
          <img
            src="/assets/image/index/hero_bg-image_02.webp"
            width="554"
            height="898"
            alt=""
          />
        </div>
        <div className="hero_bg__image _03">
          <img
            src="/assets/image/index/hero_bg-image_03.webp"
            width="562"
            height="868"
            alt=""
          />
        </div>
        <div className="hero_bg__image _04">
          <img
            src="/assets/image/index/hero_bg-image_04.webp"
            width="552"
            height="924"
            alt=""
          />
        </div>
        <div className="hero_bg__image _05">
          <img
            src="/assets/image/index/hero_bg-image_05.webp"
            width="536"
            height="846"
            alt=""
          />
        </div>
        <div className="hero_bg__image _06">
          <img
            src="/assets/image/index/hero_bg-image_06.webp"
            width="562"
            height="868"
            alt=""
          />
        </div>
        <div className="hero_bg__image _07">
          <img
            src="/assets/image/index/hero_bg-image_07.webp"
            width="518"
            height="822"
            alt=""
          />
        </div>
        <div className="hero_bg__image _08">
          <img
            src="/assets/image/index/hero_bg-image_08.webp"
            width="544"
            height="840"
            alt=""
          />
        </div>
        <div className="hero_bg__image _09">
          <img
            src="/assets/image/index/hero_bg-image_09.webp"
            width="562"
            height="914"
            alt=""
          />
        </div>
        <div className="hero_bg__image _10">
          <img
            src="/assets/image/index/hero_bg-image_10.webp"
            width="520"
            height="862"
            alt=""
          />
        </div>
        <div className="hero_bg__image _11">
          <img
            src="/assets/image/index/hero_bg-image_11.webp"
            width="522"
            height="862"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
