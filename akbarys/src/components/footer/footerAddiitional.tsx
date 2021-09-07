import './footerAdditional.scss';

import { Link } from 'gatsby';
import * as React from 'react';

import InstagramImg from '../../images/instagram.svg';
import LinkedIn from '../../images/linkedIn.svg';
import LogoImg from '../../images/logo-dark.svg';
import Youtube from '../../images/youtube.svg';
import data from '../../utils/constants';

interface LinksProps {
  text: string
  url: string
}

const FooterAdditional = () => {
  const { firstList, secondList, thirdList } = data.footerContent;

  const getLinks = (links: LinksProps[]) => {
    const copyLinks = links.slice();
    const linksElements = copyLinks.map((link) => (
      <li className="footerAdditional__list-item" key={link.text}>
        <Link className="footerAdditional__link text-10 black" to={link.url}>
          {link.text}
        </Link>
      </li>
    ));

    return linksElements;
  };

  return (
    <footer className="footerAdditional">
      <div className="container">
        <div className="footerAdditional__wrapper">
          <div className="footerAdditional__items">
            <div className="footerAdditional__item">
              <ul className="footerAdditional__list">
                {firstList.title}
                {getLinks(firstList.links)}
              </ul>
              <ul className="footerAdditional__list">
                {secondList.title}
                {getLinks(secondList.links)}
              </ul>
            </div>
            <div className="footerAdditional__item">
              <ul className="footerAdditional__list">
                {thirdList.title}
                {getLinks(thirdList.links)}
              </ul>
            </div>
          </div>
          <div className="footerAdditional__content">
            <LogoImg className="footerAdditional__content-logo" />
            <div
              className="footerAdditional__content-description text-6 gray"
              style={{ fontWeight: 500 }}
            >
              Ведущий поставщик услуг по газовой безопасности на территории Казахстана, СНГ и Ближнего Зарубежья
            </div>
            <div className="footerAdditional__content-social">
              <div className="footerAdditional__content-social-title text-6 gray">
                Мы в социальных сетях:
              </div>
              <div className="footerAdditional__content-social-icons">
                <Link to="/">
                  <InstagramImg className="footerAdditional__content-social-icon" />
                </Link>
                <Link to="/">
                  <LinkedIn className="footerAdditional__content-social-icon" />
                </Link>
                <Link to="/">
                  <Youtube className="footerAdditional__content-social-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerAdditional__copyright">
        <div className="container" style={{ height: '100%' }}>
          <div className="footerAdditional__copyright-wrapper">
            <p className="footerAdditional__copyright-text">
              Дизайн сайта - QLAB
            </p>
            <p className="footerAdditional__copyright-text">
              <Link className="footerAdditional__copyright-link" to="/politics">
                Политика конфиденциальности
              </Link>
              ТОО «Akbarys» 2021 ©
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAdditional;
