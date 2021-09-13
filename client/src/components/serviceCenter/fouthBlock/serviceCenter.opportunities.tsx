// import SvgImg from '../../../images/serviceCenter/item-icon.svg';
import './serviceCenter.opportunities.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  initNav,
  showPagination,
  validationNav,
} from '../../../utils/mainUtils';

const ServiceCenterOpportunities = () => {
  SwiperCore.use([Pagination, Navigation, EffectFade]);
  return (
    <div className="serviceCenterOpportunities">
      <div className="container">
        <div className="serviceCenterOpportunities__wrapper">
          <h2 className="serviceCenterOpportunities__slider-title title-1 black">
            Квалифицированный персонал
          </h2>
          <p className="serviceCenterOpportunities__slider-description text-1 gray">
            Персонал СЦ регулярно повышает квалификацию, а также проходит
            внеочередное обучение, при внедрении нового инструмента и сервисных
            регламентов.
          </p>
          <Swiper
            className="serviceCenterOpportunities__slider"
            speed={1500}
            slidesPerView={1}
            fadeEffect={{
              crossFade: true,
            }}
            pagination={{
              clickable: true,
              type: 'fraction',
            }}
            navigation
            effect="fade"
            onAfterInit={(swiper) => {
              initNav(swiper, 'serviceCenterOpportunities');
              showPagination(swiper);
              validationNav(swiper);
            }}
            onSlideChange={(swiper) => {
              validationNav(swiper);
              showPagination(swiper);
            }}
          >
            <SwiperSlide>
              <StaticImage
                className="serviceCenterOpportunities__image"
                placeholder="dominantColor"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                src="../../../images/serviceCenter/slider/item-6.jpg"
                alt="Opportunities"
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                className="serviceCenterOpportunities__image"
                placeholder="dominantColor"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                src="../../../images/serviceCenter/slider/item-1.jpg"
                alt="Opportunities"
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                className="serviceCenterOpportunities__image"
                placeholder="dominantColor"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                src="../../../images/serviceCenter/slider/item-2.jpg"
                alt="Opportunities"
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                className="serviceCenterOpportunities__image"
                placeholder="dominantColor"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                src="../../../images/serviceCenter/slider/item-3.jpg"
                alt="Opportunities"
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                className="serviceCenterOpportunities__image"
                placeholder="dominantColor"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                src="../../../images/serviceCenter/slider/item-4.jpg"
                alt="Opportunities"
              />
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                className="serviceCenterOpportunities__image"
                placeholder="dominantColor"
                quality={95}
                formats={['auto', 'webp', 'avif']}
                src="../../../images/serviceCenter/slider/item-5.jpg"
                alt="Opportunities"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ServiceCenterOpportunities;
