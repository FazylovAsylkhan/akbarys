import * as React from 'react';
import { FC, useEffect } from 'react';
import { globalHistory } from '@reach/router';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import DarkLogo from '../../images/logo-dark.svg';
import LightLogo from '../../images/logo-light.svg';
import './header.scss';

interface HeaderProps {
  isAdditional?: boolean
  data?: any
}

function translatePage(lang: string) {
  const relativeUrl = globalHistory.location.pathname;
  const regExp = /\/en|kz/;
  const currentPageTranslated = regExp.test(relativeUrl);
  const currentPageUrl = currentPageTranslated
    ? relativeUrl.slice(0, relativeUrl.length - 3)
    : relativeUrl;
  const isMain = relativeUrl.length === 1 || relativeUrl.length === 3;
  if (lang === 'kz') {
    isMain ? navigate('/kz') : navigate(`${currentPageUrl}/kz`);
    navigate(`${currentPageUrl}/kz`);
  } else if (lang === 'en') {
    isMain ? navigate('/en') : navigate(`${currentPageUrl}/en`);
  } else {
    isMain ? navigate('/') : navigate(currentPageUrl);
  }
}
function getPreviewLangElement(lang: string) {
  let element = (
    <div className="lang__preview">
      <span className="lang__text text-header">
        Рус
        <StaticImage
          className="lang__image"
          src="../../images/lang/russia.jpg"
          alt="russia"
        ></StaticImage>
      </span>
    </div>
  );
  if (lang === 'kz') {
    element = (
      <div className="lang__preview">
        <span className="lang__text text-header">
          Qaz
          <StaticImage
            className="lang__image"
            src="../../images/lang/kazakh.jpg"
            alt="kazakh"
          ></StaticImage>
        </span>
      </div>
    );
  }
  if (lang === 'en') {
    element = (
      <div className="lang__preview">
        <span className="lang__text text-header">
          Eng
          <StaticImage
            className="lang__image"
            src="../../images/lang/english.jpg"
            alt="english"
          ></StaticImage>
        </span>
      </div>
    );
  }
  return element;
}
const Header: FC<HeaderProps> = ({ isAdditional, data }) => {
  const { links, subMenu, lang } = data;
  const firstList = subMenu[0];
  const secondList = subMenu[1];
  const showMenu = (isAdditional: boolean | undefined) => {
    const header = document.querySelectorAll('header');
    if (isAdditional) {
      header[1]?.classList.toggle('active');
    } else {
      header[0]?.classList.toggle('active');
    }
    document?.querySelectorAll('.header__logo-image').forEach((img) => {
      img.classList.toggle('hide');
    });
    if (
      header[1]?.classList.contains('active')
      || header[0]?.classList.contains('active')
    ) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  };
  const showAdditionalMenu = (additionalHeader: any, currentPage: any) => {
    let prevScrollPosition = 0;
    document.addEventListener('scroll', () => {
      if (currentPage !== '') {
        const currentScrollPosition = window.pageYOffset;
        const heightScreen = document.documentElement.clientHeight;
        if (additionalHeader) {
          if (
            prevScrollPosition > currentScrollPosition
            && !document.querySelector('.pressCenterNews')
            && !document.querySelector('.page404')
            && !document.querySelector('.politics')
          ) {
            additionalHeader.classList.remove('hide');
            additionalHeader.classList.add('show');
          } else {
            additionalHeader.classList.remove('show');
            additionalHeader.classList.add('hide');
          }
          if (
            heightScreen > window.pageYOffset
            && !document.querySelector('.pressCenterNews')
            && !document.querySelector('.page404')
            && !document.querySelector('.politics')
          ) {
            additionalHeader.classList.remove('header_dark');
            additionalHeader.classList.add('header_transparent');
          } else {
            additionalHeader.classList.add('header_dark');
            additionalHeader.classList.remove('header_transparent');
          }
          prevScrollPosition = window.pageYOffset;
        }
      }
    });
  };
  function updateHeader(
    mainHeader: any,
    additionalHeader: any,
    currentPage: any,
  ) {
    if (
      currentPage !== 'ru'
      && currentPage !== ''
      && currentPage !== 'kz'
      && currentPage !== 'en'
    ) {
      mainHeader?.classList.add('header_second');
      additionalHeader?.classList.add('header_second', 'additional');
      if (
        !document.querySelector('.pressCenterNews')
        && !document.querySelector('.page404')
        && !document.querySelector('.politics')
      ) {
        mainHeader?.classList.remove('header_dark');
      } else {
        mainHeader?.classList.add('header_dark');
      }
    } else {
      mainHeader?.classList.remove('header_second');
    }
  }

  useEffect(() => {
    const currentPage = window.location.href.split('/')[3];
    const mainHeader = document.querySelectorAll('header')[0];
    const additionalHeader = document.querySelectorAll('header')[1];
    updateHeader(mainHeader, additionalHeader, currentPage);
    showAdditionalMenu(additionalHeader, currentPage);

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      document.body.classList.add('touch');
      const subMenus = document.querySelectorAll('.sub-menu');
      subMenus.forEach((subMenu) => {
        const thisLink = subMenu.querySelector('.menu__link');
        const toggleSubMenu = subMenu.querySelector('.menu__toggle');
        const subMenuList = subMenu.querySelector('.sub-menu__list');
        thisLink?.classList.add('parent');
        subMenu.addEventListener('click', () => {
          subMenuList?.classList.toggle('open');
          toggleSubMenu?.classList.toggle('active');
        });
      });
      document.querySelector('.lang')?.addEventListener('click', () => {
        const langList = document.querySelector('.lang__list');
        const langPreview = document.querySelector('.lang__preview');
        langList?.classList.toggle('open');
        langPreview?.classList.toggle('active');
      });
    } else {
      document.body.classList.add('mouse');
    }
  }, []);

  return (
    <>
      <header slot="container-start" className="header">
        <div className="header__wrapper container">
          <DarkLogo
            className="header__logo-image header__logo-image_dark"
            alt="logo"
          />
          <LightLogo
            className="header__logo-image header__logo-image_light"
            alt="logo"
          />
          <div
            className="header__burger"
            onClick={() => showMenu(isAdditional)}
          >
            <span></span>
          </div>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__list-item sub-menu">
                <span className="menu__toggle text-header">
                  {firstList.title}
                </span>
                <ul className="sub-menu__list">
                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[0].url}
                    >
                      {firstList.links[0].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[1].url}
                    >
                      {firstList.links[1].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[2].url}
                    >
                      {firstList.links[2].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item reset-border">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[3].url}
                    >
                      {firstList.links[3].text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__list-item sub-menu">
                <span className="menu__toggle text-header">
                  {secondList.title}
                </span>
                <ul className="sub-menu__list">
                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={secondList.links[0].url}
                    >
                      {secondList.links[0].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item reset-border">
                    <Link
                      className="sub-menu__link text-header"
                      to={secondList.links[1].url}
                    >
                      {secondList.links[1].text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__list-item">
                <Link className="menu__link text-header" to={links[0].url}>
                  {links[0].text}
                </Link>
              </li>
              <li className="menu__list-item">
                <Link className="menu__link text-header" to={links[1].url}>
                  {links[1].text}
                </Link>
              </li>

              <li className="menu__list-item reset-border">
                <Link className="menu__link text-header" to={links[2].url}>
                  {links[2].text}
                </Link>
              </li>
            </ul>
            <div className="header__box">
              <div className="lang">
                {getPreviewLangElement(lang)}
                <ul className="lang__list">
                  <li className="lang__list-item">
                    <span
                      className="lang__link"
                      onClick={() => translatePage('ru')}
                    >
                      <span className="lang__text text-header">
                        Рус
                        <StaticImage
                          className="lang__image"
                          src="../../images/lang/russia.jpg"
                          alt="russia"
                        ></StaticImage>
                      </span>
                    </span>
                  </li>
                  <li className="lang__list-item">
                    <span
                      className="lang__link"
                      onClick={() => translatePage('en')}
                    >
                      <span className="lang__text text-header">
                        Eng
                        <StaticImage
                          className="lang__image"
                          src="../../images/lang/english.jpg"
                          alt="english"
                        ></StaticImage>
                      </span>
                    </span>
                  </li>
                  <li className="lang__list-item">
                    <span
                      className="lang__link"
                      onClick={() => translatePage('kz')}
                    >
                      <span className="lang__text text-header">
                        Qaz
                        <StaticImage
                          className="lang__image"
                          src="../../images/lang/kazakh.jpg"
                          alt="kazakh"
                        ></StaticImage>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <DarkLogo className="menu__image menu__logo-image " alt="logo" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
