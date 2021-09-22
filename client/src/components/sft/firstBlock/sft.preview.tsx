import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import './sft.preview.scss';
import id from '../../../utils/randomId';

interface SftPreviewProps {
  content: any
}

const SftPreview: FC<SftPreviewProps> = ({ content }) => {
  const { title, subtitles, image } = content;
  const img = getImage(image);

  return (
    <div className="sftPreview">
      <div className="screen__content container">
        <div className="sftPreview__wrapper">
          <h2 className="sftPreview__title title-1 white">{title}</h2>
          <div className="sftPreview__box">
            {subtitles.map(
              (subtitle: { digit: string; description: string }) => (
                  <h3 className=" sftPreview__subtitle" key={id()}>
                    <span className="sftPreview__subtitle-digit text-2 white">
                      {subtitle.digit}
                    </span>
                    <span className="sftPreview__subtitle-description text-1 white_dark">
                      {subtitle.description}
                    </span>
                  </h3>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="h2sPreview__body">
        {img ? (
          <GatsbyImage
            className="h2sPreview__body-image"
            image={img}
            alt={title}
          />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default SftPreview;
