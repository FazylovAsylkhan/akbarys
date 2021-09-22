import './akbarys.career.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const AkbarysCareer = () => (
  <div className="akbarysCareer">
    <div className="akbarysCareer__wrapper container">
      <div className="akbarysCareer__content">
        <h2 className="akbarysCareer__content-title title-1 white">
          Карьера в Akbarys <br />
          Будь частью большой команды!
        </h2>
        <p className="akbarysCareer__content-title-description text-1 white_dark">
          Вперед к достижениям вместе с нами
        </p>
        <Link className="button akbarysCareer__content-button" to="/career">
          Оставить заявку
        </Link>
        <h3 className="akbarysCareer__content-subtitle text-2 white">400+</h3>
        <p className="akbarysCareer__content-subtitle-description text-1 white_dark">
          Сотрудников уже работают с нами
        </p>
      </div>
    </div>
    <div className="akbarysCareer__body">
      <StaticImage
        className="akbarysCareer__body-image"
        placeholder="dominantColor"
        src="../../../images/career.jpg"
        alt="career"
        quality={95}
        formats={['auto', 'webp', 'avif']}
      />
    </div>
  </div>
);

export default AkbarysCareer;
