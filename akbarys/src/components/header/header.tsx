// import data from '../../utils/constants';
import './header.scss';

import { Link } from 'gatsby';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import DarkLogo from '../../images/logo-dark.svg';
import LightLogo from '../../images/logo-light.svg';
import { HeaderProps, HeaderTypes } from '../../types/mainTypes';

const Header: React.FC<HeaderProps> = (props) => {
  const { color } = props;
  const CLASS_HEADER = color === HeaderTypes.DARK ? 'header header_dark' : 'header header_light';
  // const getLinks = () => {
  //   const links = data.headerContent.links.slice();
  //   return links.map((link) => (
  //     <li className="header__list-item" key={link.text}>
  //       <Link className="header__link" to={link.url}>
  //         {link.text}
  //       </Link>
  //     </li>
  //   ));
  // };

  const mobileHeaderRef = useRef<null | HTMLElement>(null);
  const showMenu = () => {
    mobileHeaderRef.current?.classList.toggle('active');
    mobileHeaderRef.current
      ?.querySelectorAll('.header__image')[0]
      .classList.toggle('hide');
  };

  useEffect(() => {
    const header = document.querySelector('.header__menu');

    document.addEventListener('click', (e) => {
      const element = e.target as HTMLElement;
      if (element.classList.contains('sub-menu-btn')) {
        header?.classList.toggle('show-sub-menu');
      }
    });
  }, []);

  return (
    <header
      ref={mobileHeaderRef}
      slot="container-start"
      className={CLASS_HEADER}
    >
      <div className="header__wrapper container">
        {color === HeaderTypes.DARK ? (
          <DarkLogo className="header__image" alt="logo" />
        ) : (
          <LightLogo className="header__image" alt="logo" />
        )}
        <div className="header__burger" onClick={() => showMenu()}>
          <span></span>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__list-item">
              <Link className="header__link text-header" to="/">
                Компания
              </Link>
            </li>
            <li className="header__list-item header__list-sub-item">
              <span className="header__link sub-menu-btn text-header">
                Решения и услуги
              </span>
              <ul className="header__sub-list">
                <li className="header__list-item">
                  <Link className="header__link text-header" to="/h2s-service">
                    Газовая безопасность
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link className="header__link text-header" to="/sft-service">
                    Нейтрализация сероводорода
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link
                    className="header__link text-header"
                    to="/verification-laboratory"
                  >
                    Лаборатория
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link
                    className="header__link text-header"
                    to="/service-center"
                  >
                    Сервисный центр
                  </Link>
                </li>
              </ul>
            </li>
            <li className="header__list-item header__list-main-item ">
              <ul className="header__main-list">
                <li className="header__list-item">
                  <Link
                    className="header__link text-header"
                    to="/press-center/"
                  >
                    Пресс-центр
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link className="header__link text-header" to="/career/">
                    Карьера
                  </Link>
                </li>
                <li className="header__list-item">
                  <Link className="header__link text-header" to="/contacts/">
                    Контакты
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <DarkLogo
            className="header__image header__image_additional "
            alt="logo"
          />
          <div className="lang">
            <Link className="header__link text-header blue" to="/">
              Рус
            </Link>
            /
            <Link className="header__link text-header" to="/">
              En
            </Link>
            /
            <Link className="header__link text-header" to="/">
              &#1178;аз
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
