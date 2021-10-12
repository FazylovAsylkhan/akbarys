import * as React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import './akbarys.career.scss';

interface AkbarysCareerProps {
  content: any
}

const AkbarysCareer: FC<AkbarysCareerProps> = ({ content }) => {
  const {
    title, subtitle, description, button,
  } = content;
  return (
    <div className="akbarysCareer">
      <div className="container">
        <div className="akbarysCareer__wrapper ">
          <div className="akbarysCareer__content">
            <h2 className="akbarysCareer__content-title title-1 white">
              {title[0]} <br />
              {title[1]}
            </h2>
            <p className="akbarysCareer__content-title-description text-1 white_dark">
              {description}
            </p>
            <Link
              className="button akbarysCareer__content-button"
              to={button.link}
            >
              {button.text}
            </Link>
            <h3 className="akbarysCareer__content-subtitle text-2 white">
              {subtitle[0]}
            </h3>
            <p className="akbarysCareer__content-subtitle-description text-1 white_dark">
              {subtitle[1]}
            </p>
          </div>
        </div>
      </div>
      <div className="akbarysCareer__body">
        <StaticImage
          className="akbarysCareer__body-image"
          placeholder="dominantColor"
          src="../../../data/images/main/preview.career.jpg"
          alt="career"
          quality={95}
          formats={['auto', 'webp', 'avif']}
        />
      </div>
    </div>
  );
};

export default AkbarysCareer;
