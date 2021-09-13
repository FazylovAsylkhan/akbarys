import './fourthBlock.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import data from '../../../utils/constants';

const FourthBlock = () => {
  const fourthBlock: any = data.pages.main.blocks[3];

  return (
    <div className="ppe">
      <div className="screen__content container">
        <div className="ppe__wrapper">
          <h2 className="ppe__title title-1 white">{`${fourthBlock.title}`}</h2>
          <Link className="button ppe__button" to="/ppe-service/">
            Подробнее
          </Link>
          <div className="ppe__box">
            <h3 className=" ppe__subtitle">
              <span className="ppe__subtitle-digit text-2 white">
                {fourthBlock.firstSubtitle.digit}
              </span>
              <span className="ppe__subtitle-description text-1 white_dark">
                {fourthBlock.firstSubtitle.description}
              </span>
            </h3>
            <h3 className=" ppe__subtitle">
              <span className="ppe__subtitle-digit text-2 white">
                {fourthBlock.secondSubtitle.digit}
              </span>
              <span className="ppe__subtitle-description text-1 white_dark">
                {fourthBlock.secondSubtitle.description}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="screen__body">
        <StaticImage
          className="screen__image"
          placeholder="dominantColor"
          src="../../../images/ppe.jpg"
          alt="ppe"
          quality={95}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default FourthBlock;
