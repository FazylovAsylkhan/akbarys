import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import './mainAkbarys.scss';

interface MainAkbarysProps {
  content: {
    description: string
    title: string
    image: any
  };
}

const MainAkbarys:FC<MainAkbarysProps> = ({content}) => {
  const { title, description, image} = content
  const img = getImage(image)
  
  return (
    <div className="mainAkbarys">
      <div className="screen__content container">
        <div className="mainAkbarys__wrapper">
          <h1 className="mainAkbarys__title main-title white">
            {title}
          </h1>
          <p className="mainAkbarys__description main-description white_dark">
            {description}
          </p>
        </div>
      </div>
      <div className="screen__body">
        {img ? <GatsbyImage className="screen__image" image={img} alt={title} /> : null}
      </div>
    </div>
  );
};

export default MainAkbarys;
