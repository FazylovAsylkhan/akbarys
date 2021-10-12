import * as React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './fourthBlock.scss';
import { FC } from 'react';
import id from '../../../utils/randomId';

interface FourthBlockProps {
  content: any
}

const FourthBlock: FC<FourthBlockProps> = ({ content }) => {
  const {
    title, subtitle, description, button, advantages, image,
  } = content;
  const img = getImage(image);
  return (
    <div className="about">
      <div className="screen__content container">
        <div className="about__wrapper">
          <h2 className="about__title mainText-3 black">{title}</h2>
          <div className="about__content">
            {img ? (
              <GatsbyImage
                className="about__content-image"
                image={img}
                alt={title}
              />
            ) : null}
            <div className="about__content-box">
              <h4 className="about__content-title mainText-2 black">{subtitle}</h4>
              <p className="about__content-description mainText-6 gray">{description}</p>
              <Link className="button about__button" to={button.url}>
                {button.text}
              </Link>
            </div>
          </div>
          <div className="about__advantages">
            {advantages.map((advantage: any) => (
                <h3 className="about__advantages-item" key={id()}>
                  <span className="about__content-subtitle mainText-7 black">
                    {advantage.digit}
                  </span>
                  <span className="about__content-description mainText-6 gray">
                    {advantage.description}
                  </span>
                </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthBlock;
