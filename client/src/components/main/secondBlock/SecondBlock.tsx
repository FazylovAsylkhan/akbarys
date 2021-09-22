import * as React from 'react';
import { FC } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './secondBlock.scss';
import id from '../../../utils/randomId';

interface Subtitle {
  digit: string,
  text: string
}

interface H2sProps {
  content: {
    title: string
    subtitles: Subtitle[]
    image: any
    button: {
      url: string,
      text: string
    }
  }
}

const SecondBlock: FC<H2sProps> = ({ content }) => {
  const {
    title, subtitles, button, image,
  } = content;
  const img = getImage(image);

  return (
    <div className="h2s">
      <div className="screen__content container">
        <div className="h2s__wrapper">
          <h2 className="h2s__title title-1 white">{title}</h2>
          <Link
            className="button  h2s__button
            "
            to={button.url}
          >
            {button.text}
          </Link>
          <div className="h2s__box">
          {subtitles.map((subtitle) => (
                <h3 className="h2s__subtitle" key={id()}>
              <span className="h2s__subtitle-digit text-2 white">
                {subtitle.digit}
              </span>
              <span className="h2s__subtitle-description text-1 white_dark">
                {subtitle.text}
              </span>
            </h3>
          ))}
          </div>
        </div>
      </div>
      <div className="screen__body">
        {img ? <GatsbyImage className="screen__image" image={img} alt={title} /> : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default SecondBlock;
