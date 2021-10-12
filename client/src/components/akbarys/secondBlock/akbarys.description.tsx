import * as React from 'react';
import { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './akbarys.description.scss';
import id from '../../../utils/randomId';

interface AkbarysDescriptionProps {
  content: {
    description: string[]
    title: string
    image: any
  }
}
const AkbarysDescription: FC<AkbarysDescriptionProps> = ({ content }) => {
  const { description, title, image } = content;
  const img = getImage(image);
  const getTexts = () => description.map((text) => (
      <p key={id()} className="akbarysDescription__text text-1 gray">
        {text}
      </p>
  ));
  return (
    <div className="akbarysDescription ">
      <div className="container">
        <div className="akbarysDescription__wrapper">
          <div className="akbarysDescription__content">
            <h2 className="akbarysDescription__content-title title-1 black">
              {title}
            </h2>
            <div className="akbarysDescription__box">{getTexts()}</div>
          </div>
          <div className="akbarysDescription__image-wrapper">
            {img ? (
              <GatsbyImage className="akbarys__image" image={img} alt={title} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkbarysDescription;
