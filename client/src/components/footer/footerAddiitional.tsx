import * as React from 'react';
import { FC } from 'react';
import { Link } from 'gatsby';
import './footerAdditional.scss';

import InstagramImg from '../../images/instagram.svg';
import LinkedIn from '../../images/linkedIn.svg';
import LogoImg from '../../images/logo-dark.svg';
import Youtube from '../../images/youtube.svg';

interface LinksProps {
  text: string
  url: string
}

interface FooterProps {
  data: any
}

const FooterAdditional: FC<FooterProps> = ({ data }) => {
  const {
    subMenu, description, social, politics,
  } = data;
  const firstList = subMenu[0];
  const secondList = subMenu[1];
  const thirdList = subMenu[2];

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
              {description}
            </div>
            <div className="footerAdditional__content-social">
              <div className="footerAdditional__content-social-title text-6 gray">
                {social.title}
              </div>
              <div className="footerAdditional__content-social-icons">
                <Link to={social.links[0]}>
                  <InstagramImg className="footerAdditional__content-social-icon" />
                </Link>
                <Link to={social.links[1]}>
                  <LinkedIn className="footerAdditional__content-social-icon" />
                </Link>
                <Link to={social.links[2]}>
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
              <Link
                className="footerAdditional__copyright-link"
                to={politics.links[0].url}
              >
                {politics.links[0].text}
              </Link>
            </p>
            <p className="footerAdditional__copyright-text">
              <Link
                className="footerAdditional__copyright-link"
                to={politics.links[1].url}
              >
                {politics.links[1].text}
              </Link>
              {politics.title}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAdditional;
