import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './h2s.gasDetectionSystem.scss';

import { FC } from 'react';
import Line from '../../../data/images/h2s/illustration/line.svg';

interface H2sGasDetectionSystemProps {
  content: any
}

const H2sGasDetectionSystem: FC<H2sGasDetectionSystemProps> = ({ content }) => {
  const { title, descriptions, images } = content;
  const img1 = getImage(images[0]);
  const img2 = getImage(images[1]);
  const img3 = getImage(images[2]);
  const img4 = getImage(images[3]);

  return (
    <div className="H2sGasDetectionSystem container">
      <div className="H2sGasDetectionSystem__wrapper">
        <div className="H2sGasDetectionSystem__box">
          {img1 ? (
            <GatsbyImage
              className="H2sGasDetectionSystem__box-image"
              image={img1}
              alt={title}
            />
          ) : null}
        </div>
        <div className="H2sGasDetectionSystem__content">
          <div className="H2sGasDetectionSystem__content-title title-1 black">
            {title}
          </div>
          <p className="H2sGasDetectionSystem__content-text text-1 gray">
            {descriptions[0]}
          </p>
          <p className="H2sGasDetectionSystem__content-text mt text-1 gray">
            {descriptions[1]}
          </p>
          <p className="H2sGasDetectionSystem__content-text mt text-1 gray">
            {descriptions[2]}
          </p>
          <div className="H2sGasDetectionSystem__content-illustration">
            {img2 ? (
              <GatsbyImage
                className="H2sGasDetectionSystem__content-image H2sGasDetectionSystem__content-image-1"
                image={img2}
                alt={title}
              />
            ) : null}
            <Line className="H2sGasDetectionSystem__content-image H2sGasDetectionSystem__content-image-line" />
            {img3 ? (
              <GatsbyImage
                className="H2sGasDetectionSystem__content-image H2sGasDetectionSystem__content-image-2"
                image={img3}
                alt={title}
              />
            ) : null}
            <Line className="H2sGasDetectionSystem__content-image H2sGasDetectionSystem__content-image-line" />
            {img4 ? (
              <GatsbyImage
                className="H2sGasDetectionSystem__content-image H2sGasDetectionSystem__content-image-3"
                image={img4}
                alt={title}
              />
            ) : null}
          </div>

          <ul className="H2sGasDetectionSystem__content-text mt text-1 gray">
            {descriptions[3]}
            <li>{descriptions[4]}</li>
            <li>{descriptions[5]}</li>
            <li>{descriptions[6]}</li>
          </ul>
          <p className="H2sGasDetectionSystem__content-text mt text-1 gray">
            {descriptions[7]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default H2sGasDetectionSystem;
