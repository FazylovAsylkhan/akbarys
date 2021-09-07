import './ppe.preview.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const PpePreview = () => (
  <div className="ppePreview ">
    <div className="ppePreview__wrapper container">
      <div className="ppePreview__wrapper">
        <h2 className="ppePreview__title title-1 white">
          Производство cредств индивидуальной защиты (СИЗ)
        </h2>
        <div className="ppePreview__box">
          <h3 className=" ppePreview__subtitle">
            <span className="ppePreview__subtitle-digit text-2 white">23</span>
            <span className="ppePreview__subtitle-description text-1 white_dark">
              Специалистов
            </span>
          </h3>
          <h3 className=" ppePreview__subtitle">
            <span className="ppePreview__subtitle-digit text-2 white">40</span>
            <span className="ppePreview__subtitle-description text-1 white_dark">
              Вида лаболаторных испытании
            </span>
          </h3>
        </div>
      </div>
    </div>
    <div className="ppePreview__body">
      <StaticImage
        className="ppePreview__body-image"
        placeholder="dominantColor"
        src="../../../images/ppe/preview.jpg"
        alt="ppePreview"
        quality={95}
        formats={['auto', 'webp', 'avif']}
      />
    </div>
  </div>
);

export default PpePreview;
