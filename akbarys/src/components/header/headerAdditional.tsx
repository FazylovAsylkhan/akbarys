import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './headerAdditional.scss';

import DarkLogo from '../../images/logo-dark.svg';
import LightLogo from '../../images/logo-light.svg';

const HeaderAdditional = () => {
  // const getLinks = () => {
  //   const links = data.headerContent.links.slice();
  //   return links.map((link) => (
  //     <li className="headerAdditional__list-item" key={link.text}>
  //       <Link className="headerAdditional__link" to={link.url}>
  //         {link.text}
  //       </Link>
  //     </li>
  //   ));
  // };

  const headerRef = useRef<null | HTMLElement>(null);
  const showMenu = () => {
    headerRef.current?.classList.toggle('active');
    headerRef.current
      ?.querySelectorAll('.headerAdditional__image')[0]
      .classList.toggle('hide');
  };
  let prevScrollPosition = 0;
  let header: null | Element = null;
  useEffect(() => {
    header = document.querySelector('.headerAdditional');
    if (
      !document.querySelector('.pressCenterNews')
      && !document.querySelector('.page404')
      && !document.querySelector('.politics')
    ) {
      header?.classList.add('headerAdditional_special');
    } else {
      header?.classList.remove('headerAdditional_special');
    }
    document.addEventListener('scroll', () => {
      const currentScrollPosition = window.pageYOffset;
      const heightScreen = document.documentElement.clientHeight;
      if (header) {
        if (prevScrollPosition > currentScrollPosition) {
          header.classList.remove('hide');
          header.classList.add('show');
        } else if (header.classList.contains('show')) {
          header.classList.remove('show');
          header.classList.add('hide');
        }
        if (
          heightScreen > window.pageYOffset
          && !document.querySelector('.pressCenterNews')
          && !document.querySelector('.page404')
          && !document.querySelector('.politics')
        ) {
          header.classList.add('headerAdditional_special');
        } else {
          header.classList.remove('headerAdditional_special');
        }
        prevScrollPosition = window.pageYOffset;
      }
    });
    document.addEventListener('click', (e) => {
      const element = e.target as HTMLElement;
      if (element.classList.contains('sub-menu-btn')) {
        header?.classList.toggle('show-sub-menu');
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      slot="container-start"
      className="headerAdditional headerAdditional_special show"
    >
      <div className="headerAdditional__wrapper container">
        <DarkLogo
          className="headerAdditional__image headerAdditional__image_dark"
          alt="logo"
        />
        <LightLogo
          className="headerAdditional__image headerAdditional__image_light"
          alt="logo"
        />
        <div
          className="headerAdditional__burger"
          onClick={() => showMenu()}
        ></div>
        <nav className="headerAdditional__menu">
          <ul className="headerAdditional__list">
            <li className="headerAdditional__list-item">
              <Link className="headerAdditional__link text-header" to="/">
                Компания
              </Link>
            </li>
            <li className="headerAdditional__list-item headerAdditional__list-sub-item">
              <span className="headerAdditional__link sub-menu-btn text-header">
                Решения и услуги
              </span>
              <ul className="headerAdditional__sub-list">
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/h2s-service"
                  >
                    Газовая безопасность
                  </Link>
                </li>
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/sft-service"
                  >
                    Нейтрализация сероводорода
                  </Link>
                </li>
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/verification-laboratory"
                  >
                    Лаборатория
                  </Link>
                </li>
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/service-center"
                  >
                    Сервисный центр
                  </Link>
                </li>
              </ul>
            </li>
            <li className="headerAdditional__list-item headerAdditional__list-main-item ">
              <ul className="headerAdditional__main-list">
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/press-center/"
                  >
                    Пресс-центр
                  </Link>
                </li>
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/career/"
                  >
                    Карьера
                  </Link>
                </li>
                <li className="headerAdditional__list-item">
                  <Link
                    className="headerAdditional__link text-header"
                    to="/contacts/"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <DarkLogo
            className="headerAdditional__image headerAdditional__image_additional "
            alt="logo"
          />
          <div className="lang">
            <span>
              <Link className="headerAdditional__link text-header blue" to="/">
                Рус
              </Link>
              /
              <Link className="headerAdditional__link text-header" to="/">
                En
              </Link>
              /
              <Link className="headerAdditional__link text-header" to="/">
                &#1178;аз
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderAdditional;
