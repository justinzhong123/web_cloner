"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightSmall } from "@/components/icons";

/** Service section — scroll-driven pinned panel with 4 service cards. */
export function ServiceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const navItems = section.querySelectorAll<HTMLElement>(
      ".service__nav__list__item",
    );
    const cardItems = section.querySelectorAll<HTMLElement>(
      ".service__contents__card_list__item",
    );

    const setActive = (idx: number) => {
      navItems.forEach((el, i) => {
        el.classList.toggle("_active", i === idx);
      });
      cardItems.forEach((el, i) => {
        el.classList.toggle("_active", i === idx);
      });
    };

    setActive(0);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: ".service__inner",
      pinSpacing: false,
      onUpdate: (self) => {
        const idx = Math.min(3, Math.floor(self.progress * 4));
        setActive(idx);
      },
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="service" ref={sectionRef}>
      <div className="service__inner">
        <div className="service__obj" aria-hidden="true">
          <div className="service__obj__belt">
            <div className="service__obj__belt__inner">
              <div className="service__obj__belt__item">
                <img
                  src="/assets/svg/service-belt-text.svg"
                  alt="ETOHA LAB が支える"
                  width={1523}
                  height={178}
                />
                <img
                  src="/assets/svg/service-belt-text.svg"
                  alt="ETOHA LAB が支える"
                  width={1523}
                  height={178}
                />
              </div>
              <div className="service__obj__belt__item">
                <img
                  src="/assets/svg/service-belt-text.svg"
                  alt="ETOHA LAB が支える"
                  width={1523}
                  height={178}
                />
                <img
                  src="/assets/svg/service-belt-text.svg"
                  alt="ETOHA LAB が支える"
                  width={1523}
                  height={178}
                />
              </div>
            </div>
          </div>
          <div className="service__obj__character">
            <img src="/assets/image/index/service-character.webp" alt="" />
          </div>
        </div>
        <div className="service__contents">
          <div className="service__contents__inner">
            <div className="service__contents__left">
              <div className="service__heading _Anime">
                <h2 className="service__heading__main_text cmn_heading__main_text">
                  <img
                    src="/assets/svg/service-heading.svg"
                    alt="SERVICE"
                    width={216}
                    height={58}
                  />
                </h2>
                <p className="service__heading__sub_text cmn_heading__sub_text">
                  <span style={{ transitionDelay: "0.05s" }}>S</span>
                  <span style={{ transitionDelay: "0.09s" }}>E</span>
                  <span style={{ transitionDelay: "0.13s" }}>R</span>
                  <span style={{ transitionDelay: "0.16999999999999998s" }}>
                    V
                  </span>
                  <span style={{ transitionDelay: "0.21000000000000002s" }}>
                    I
                  </span>
                  <span style={{ transitionDelay: "0.25s" }}>C</span>
                  <span style={{ transitionDelay: "0.29s" }}>E</span>
                </p>
              </div>
              <div className="service__nav_wrap">
                <div className="service__nav _Anime_middle">
                  <ul className="service__nav__list">
                    <li className="service__nav__list__item _active">
                      <span className="service__nav__list__item__en_text _roboto">
                        GRAPHIC DESIGN
                      </span>
                      <span className="service__nav__list__item__ja_text">
                        ブランドを育てるデザイン
                      </span>
                    </li>
                    <li className="service__nav__list__item">
                      <span className="service__nav__list__item__line" />
                      <span className="service__nav__list__item__en_text _roboto">
                        WEB SITE
                      </span>
                      <span className="service__nav__list__item__ja_text">
                        想いが伝わるWebサイト
                      </span>
                    </li>
                    <li className="service__nav__list__item">
                      <span className="service__nav__list__item__line" />
                      <span className="service__nav__list__item__en_text _roboto">
                        PROMOTION
                      </span>
                      <span className="service__nav__list__item__ja_text">
                        ファンをつくるプロモーション
                      </span>
                    </li>
                    <li className="service__nav__list__item">
                      <span className="service__nav__list__item__line" />
                      <span className="service__nav__list__item__en_text _roboto">
                        MOVIE
                      </span>
                      <span className="service__nav__list__item__ja_text">
                        世界観を動かす動画
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service__btn_wrap _Anime">
                <Link href="/service/" className="cmn_btn">
                  <span className="cmn_btn__text">
                    ETOHA LAB ができること
                  </span>
                  <span className="cmn_btn__arrow cmn_arrow">
                    <ArrowRightSmall />
                  </span>
                </Link>
              </div>
            </div>
            <div className="service__contents__right">
              <ul className="service__contents__card_list">
                <li className="service__contents__card_list__item _01 _active">
                  <div className="service__contents__card_list__item__inner">
                    <div className="service__contents__card_list__item__number">
                      <p className="service__contents__card_list__item__number__text _roboto">
                        01
                      </p>
                    </div>
                    <p className="service__contents__card_list__item__sub_heading _roboto">
                      GRAPHIC DESIGN
                    </p>
                    <div className="service__contents__card_list__item__image">
                      <img
                        src="/assets/image/index/service-image.webp"
                        alt=""
                      />
                    </div>
                    <div className="service__contents__card_list__item__contents">
                      <h3 className="service__contents__card_list__item__heading">
                        ブランドを育てる<br />デザイン
                      </h3>
                      <div className="service__contents__card_list__item__category_wrap">
                        <ul className="service__contents__card_list__item__category_list">
                          <li className="service__contents__card_list__item__category_list__item">
                            ロゴ
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            パンフレット
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            飲食店メニュー
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            チラシ
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            看板
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            イラスト/キャラデザイン
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            ビジネスツール(名刺・封筒)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="service__contents__card_list__item__etc">
                      など...
                    </p>
                  </div>
                </li>
                <li className="service__contents__card_list__item _02">
                  <div className="service__contents__card_list__item__inner">
                    <div className="service__contents__card_list__item__number">
                      <p className="service__contents__card_list__item__number__text _roboto">
                        02
                      </p>
                    </div>
                    <p className="service__contents__card_list__item__sub_heading _roboto">
                      WEB SITE
                    </p>
                    <div className="service__contents__card_list__item__image">
                      <img
                        src="/assets/image/index/service-image.webp"
                        alt=""
                      />
                    </div>
                    <div className="service__contents__card_list__item__contents">
                      <h3 className="service__contents__card_list__item__heading">
                        想いが伝わる<br />Webサイト
                      </h3>
                      <div className="service__contents__card_list__item__category_wrap">
                        <ul className="service__contents__card_list__item__category_list">
                          <li className="service__contents__card_list__item__category_list__item">
                            コーポレートサイト
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            ブランドサイト
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            採用サイト
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            ECサイト
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            LP
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="service__contents__card_list__item__etc">
                      など...
                    </p>
                  </div>
                </li>
                <li className="service__contents__card_list__item _03">
                  <div className="service__contents__card_list__item__inner">
                    <div className="service__contents__card_list__item__number">
                      <p className="service__contents__card_list__item__number__text _roboto">
                        03
                      </p>
                    </div>
                    <p className="service__contents__card_list__item__sub_heading _roboto">
                      PROMOTION
                    </p>
                    <div className="service__contents__card_list__item__image">
                      <img
                        src="/assets/image/index/service-image.webp"
                        alt=""
                      />
                    </div>
                    <div className="service__contents__card_list__item__contents">
                      <h3 className="service__contents__card_list__item__heading">
                        ファンをつくる<br />プロモーション
                      </h3>
                      <div className="service__contents__card_list__item__category_wrap">
                        <ul className="service__contents__card_list__item__category_list">
                          <li className="service__contents__card_list__item__category_list__item">
                            SNS投稿デザイン
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            ブランディング
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="service__contents__card_list__item__etc">
                      など...
                    </p>
                  </div>
                </li>
                <li className="service__contents__card_list__item _04">
                  <div className="service__contents__card_list__item__inner">
                    <div className="service__contents__card_list__item__number">
                      <p className="service__contents__card_list__item__number__text _roboto">
                        04
                      </p>
                    </div>
                    <p className="service__contents__card_list__item__sub_heading _roboto">
                      MOVIE
                    </p>
                    <div className="service__contents__card_list__item__image">
                      <img
                        src="/assets/image/index/service-image.webp"
                        alt=""
                      />
                    </div>
                    <div className="service__contents__card_list__item__contents">
                      <h3 className="service__contents__card_list__item__heading">
                        世界観を<br />動かす動画
                      </h3>
                      <div className="service__contents__card_list__item__category_wrap">
                        <ul className="service__contents__card_list__item__category_list">
                          <li className="service__contents__card_list__item__category_list__item">
                            プロモーション動画
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            SNS動画
                          </li>
                          <li className="service__contents__card_list__item__category_list__item">
                            WEB動画
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="service__contents__card_list__item__etc">
                      など...
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
