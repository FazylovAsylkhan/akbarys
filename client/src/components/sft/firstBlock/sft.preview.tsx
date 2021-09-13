import './sft.preview.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import data from '../../../utils/constants';

const SftPreview = () => {
  const thirdBlock: any = data.pages.main.blocks[2];

  return (
    <div className="sftPreview">
      <div className="screen__content container">
        <div className="sftPreview__wrapper">
          <h2 className="sftPreview__title title-1 white">
            {thirdBlock.title}
          </h2>
          <div className="sftPreview__box">
            <h3 className=" sftPreview__subtitle">
              <span className="sftPreview__subtitle-digit text-2 white">
                {thirdBlock.firstSubtitle.digit}
              </span>
              <span className="sftPreview__subtitle-description text-1 white_dark">
                {thirdBlock.firstSubtitle.description}
              </span>
            </h3>
            <h3 className=" sftPreview__subtitle">
              <span className="sftPreview__subtitle-digit text-2 white">
                {thirdBlock.secondSubtitle.digit}
              </span>
              <span className="sftPreview__subtitle-description text-1 white_dark">
                {thirdBlock.secondSubtitle.description}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="sftPreview__body">
        <StaticImage
          className="sftPreview__body-image"
          placeholder="dominantColor"
          src="../../../images/h2s.jpg"
          alt="sftPreview"
          quality={95}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default SftPreview;
