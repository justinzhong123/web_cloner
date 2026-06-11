import { ArrowRightSmall, ExternalLinkIcon } from "@/components/icons";

/** Blog (みんなのつぶやき) — 2 latest posts + VIEW ALL. */
export function BlogSection() {
  return (
    <section id="blog">
      <div className="blog__inner">
        <div className="blog__contents">
          <div className="blog__contents__inner">
            <div className="blog__contents__top">
              <div className="blog__heading _Anime">
                <div className="blog__heading__main_text_wrap">
                  <div className="blog__heading__icon">
                    <img src="/assets/image/index/icon-fukidashi.gif" alt="" />
                  </div>
                  <h2 className="blog__heading__main_text cmn_heading__main_text">
                    <img
                      src="/assets/svg/blog-heading.svg"
                      alt="みんなのつぶやき"
                      width={228}
                      height={54}
                    />
                  </h2>
                </div>
                <p className="blog__heading__sub_text cmn_heading__sub_text">
                  <span style={{ transitionDelay: "0.05s" }}>B</span>
                  <span style={{ transitionDelay: "0.09s" }}>L</span>
                  <span style={{ transitionDelay: "0.13s" }}>O</span>
                  <span style={{ transitionDelay: "0.16999999999999998s" }}>G</span>
                </p>
              </div>
              <div className="blog__obj _Anime">
                <div className="blog__obj__balloon">
                  <span className="blog__obj__balloon__text">
                    <span style={{ transitionDelay: "0.90s" }}>仕</span>
                    <span style={{ transitionDelay: "0.92s" }}>事</span>
                    <span style={{ transitionDelay: "0.94s" }}>の</span>
                    <span style={{ transitionDelay: "0.96s" }}>こ</span>
                    <span style={{ transitionDelay: "0.98s" }}>と</span>
                    <span style={{ transitionDelay: "1.00s" }}>も</span>
                    <span style={{ transitionDelay: "1.02s" }}>、</span>
                    <span style={{ transitionDelay: "1.04s" }}>ち</span>
                    <span style={{ transitionDelay: "1.06s" }}>ょ</span>
                    <span style={{ transitionDelay: "1.08s" }}>っ</span>
                    <span style={{ transitionDelay: "1.10s" }}>と</span>
                    <span style={{ transitionDelay: "1.12s" }}>し</span>
                    <span style={{ transitionDelay: "1.14s" }}>た</span>
                    <span style={{ transitionDelay: "1.16s" }}>日</span>
                    <span style={{ transitionDelay: "1.18s" }}>常</span>
                    <span style={{ transitionDelay: "1.20s" }}>も</span>
                  </span>
                  <span className="blog__obj__balloon__line" />
                </div>
                <div className="blog__obj__character">
                  <img src="/assets/image/index/blog-character.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="blog__list_wrap _Anime">
              <ul className="blog__list">
                <li className="blog__list__item">
                  <a
                    href="https://note.com/etohalab/n/n70bef1804938"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog__list__item__link"
                  >
                    <figure className="blog__list__item__thumbnail">
                      <img
                        src="https://assets.st-note.com/production/uploads/images/277238205/rectangle_large_type_2_3a5f8570437dd3d5fc00309601b3ca25.png?width=800"
                        alt=""
                        width="374"
                        height="267"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <div className="blog__list__item__details">
                      <time className="blog__list__item__date _roboto" dateTime="2026-05-18">
                        2026.05.18
                      </time>
                      <h3 className="blog__list__item__title">
                        株式会社ETOHA LABは株式会社ユニシアホールディングスのグループ会社です。
                      </h3>
                      <div className="blog__list__item__author">
                        <span className="blog__list__item__author__icon">
                          <img
                            src="https://assets.st-note.com/production/uploads/images/277782749/profile_951de94a19c51b914eecda73a90362e1.png?fit=bounds&format=jpeg&quality=85&width=330"
                            alt=""
                            width="20"
                            height="20"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span className="blog__list__item__author__name">株式会社ETOHA LAB</span>
                      </div>
                      <span className="blog__list__item__arrow cmn_arrow">
                        <ArrowRightSmall />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="blog__list__item">
                  <a
                    href="https://note.com/etohalab/n/n15fb02e16811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog__list__item__link"
                  >
                    <figure className="blog__list__item__thumbnail">
                      <img
                        src="https://assets.st-note.com/production/uploads/images/277229996/rectangle_large_type_2_e48e4dc50106d3f2326689f02d621532.png?width=800"
                        alt=""
                        width="374"
                        height="267"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <div className="blog__list__item__details">
                      <time className="blog__list__item__date _roboto" dateTime="2026-05-18">
                        2026.05.18
                      </time>
                      <h3 className="blog__list__item__title">社名変更しました！</h3>
                      <div className="blog__list__item__author">
                        <span className="blog__list__item__author__icon">
                          <img
                            src="https://assets.st-note.com/production/uploads/images/277782749/profile_951de94a19c51b914eecda73a90362e1.png?fit=bounds&format=jpeg&quality=85&width=330"
                            alt=""
                            width="20"
                            height="20"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span className="blog__list__item__author__name">株式会社ETOHA LAB</span>
                      </div>
                      <span className="blog__list__item__arrow cmn_arrow">
                        <ArrowRightSmall />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="blog__btn_wrap cmn_btn_wrap">
                <a
                  href="https://note.com/etohalab/all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cmn_btn _external"
                >
                  <span className="cmn_btn__text _roboto">VIEW ALL</span>
                  <span className="cmn_btn__external_icon">
                    <ExternalLinkIcon />
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
