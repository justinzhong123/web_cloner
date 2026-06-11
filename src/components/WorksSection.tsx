"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ArrowRightSmall, ChevronDown } from "@/components/icons";

interface WorkSlide {
  href: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  subText: string;
  mainText: string;
  categories: string[];
}

const slides: WorkSlide[] = [
  {
    href: "/works/siushimeijin/",
    image: "/assets/uploads/work-screenshot.png",
    width: 659,
    height: 414,
    alt: "",
    subText: "SUSHI MEIJIN",
    mainText: "寿司名人 Brand Art Direction",
    categories: [
      "ブランドアートディレクション",
      "グラフィック",
      "イラスト・キャラクター",
      "動画",
    ],
  },
  {
    href: "/works/tominojo-brand-art/",
    image: "/assets/uploads/work-pickup-2.png",
    width: 920,
    height: 578,
    alt: "",
    subText: "TOMINOJO",
    mainText: "富之上",
    categories: [
      "ブランドアートディレクション",
      "ロゴ",
      "WEBデザイン",
      "グラフィック",
      "イラスト・キャラクター",
      "動画",
      "SNS運用",
    ],
  },
  {
    href: "/works/tennomeshi-brand-site/",
    image: "/assets/uploads/work-pickup-4.png",
    width: 920,
    height: 578,
    alt: "",
    subText: "TEN NO MESHI",
    mainText: "天のめしブランド",
    categories: [
      "WEBデザイン",
      "グラフィック",
      "イラスト・キャラクター",
      "動画",
      "SNS運用",
    ],
  },
  {
    href: "/works/the-menchi/",
    image: "/assets/uploads/work-pickup-6.png",
    width: 920,
    height: 578,
    alt: "",
    subText: "THE MENCHI",
    mainText: "ザ・メンチ",
    categories: [
      "ブランドアートディレクション",
      "ロゴ",
      "WEBデザイン",
      "グラフィック",
      "イラスト・キャラクター",
      "動画",
      "SNS運用",
    ],
  },
  {
    href: "/works/unisia-recruit/",
    image: "/assets/uploads/work-unisia-recruit.jpg",
    width: 2160,
    height: 1437,
    alt: "ユニシアリクルートサムネ",
    subText: "UNISIA HOLDINGS RECRUIT",
    mainText: "ユニシアホールディングス リクルートサイト",
    categories: ["ブランドアートディレクション", "WEBデザイン", "動画"],
  },
  {
    href: "/works/kushikatsu_tanaka/",
    image: "/assets/uploads/blog-namechange.png",
    width: 920,
    height: 578,
    alt: "",
    subText: "KUSHIKATSU TANAKA",
    mainText: "串カツ田中Instagram運用",
    categories: ["グラフィック", "SNS運用"],
  },
];

