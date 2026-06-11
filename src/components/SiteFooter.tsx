import Link from "next/link";
import { ArrowRightSmall } from "@/components/icons";

/** Site footer — logo + nav box + copyright on blue band. */
export function SiteFooter() {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <Link href="/" className="footer__logo__link">
            <img
              src="/assets/svg/etoha-logo.svg"
              alt="ETOHA LAB"
              width={60}
              height={85}
            />
          </Link>
        </div>
        <div className="footer__menu">
          <ul className="footer__menu__list">
            <li className="footer__menu__list__item">
              <Link href="/about" className="footer__menu__list__item__link">
                <span className="footer__menu__list__item__arrow">
                  <ArrowRightSmall />
                </span>
                <span className="footer__menu__list__item__en_text _roboto">
                  ABOUT US
                </span>
                <span className="footer__menu__list__item__ja_text">
                  私たちについて
                </span>
              </Link>
            </li>
            <li className="footer__menu__list__item">
              <Link href="/works" className="footer__menu__list__item__link">
                <span className="footer__menu__list__item__arrow">
                  <ArrowRightSmall />
                </span>
                <span className="footer__menu__list__item__en_text _roboto">
                  WORKS
                </span>
                <span className="footer__menu__list__item__ja_text">
                  実績紹介
                </span>
              </Link>
            </li>
            <li className="footer__menu__list__item">
              <Link href="/service" className="footer__menu__list__item__link">
                <span className="footer__menu__list__item__arrow">
                  <ArrowRightSmall />
                </span>
                <span className="footer__menu__list__item__en_text _roboto">
                  SERVICE
                </span>
                <span className="footer__menu__list__item__ja_text">
                  事業内容
                </span>
              </Link>
            </li>
            <li className="footer__menu__list__item">
              <a
                href="https://note.com/etohalab/all"
                className="footer__menu__list__item__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer__menu__list__item__arrow">
                  <ArrowRightSmall />
                </span>
                <span className="footer__menu__list__item__en_text _roboto">
                  BLOG
                </span>
                <span className="footer__menu__list__item__ja_text">
                  ブログ
                </span>
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright _roboto">
          Copyright © 2024 ETOHA LAB All rights reserved.
        </p>
      </div>
    </footer>
  );
}
