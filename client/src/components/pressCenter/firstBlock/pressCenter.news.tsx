import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import './pressCenter.news.scss';

const PressCenterNews = () => (
  <div className="pressCenterNews">
    <div className="container">
      <div className="pressCenterNews__wrapper">
        <div className="pressCenterNews__title title-1 black">Пресс-центр</div>
        <div className="pressCenterNews__cards">
          <div className="pressCenterNews__card">
            <div className="pressCenterNews__card-head">
              <StaticImage
                className="pressCenterNews__card-image"
                placeholder="dominantColor"
                src="../../../images/pressCenter/item-1.jpg"
                alt="image"
                quality={95}
                formats={['auto', 'webp', 'avif']}
              />
            </div>
            <div className="pressCenterNews__card-body">
              <h3 className="pressCenterNews__card-title text-11 black">
                В РК утверждена предельная цена оптовой реализации сжиженного
                нефтяного газа
              </h3>
              <p className="pressCenterNews__card-description text-1 gray">
                На УКПГ-2 действует система закачки газа при очень высоком
                давлении.
              </p>
              <Link
                to="/press-center/akbarys-in-orenburg"
                className="pressCenterNews__card-button blue"
              >
                Читать
              </Link>
            </div>
          </div>
          <div className="pressCenterNews__card">
            <div className="pressCenterNews__card-head">
              <StaticImage
                className="pressCenterNews__card-image"
                placeholder="dominantColor"
                src="../../../images/pressCenter/item-2.jpg"
                alt="image"
                quality={95}
                formats={['auto', 'webp', 'avif']}
              />
            </div>
            <div className="pressCenterNews__card-body">
              <h3 className="pressCenterNews__card-title text-11 black">
                В РК утверждена предельная цена оптовой реализации сжиженного
                нефтяного газа
              </h3>
              <p className="pressCenterNews__card-description text-1 gray">
                На УКПГ-2 действует система закачки газа при очень высоком
                давлении.
              </p>
              <Link
                to="/press-center/akbarys-in-orenburg"
                className="pressCenterNews__card-button blue"
              >
                Читать
              </Link>
            </div>
          </div>
          <div className="pressCenterNews__card">
            <div className="pressCenterNews__card-head">
              <StaticImage
                className="pressCenterNews__card-image"
                placeholder="dominantColor"
                src="../../../images/pressCenter/item-3.jpg"
                alt="image"
                quality={95}
                formats={['auto', 'webp', 'avif']}
              />
            </div>
            <div className="pressCenterNews__card-body">
              <h3 className="pressCenterNews__card-title text-11 black">
                В РК утверждена предельная цена оптовой реализации сжиженного
                нефтяного газа
              </h3>
              <p className="pressCenterNews__card-description text-1 gray">
                На УКПГ-2 действует система закачки газа при очень высоком
                давлении.
              </p>
              <Link
                to="/press-center/akbarys-in-orenburg"
                className="pressCenterNews__card-button blue"
              >
                Читать
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="line"></div>
  </div>
);

export default PressCenterNews;