/** Works (実績紹介) — featured PICK UP case + scrollable case-list carousel. */
export function WorksSection() {
  return (
    <section id="works">
      <div className="works__inner">
        <div className="works__heading _Anime">
          <h2 className="works__heading__main_text cmn_heading__main_text">
            <img
              src="/assets/svg/works-heading.svg"
              alt="美績紹介"
              width={228}
              height={54}
            />
          </h2>
          <p className="works__heading__sub_text cmn_heading__sub_text">
            <span style={{ transitionDelay: "0.05s" }}>W</span>
            <span style={{ transitionDelay: "0.09s" }}>O</span>
            <span style={{ transitionDelay: "0.13s" }}>R</span>
            <span style={{ transitionDelay: "0.16999999999999998s" }}>K</span>
            <span style={{ transitionDelay: "0.21000000000000002s" }}>S</span>
          </p>
        </div>
        <div className="works__new_item _Anime_middle">
          <div className="works__new_item__pick_up">
            <div className="works__new_item__pick_up__icon">
              <img src="/assets/image/index/new-badge.webp" alt="" />
            </div>
            <p className="works__new_item__pick_up__text _roboto">
              PICK
              <br />
              UP
            </p>
          </div>
          <a
            href="/works/unisia-brand-art-direction/"
            className="works__new_item__link"
          ></a>
          <div className="works__new_item__label_wrap">
            <span className="works__new_item__label">
              コーポレートブランドアートディレクション
            </span>
          </div>
          <div className="works__new_item__details">
            <div className="works__new_item__details__title">
              <p className="works__new_item__details__title__sub_text _roboto">
                UNISIA HOLDINGS Brand Art Direction
              </p>
              <p className="works__new_item__details__title__main_text">
                ユニシアホールディングス Brand Art Direction
              </p>
            </div>
            <p className="works__new_item__details__heading">
              多様な事業とグループのつながりを
            </p>
            <p className="works__new_item__details__text">
              ユニシアホールディングス（旧：串カツ田中ホールディングス）のロゴ・Webサイト・ビジョンマップを横断したブランドアートディレクションを担当しました。
              {"\n\n"}
              「UNI＝ひとつの」「S...
            </p>
            <ul className="works__new_item__details__category_list">
              <li className="works__new_item__details__category_list__item">
                ブランドアートディレクション
              </li>
              <li className="works__new_item__details__category_list__item">
                ロゴ
              </li>
              <li className="works__new_item__details__category_list__item">
                WEBデザイン
              </li>
              <li className="works__new_item__details__category_list__item">
                グラフィック
              </li>
              <li className="works__new_item__details__category_list__item">
                イラスト・キャラクター
              </li>
            </ul>
          </div>
          <div className="works__new_item__image">
            <img
              width={920}
              height={578}
              src="/assets/uploads/work-unisia.png"
              className="attachment-large size-large wp-post-image"
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="works__new_item__btn_wrap">
            <div className="works__new_item__btn">
              <span className="works__new_item__btn__text">VIEW MORE</span>
              <span className="works__new_item__btn__arrow cmn_arrow">
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
        <Swiper
          className="works__list swiper _Anime"
          modules={[Navigation]}
          navigation={{
            nextEl: ".works__nav__arrow._next",
            prevEl: ".works__nav__arrow._prev",
          }}
          slidesPerView="auto"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.href}
              className="works__list__item swiper-slide"
            >
              <a href={slide.href} className="works__list__item__link"></a>
              <div className="works__list__item__image">
                <img
                  width={slide.width}
                  height={slide.height}
                  src={slide.image}
                  className="attachment-small size-small wp-post-image"
                  alt={slide.alt}
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className="works__list__item__details">
                <div className="works__list__item__title">
                  <p className="works__list__item__title__sub_text _roboto">
                    {slide.subText}
                  </p>
                  <p className="works__list__item__title__main_text">
                    {slide.mainText}
                  </p>
                </div>
                <ul className="works__list__item__category_list">
                  {slide.categories.map((category) => (
                    <li
                      key={category}
                      className="works__list__item__category_list__item"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <div className="works__list__item__arrow cmn_arrow">
                  <ArrowRightSmall />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="works__nav__arrow_wrap" slot="container-end">
            <button
              className="works__nav__arrow _prev swiper-button-prev"
              type="button"
            >
              <ChevronDown />
            </button>
            <button
              className="works__nav__arrow _next swiper-button-next"
              type="button"
            >
              <ChevronDown />
            </button>
          </div>
        </Swiper>
        <div className="works__nav">
          <span className="works__nav__current _roboto">01</span>
          <div className="works__nav__scrollbar">
            <div className="works__nav__scrollbar__progress"></div>
            <button
              className="works__nav__scrollbar__handle"
              type="button"
              aria-label="スライドハンドル"
            ></button>
          </div>
          <span className="works__nav__total _roboto">01</span>
        </div>
        <div className="works__btn_wrap cmn_btn_wrap">
          <a href="/works/" className="cmn_btn">
            <span className="cmn_btn__text _roboto">VIEW ALL</span>
            <span className="cmn_btn__arrow cmn_arrow">
              <ArrowRightSmall />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
