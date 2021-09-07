import './ppe.description.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const PpeDescription = () => (
  <div className="ppeDescription">
    <h1 className="transparent">Поверочные лаборатории QHSE Akbarys</h1>
    <div className="container">
      <div className="ppeDescription__wrapper">
        <div className="ppeDescription__content">
          <h2 className="ppeDescription__title title-1 black">
            Наша лаборатория
          </h2>
          <h3 className="ppeDescription__subtitle text-4 black">
            Поверочная лаборатория ТОО QHSE-Akbarys в Уральске и её филиалы на
            местах работают на благо наших партнёров, обеспечивая безопасность и
            развитие бизнеса
          </h3>
        </div>
      </div>
    </div>
    <div className="line"></div>
    <div className="container">
      <div className="ppeDescription__wrapper">
        <div className="ppeDescription__box">
          <StaticImage
            className="ppeDescription__box-img left"
            placeholder="dominantColor"
            src="../../../images/ppe/description-1.jpg"
            alt="sftPreview"
            quality={95}
            formats={['auto', 'webp', 'avif']}
          />
          <div className="ppeDescription__box-content">
            <div className="ppeDescription__box-title title-1 black">
              Поставки оборудования
            </div>
            <p className="ppeDescription__box-description text-1 gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              consectetur egestas tortor ut morbi nunc. Viverra enim, in amet,
              aliquet ut egestas.
            </p>
            <p className="ppeDescription__box-description text-1 gray">
              Tellus non tellus nisi imperdiet gravida egestas. In tristique
              tempor mauris adipiscing. Et, dolor quam egestas amet, turpis
              tellus egestas sed. Nunc tincidunt fames malesuada nunc amet, leo
              facilisi. Ultrices facilisi elementum porttitor ipsum a id mi
              fermentum cursus. Consequat dictum vel nibh aliquam eget
              scelerisque. Consectetur id viverra dapibus ac mus malesuada elit
              pellentesque. Volutpat ullamcorper diam orci, purus sodales.
              Tempor ornare adipiscing pellentesque fusce leo cras ultrices
              nisi.
            </p>
          </div>
          <div className="ppeDescription__box-content">
            <div className="ppeDescription__box-title title-1 black">
              Поставки оборудования
            </div>
            <p className="ppeDescription__box-description text-1 gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              consectetur egestas tortor ut morbi nunc. Viverra enim, in amet,
              aliquet ut egestas.
            </p>
            <p className="ppeDescription__box-description text-1 gray">
              Tellus non tellus nisi imperdiet gravida egestas. In tristique
              tempor mauris adipiscing. Et, dolor quam egestas amet, turpis
              tellus egestas sed. Nunc tincidunt fames malesuada nunc amet, leo
              facilisi. Ultrices facilisi elementum porttitor ipsum a id mi
              fermentum cursus. Consequat dictum vel nibh aliquam eget
              scelerisque. Consectetur id viverra dapibus ac mus malesuada elit
              pellentesque. Volutpat ullamcorper diam orci, purus sodales.
              Tempor ornare adipiscing pellentesque fusce leo cras ultrices
              nisi.
            </p>
          </div>
          <StaticImage
            className="ppeDescription__box-img"
            placeholder="dominantColor"
            src="../../../images/ppe/description-2.jpg"
            alt="sftPreview"
            quality={95}
            formats={['auto', 'webp', 'avif']}
          />
        </div>
      </div>
    </div>
    <div className="line"></div>
  </div>
);

export default PpeDescription;
