import * as React from 'react';
import { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './mainAkbarys.scss';

interface MainAkbarysProps {
  content: {
    description: string
    title: string
    image: any
  };
}

const MainAkbarys:FC<MainAkbarysProps> = ({ content }) => {
  const { title, description, image } = content;
  const img = getImage(image);

  return (
    <div className="mainAkbarys">
      <div className="screen__content container">
        <div className="mainAkbarys__wrapper">
          <h2 className="mainAkbarys__title mainText-1 white">
            {title}
          </h2>
          <p className="mainAkbarys__description mainText-2 white_dark">
            {description}
          </p>
        </div>
      </div>
      <div className="screen__body">
        {img ? <GatsbyImage className="screen__image" image={img} alt={title} /> : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default MainAkbarys;
