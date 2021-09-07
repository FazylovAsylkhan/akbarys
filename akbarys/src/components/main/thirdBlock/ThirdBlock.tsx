import './thirdBlock.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import data from '../../../utils/constants';

const ThirdBlock = () => {
  const thirdBlock: any = data.pages.main.blocks[2];

  return (
    <div className="sft">
      <div className="screen__content container">
        <div className="sft__wrapper">
          <h2 className="sft__title title-1 white">{thirdBlock.title}</h2>
          <Link className="button sft__button" to="/sft-service/">
            Подробнее
          </Link>
          <div className="sft__box">
            <h3 className=" sft__subtitle">
              <span className="sft__subtitle-digit text-2 white">
                {thirdBlock.firstSubtitle.digit}
              </span>
              <span className="sft__subtitle-description text-1 white_dark">
                {thirdBlock.firstSubtitle.description}
              </span>
            </h3>
            <h3 className=" sft__subtitle">
              <span className="sft__subtitle-digit text-2 white">
                {thirdBlock.secondSubtitle.digit}
              </span>
              <span className="sft__subtitle-description text-1 white_dark">
                {thirdBlock.secondSubtitle.description}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="screen__body">
        <StaticImage
          className="screen__image"
          placeholder="dominantColor"
          src="../../../images/h2s.jpg"
          alt="sft"
          quality={95}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default ThirdBlock;
