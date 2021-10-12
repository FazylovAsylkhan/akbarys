import * as React from 'react';
import { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './serviceCenter.preview.scss';

interface ServiceCenterPreviewProps {
  content: any
}

const ServiceCenterPreview: FC<ServiceCenterPreviewProps> = ({ content }) => {
  const { title, subtitle, image } = content;
  const img = getImage(image);
  return (
    <div className="serviceCenter preview">
      <div className="serviceCenter__content container">
        <div className="serviceCenter__wrapper">
          <h2 className="serviceCenter__title title-1 white">{title}</h2>
          <p className="serviceCenter__title-description text-6 white">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="serviceCenter__body">
        {img ? (
          <GatsbyImage
            className="serviceCenter__body-image"
            image={img}
            alt={title}
          />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default ServiceCenterPreview;
