import Link from "next/link";
import { ArrowRightSmall } from "@/components/icons";

/** Global navigation pill — sticky at top of viewport. */
export function Header() {
  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link href="/" className="header__logo_link">
            <img
              src="/assets/svg/etoha-logo.svg"
              alt="ETOHA LAB"
              width={60}
              height={85}
            />
          </Link>
        </div>
        <div className="global_nav">
          <div className="global_nav__inner">
            <div className="global_nav__wrap">
              <div className="global_nav__character view_sp">
                <div className="global_nav__character__wrap">
                  <div className="global_nav__character__image">
                    <img src="/assets/image/global_nav-character.webp" />
                  </div>
                  <div className="global_nav__character__lines">
                    <img src="/assets/image/global_nav-lines.webp" />
                  </div>
                </div>
              </div>
              <nav className="global_nav__menu">
                <ul className="global_nav__menu_list">
                  <li className="global_nav__menu_list__item view_sp">
                    <Link href="/" className="global_nav__menu_list__item__link">
                      <span className="global_nav__menu_list__item__link__en_text">TOP</span>
                      <span className="global_nav__menu_list__item__link__ja_text view_sp">トップページ</span>
                      <span className="global_nav__menu_list__item__link__arrow view_sp">
                        <ArrowRightSmall />
                      </span>
                    </Link>
                  </li>
                  <li className="global_nav__menu_list__item">
                    <Link href="/about" className="global_nav__menu_list__item__link">
                      <span className="global_nav__menu_list__item__link__en_text">ABOUT US</span>
                      <span className="global_nav__menu_list__item__link__ja_text view_sp">私たちについて</span>
                      <span className="global_nav__menu_list__item__link__arrow view_sp">
                        <ArrowRightSmall />
                      </span>
                    </Link>
                  </li>
                  <li className="global_nav__menu_list__item">
                    <Link href="/works" className="global_nav__menu_list__item__link">
                      <span className="global_nav__menu_list__item__link__en_text">WORKS</span>
                      <span className="global_nav__menu_list__item__link__ja_text view_sp">実績紹介</span>
                      <span className="global_nav__menu_list__item__link__arrow view_sp">
                        <ArrowRightSmall />
                      </span>
                    </Link>
                  </li>
                  <li className="global_nav__menu_list__item">
                    <Link href="/service" className="global_nav__menu_list__item__link">
                      <span className="global_nav__menu_list__item__link__en_text">SERVICE</span>
                      <span className="global_nav__menu_list__item__link__ja_text view_sp">事業内容</span>
                      <span className="global_nav__menu_list__item__link__arrow view_sp">
                        <ArrowRightSmall />
                      </span>
                    </Link>
                  </li>
                  <li className="global_nav__menu_list__item">
                    <a
                      href="https://note.com/etohalab/all"
                      className="global_nav__menu_list__item__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="global_nav__menu_list__item__link__en_text">BLOG</span>
                      <span className="global_nav__menu_list__item__link__ja_text view_sp">ブログ</span>
                      <span className="global_nav__menu_list__item__link__arrow view_sp">
                        <ArrowRightSmall />
                      </span>
                    </a>
                  </li>
                  <li className="global_nav__menu_list__item _contact">
                    <Link href="/contact" className="global_nav__menu_list__item__link">
                      <span className="global_nav__menu_list__item__link__en_text">CONTACT</span>
                      <span className="global_nav__menu_list__item__link__ja_text view_sp">お問い合わせ</span>
                      <span className="global_nav__menu_list__item__link__arrow">
                        <ArrowRightSmall />
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="global_nav__bottom view_sp">
              <div className="global_nav__bottom__image _01">
                <img src="/assets/image/global_nav-obj_01.webp" />
              </div>
              <div className="global_nav__bottom__image _02">
                <img src="/assets/image/global_nav-obj_02.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="header__hamburger view_sp">
          <button className="hbg_btn">
            <span className="hbg_btn_line" />
          </button>
        </div>
      </div>
    </header>
  );
}
