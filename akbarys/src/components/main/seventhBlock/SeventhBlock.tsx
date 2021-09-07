import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import data from '../../../utils/constants';
import './seventhBlock.scss';

const SeventhBlock = () => {
  const seventhBlock: any = data.pages.main.blocks[6];

  return (
    <div className="mainDevelopment">
      <div className="screen__content container mainDevelopment__wrapper">
        <div className="mainDevelopment__wrapper">
          <div className="mainDevelopment__content">
            <h2 className="mainDevelopment__title white">{`${seventhBlock.title}`}</h2>
            <p className="mainDevelopment__description text-1 white_dark">{`${seventhBlock.description}`}</p>
          </div>
          <div className="mainDevelopment__stages">
            <h3 className="mainDevelopment__stages-item text-1 white_dark">
              <span className="mainDevelopment__stages-item-digit white">{`${seventhBlock.stages.first.digit}`}</span>
              {`${seventhBlock.stages.first.description}`}
            </h3>
            <h3 className="mainDevelopment__stages-item text-1 white_dark">
              <span className="mainDevelopment__stages-item-digit white">{`${seventhBlock.stages.second.digit}`}</span>
              {`${seventhBlock.stages.second.description}`}
            </h3>
            <h3 className="mainDevelopment__stages-item text-1 white_dark">
              <span className="mainDevelopment__stages-item-digit white">{`${seventhBlock.stages.third.digit}`}</span>
              {`${seventhBlock.stages.third.description}`}
            </h3>
            <h3 className="mainDevelopment__stages-item text-1 white_dark">
              <span className="mainDevelopment__stages-item-digit white">{`${seventhBlock.stages.fourth.digit}`}</span>
              {`${seventhBlock.stages.fourth.description}`}
            </h3>
          </div>
        </div>
      </div>
      <div className="screen__body">
        <StaticImage
          className="screen__image"
          placeholder="dominantColor"
          src="../../../images/development.jpg"
          alt="development"
          quality={50}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default SeventhBlock;
