import './serviceCenter.preview.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const ServiceCenterPreview = () => (
  <div className="serviceCenter">
    <div className="serviceCenter__content container">
      <div className="serviceCenter__wrapper">
        <h2 className="serviceCenter__title title-1 white">Сервисный центр</h2>
        <p className="serviceCenter__title-description text-6 white">
          Вперед к достижениям вместе с нами!
        </p>
      </div>
    </div>
    <div className="serviceCenter__body">
      <StaticImage
        className="serviceCenter__body-image"
        placeholder="dominantColor"
        src="../../../images/serviceCenter/serviceCenter.jpg"
        alt="akbarys"
        quality={95}
        formats={['auto', 'webp', 'avif']}
      />
    </div>
  </div>
);

export default ServiceCenterPreview;
