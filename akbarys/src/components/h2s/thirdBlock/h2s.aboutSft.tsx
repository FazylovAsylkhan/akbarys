import './h2s.aboutSft.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useRef } from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import showPaginationBackground from '../../../utils/h2s';
import {
  initNav,
  showPagination,
  validationNav,
} from '../../../utils/mainUtils';

const H2sAboutSft = () => {
  const currentSlidesRef = useRef<Element[] | null>(null);
  SwiperCore.use([Pagination, Navigation, EffectFade]);
  return (
    <div className="h2sAboutSft">
      <div className="container">
        <div className="h2sAboutSft__wrapper">
          <Swiper
            className="h2sAboutSft__slider"
            slidesPerView={1}
            direction="horizontal"
            spaceBetween={1000}
            watchOverflow
            observer
            nested
            observeSlideChildren
            observeParents
            speed={1500}
            fadeEffect={{
              crossFade: true,
            }}
            navigation
            effect="fade"
            pagination={{
              type: 'fraction',
            }}
            onAfterInit={(swiper) => {
              currentSlidesRef.current = swiper.slides as unknown as Element[];
              initNav(swiper, 'h2sAboutSft');
              showPagination(swiper);
              if (currentSlidesRef.current) {
                showPaginationBackground(swiper, currentSlidesRef.current);
              }
              validationNav(swiper);
            }}
            onSlideChange={(swiper) => {
              validationNav(swiper);
              showPagination(swiper);
              if (currentSlidesRef.current) {
                showPaginationBackground(swiper, currentSlidesRef.current);
              }
            }}
          >
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/h2sService/h2s-img-1.jpg"
                  alt="projects1"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Услуги комплексоного решения
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Нейтрализация сероводорода в процессе нефте и газодобычи
                  </h3>

                  <p className="h2sAboutSft__content-description text-5 gray">
                    Добыча углеводородов связана со многими опасными факторами.
                  </p>
                  <Link className="button h2sAboutSft__button" to="/">
                    подробнее
                  </Link>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects1.jpg"
                  alt="projects1"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Услуги комплексоного решения
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h3>

                  <p className="h2sAboutSft__content-description text-5 gray">
                    Добыча углеводородов связана со многими опасными факторами.
                    Одним из значимых, является наличие в пластах токсичных
                    газов: H2S, SO2, CO, CO2 и CH4.
                  </p>
                  <Link className="button h2sAboutSft__button" to="/">
                    подробнее
                  </Link>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects2.jpg"
                  alt="projects1"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Услуги комплексоного решения
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Нейтрализация сероводорода в процессе нефте и газодобычи
                  </h3>
                  <p className="h2sAboutSft__content-description text-5 gray">
                    Добыча углеводородов связана со многими опасными факторами.
                  </p>
                  <Link className="button h2sAboutSft__button" to="/">
                    подробнее
                  </Link>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default H2sAboutSft;
