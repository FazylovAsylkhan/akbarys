import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './sixthBlock.scss';
import { FC } from 'react';
import id from '../../../utils/randomId';

interface SixthBlockkProps {
  content: any
}

const SixthBlock: FC<SixthBlockkProps> = ({ content }) => {
  const {
    title, description, image, stages,
  } = content;
  const img = getImage(image);

  return (
    <div className="mainDevelopment">
      <div className="screen__content container">
        <div className="mainDevelopment__wrapper">
          <div className="mainDevelopment__content">
            <h2 className="mainDevelopment__title mainText-3 white">{title}</h2>
            <p className="mainDevelopment__description mainText-6 white_dark">{description}</p>
          </div>
          <div className="mainDevelopment__stages">
            {stages.map((stage: any) => (
                <h3 className="mainDevelopment__stages-item " key={id()}>
                  <span className="mainDevelopment__stages-item-digit mainText-7 white_dark">
                    {stage.digit}
                  </span>
                  <span className="mainText-5 white">{stage.description}</span>
                </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="screen__body">
        {img ? (
          <GatsbyImage className="screen__image" image={img} alt={title} />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default SixthBlock;
