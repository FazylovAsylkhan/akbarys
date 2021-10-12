import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './career.preview.scss';
import { FC } from 'react';

interface CareerPreviewProps {
  content: {
    title: {
      firstRow: string
      secondRow: string
    }
    description: string
    subtitle: {
      digit: string,
      text: string
    }
    image: any
  }
}

const CareerPreview: FC<CareerPreviewProps> = ({ content }) => {
  const {
    title, description, subtitle, image,
  } = content;
  const img = getImage(image);
  return (
    <div className="careerPreview preview">
      <div className="careerPreview__content container">
        <div className="careerPreview__wrapper">
          <h2 className="careerPreview__title title-1 white">
            {title.firstRow} <br />
            {title.secondRow}
          </h2>
          <p className="careerPreview__title-description text-6 white">
            {description}
          </p>
          <h3 className="careerPreview__subtitle text-2 white">{subtitle.digit}</h3>
          <p className="careerPreview__subtitle-description text-6 white">
            {subtitle.text}
          </p>
        </div>
      </div>
      <div className="careerPreview__body">
        {img ? <GatsbyImage className="akbarysPreview__body-image" image={img} alt={title.firstRow} /> : null}
      </div>
    </div>
  );
};
export default CareerPreview;
