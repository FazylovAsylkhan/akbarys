import * as React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import data from '../../../utils/constants';
import './fivthBlock.scss';

const FivthBlock = () => {
  const fivthBlock: any = data.pages.main.blocks[4];

  return (
    <div className="about">
      <div className="screen__content container">
        <div className="about__wrapper">
          <h2 className="about__title title-1 black">{fivthBlock.title}</h2>
          <div className="about__content">
            <StaticImage
              className="about__content-image"
              placeholder="dominantColor"
              src="../../../images/about.jpg"
              alt="about" 
              quality={50}
              formats={['auto', 'webp', 'avif']}
            />
            <div className="about__content-box">
              <h4 className="about__content-title title-3 black">{`${fivthBlock.content.title}`}</h4>
              <p className="about__content-description text-1 gray">{`${fivthBlock.content.description}`}</p>
              <Link className="button about__button" to="/akbarys-about">
                Подробнее
              </Link>
            </div>
          </div>
          <div className="about__advantages">
            <h3 className="about__advantages-item">
              <span className="about__content-subtitle text-3 black">
                {fivthBlock.advantages.first.digit}
              </span>
              <span className="about__content-description text-1 gray">
                {fivthBlock.advantages.first.description}
              </span>
            </h3>
            <h3 className="about__advantages-item">
              <span className="about__content-subtitle text-3 black">
                {fivthBlock.advantages.second.digit}
              </span>
              <span className="about__content-description text-1 gray">
                {fivthBlock.advantages.second.description}
              </span>
            </h3>
            <h3 className="about__advantages-item">
              <span className="about__content-subtitle text-3 black">
                {fivthBlock.advantages.third.digit}
              </span>
              <span className="about__content-description text-1 gray">
                {fivthBlock.advantages.third.description}
              </span>
            </h3>
            <h3 className="about__advantages-item">
              <span className="about__content-subtitle text-3 black">
                {fivthBlock.advantages.fourth.digit}
              </span>
              <span className="about__content-description text-1 gray">
                {fivthBlock.advantages.fourth.description}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FivthBlock;
