import './ninthBlock.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import data from '../../../utils/constants';

const NinthBlock = () => {
  const ninthBlock: any = data.pages.main.blocks[8];

  return (
    <div className="career">
      <div className="screen__content container">
        <div className="career__wrapper">
          <h2 className="career__title white">
            {`${ninthBlock.title.first}`} <br /> {`${ninthBlock.title.second}`}
          </h2>
          <p className="career__description text-1 white_dark">{`${ninthBlock.description}`}</p>
          <Link className="button career__button" to="/career/">
            Подробнее
          </Link>
          <h3 className="career__subtitle white">{`${ninthBlock.advantage.digit}`}</h3>
          <p className="career__subtitle-description text-1 white_dark">{`${ninthBlock.advantage.description}`}</p>
        </div>
      </div>
      <div className="screen__body">
        <StaticImage
          className="screen__image"
          placeholder="dominantColor"
          src="../../../images/career.jpg"
          alt="career"
          quality={95}
          formats={['auto', 'webp', 'avif']}
        />
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default NinthBlock;
