import Link from "next/link";
import { ArrowRight } from "@/components/icons";

/** About section — intro text + character carousel card. */
export function AboutSection() {
  return (
    <section id="about">
      <div className="about__inner">
        <div className="about__contents _Anime">
          <div className="about__contents__left">
            <div className="about__logo">
              <img
                src="/assets/svg/etoha-logo.svg"
                alt="ETOHA LAB"
                width={60}
                height={85}
              />
            </div>
            <h2 className="about__heading">ABOUT US</h2>
          </div>
          <div className="about__contents__right">
            <p className="about__contents__ja_text">
              自信を持って“好き”と<br className="sp" />言えるものを届けたい。
              <br />
              それはお客様にとっても<br className="sp" />私たちにとっても。
              <br />
              生まれたてのブランドから大手企業まで
              <br />
              “らしさ”を一緒に育てる<br className="sp" />デザインチームです。
            </p>
            <p className="about__contents__en_text _roboto">
              We want to deliver work we can confidently say we love—for our clients, and for ourselves.From newly launched brands to established companies,we’re a design team that grows “what makes you you,” together.
            </p>
            <div className="about__contents__btn_wrap">
              <Link href="/about/" className="about__contents__btn">
                <span className="about__contents__btn__text _roboto">VIEW MORE</span>
                <span className="about__contents__btn__arrow cmn_arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
