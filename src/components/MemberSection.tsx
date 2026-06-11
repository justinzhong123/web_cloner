import { ArrowRightSmall } from "@/components/icons";

/** Member (ETOHA LAB のみんな) — 6 character cards. */
export function MemberSection() {
  return (
    <section id="member">
      <div className="member__inner">
        <div className="member__contents">
          <div className="member__obj _Anime">
            <div className="member__obj__character">
              <img src="/assets/image/index/member-character.webp" alt="" />
            </div>
          </div>
          <div className="member__contents__inner">
            <div className="member__heading _Anime">
              <h2 className="member__heading__main_text cmn_heading__main_text">
                <img
                  src="/assets/svg/member-heading.svg"
                  alt="ETOHA LAB のみんな"
                  width={228}
                  height={54}
                />
              </h2>
              <p className="member__heading__sub_text cmn_heading__sub_text">
                <span style={{ transitionDelay: "0.05s" }}>M</span>
                <span style={{ transitionDelay: "0.09s" }}>E</span>
                <span style={{ transitionDelay: "0.13s" }}>M</span>
                <span style={{ transitionDelay: "0.16999999999999998s" }}>B</span>
                <span style={{ transitionDelay: "0.21000000000000002s" }}>E</span>
                <span style={{ transitionDelay: "0.25s" }}>R</span>
              </p>
            </div>
            <div className="member__list_wrap _Anime">
              <ul className="member__list">
                <li className="member__list__item">
                  <p className="member__list__item__position _roboto">CEO</p>
                  <div className="member__list__item__contents">
                    <div className="member__list__item__image">
                      <img src="/assets/image/index/member-osuga.webp" alt="OSUGA" />
                    </div>
                    <div className="member__list__item__profile">
                      <p className="member__list__item__profile__position">代 表</p>
                      <div className="member__list__item__profile__name_wrap">
                        <p className="member__list__item__profile__name__main_text">おおすが</p>
                        <p className="member__list__item__profile__name__sub_text _roboto">OSUGA</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="member__list__item">
                  <p className="member__list__item__position _roboto">Creative Director</p>
                  <div className="member__list__item__contents">
                    <div className="member__list__item__image">
                      <img src="/assets/image/index/member-imase.webp" alt="IMASE" />
                    </div>
                    <div className="member__list__item__profile">
                      <p className="member__list__item__profile__position">CD / イラストレーター</p>
                      <div className="member__list__item__profile__name_wrap">
                        <p className="member__list__item__profile__name__main_text">いませ</p>
                        <p className="member__list__item__profile__name__sub_text _roboto">IMASE</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="member__list__item">
                  <p className="member__list__item__position _roboto">Sales Director</p>
                  <div className="member__list__item__contents">
                    <div className="member__list__item__image">
                      <img src="/assets/image/index/member-kurosawa.webp" alt="KUROSAWA" />
                    </div>
                    <div className="member__list__item__profile">
                      <p className="member__list__item__profile__position">営業部長</p>
                      <div className="member__list__item__profile__name_wrap">
                        <p className="member__list__item__profile__name__main_text">くろさわ</p>
                        <p className="member__list__item__profile__name__sub_text _roboto">KUROSAWA</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="member__list__item">
                  <p className="member__list__item__position _roboto">Designer</p>
                  <div className="member__list__item__contents">
                    <div className="member__list__item__image">
                      <img src="/assets/image/index/member-asaka.webp" alt="ASAKA" />
                    </div>
                    <div className="member__list__item__profile">
                      <p className="member__list__item__profile__position">デザイナー</p>
                      <div className="member__list__item__profile__name_wrap">
                        <p className="member__list__item__profile__name__main_text">あさか</p>
                        <p className="member__list__item__profile__name__sub_text _roboto">ASAKA</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="member__list__item">
                  <p className="member__list__item__position _roboto">Designer</p>
                  <div className="member__list__item__contents">
                    <div className="member__list__item__image">
                      <img src="/assets/image/index/member-shuri.webp" alt="SHURI" />
                    </div>
                    <div className="member__list__item__profile">
                      <p className="member__list__item__profile__position">デザイナー</p>
                      <div className="member__list__item__profile__name_wrap">
                        <p className="member__list__item__profile__name__main_text">しゅり</p>
                        <p className="member__list__item__profile__name__sub_text _roboto">SHURI</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="member__list__item">
                  <div className="member__list__item__new_icon">
                    <img src="/assets/image/index/member-balloon.webp" alt="" />
                    <p className="member__list__item__new_icon__text">
                      今年
                      <br />
                      入社
                    </p>
                  </div>
                  <p className="member__list__item__position _roboto">Assistant Designer</p>
                  <div className="member__list__item__contents">
                    <div className="member__list__item__image">
                      <img src="/assets/image/index/member-fuka.webp" alt="FUKA" />
                    </div>
                    <div className="member__list__item__profile">
                      <p className="member__list__item__profile__position">アシスタントデザイナー</p>
                      <div className="member__list__item__profile__name_wrap">
                        <p className="member__list__item__profile__name__main_text">ふうか</p>
                        <p className="member__list__item__profile__name__sub_text _roboto">FUKA</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="member__btn_wrap cmn_btn_wrap">
                <a href="/about/#member" className="cmn_btn">
                  <span className="cmn_btn__text _roboto">VIEW ALL</span>
                  <span className="cmn_btn__arrow cmn_arrow">
                    <ArrowRightSmall />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
