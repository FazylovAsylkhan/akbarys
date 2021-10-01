import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './eighthBlock.scss';
interface EighthBlockProps {
  content: any
}

const EighthBlock: React.FC<EighthBlockProps> = ({content}) => {
  const {title,
    description,
    image,
    button,
    advantage} = content
    const img = getImage(image);

  return (
    <div className="career">
      <div className="screen__content container">
        <div className="career__wrapper">
          <h2 className="career__title mainText-3 white">
            {title[0]} <br /> {title[1]}
          </h2>
          <p className="career__description mainText-5 white_dark">{description}</p>
          <Link className="button career__button" to={button.url}>
            {button.text}
          </Link>
          <h3 className="career__subtitle text-2 white">{advantage.digit}</h3>
          <p className="career__subtitle-description mainText-5 white_dark">{advantage.description}</p>
        </div>
      </div>
      <div className="screen__body">
        {img ? <GatsbyImage className="screen__image" image={img} alt={title} /> : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default EighthBlock;
