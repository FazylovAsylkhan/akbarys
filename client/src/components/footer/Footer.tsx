import * as React from 'react';
import { FC } from 'react';
import { Link } from 'gatsby';

import LogoImg from '../../data/images/logo-dark.svg';
import InstagramImg from '../../data/images/social/instagram.svg';
import LinkedIn from '../../data/images/social/linkedIn.svg';
import Youtube from '../../data/images/social/youtube.svg';
import id from '../../utils/randomId';
import './footer.scss';

interface LinksProps {
  text: string
  url: string
}

interface FooterProps {
  data: any
}

const Footer: FC<FooterProps> = ({ data }) => {
  const {
    subMenu, description, social, politics,
  } = data;
  const firstList = subMenu[0];
  const secondList = subMenu[1];
  const thirdList = subMenu[2];

  const getLinks = (links: LinksProps[]) => {
    const copyLinks = links.slice();
    const linksElements = copyLinks.map((link) => (
      <li className="footer__list-item" key={id()}>
        <Link className="footer__link text-1 black" to={link.url}>
          {link.text}
        </Link>
      </li>
    ));

    return linksElements;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__items">
            <div className="footer__item">
              <ul className="footer__list footer__list-1">
                <span className="footer__list-title text-1 blue">
                  {firstList.title}
                </span>
                {getLinks(firstList.links)}
              </ul>
              <ul className="footer__list footer__list-2">
                <span className="footer__list-title text-1 blue">
                  {secondList.title}
                </span>
                {getLinks(secondList.links)}
              </ul>
            </div>
            <div className="footer__item">
              <ul className="footer__list footer__list-3">
                <span className="footer__list-title text-1 blue">
                  {thirdList.title}
                </span>
                {thirdList.links.map((link: any) => {
                  if (link.text === 'Akbarys Protection') {
                    return (
                      <li className="footer__list-item" key={id()}>
                        <a
                          className="footer__link text-1 black"
                          href={link.url}
                        >
                          {link.text}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li className="footer__list-item" key={id()}>
                      <Link className="footer__link text-1 black" to={link.url}>
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="footer__content">
            <LogoImg className="footer__content-logo" />
            <p className="footer__content-description text-1 gray">
              {description}
            </p>
            <div className="footer__content-social">
              <h2 className="footer__content-social-title text-1 gray">
                {social.title}
              </h2>
              <div className="footer__content-social-icons">
                <Link to={social.links[0]}>
                  <InstagramImg className="footer__content-social-icon" />
                </Link>
                <Link to={social.links[1]}>
                  <LinkedIn className="footer__content-social-icon" />
                </Link>
                <Link to={social.links[2]}>
                  <Youtube className="footer__content-social-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container" style={{ height: '100%' }}>
          <div className="footer__copyright-wrapper">
            <p className="footer__copyright-text qlab">
              <Link
                className="footer__copyright-link text-1 gray"
                to={politics.links[0].url}
              >
                {politics.links[0].text}
              </Link>
            </p>
            <p className="footer__copyright-text">
              <Link
                className="footer__copyright-link text-1 gray"
                to={politics.links[1].url}
              >
                {politics.links[1].text}
              </Link>
              <span className="text-1 gray">{politics.title}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
