// import { handlerSubmit, resetInput } from '../../utils/mainUtils';
import './footer.scss';

import { Link } from 'gatsby';
import * as React from 'react';

import data from '../../utils/constants';

interface LinksProps {
  text: string
  url: string
}

const Footer = () => {
  const {
    firstList, secondList, thirdList, fourthList,
  } = data.footerContent;

  const getLinks = (links: LinksProps[]) => {
    const copyLinks = links.slice();
    const linksElements = copyLinks.map((link) => (
      <li className="footer__list-item" key={link.text}>
        <Link className="footer__link" to={link.url}>
          {link.text}
        </Link>
      </li>
    ));

    return linksElements;
  };

  return (
    <footer className="footer">
      <div className="screen__content container">
        <div className="footer__wrapper">
          <div className="footer__items">
            <div className="footer__item">
              <ul className="footer__list">
                {firstList.title}
                {getLinks(firstList.links)}
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__list">
                {secondList.title}
                {getLinks(secondList.links)}
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__list">
                {thirdList.title}
                {getLinks(thirdList.links)}
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__list">
                {fourthList.title}
                {getLinks(fourthList.links)}
              </ul>
            </div>
          </div>
          <div className="footer__content"></div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container" style={{ height: '100%' }}>
          <div className="footer__copyright-wrapper">
            <p className="footer__copyright-text">Дизайн сайта - QLAB</p>
            <p className="footer__copyright-text">
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

export default Footer;
