import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './serviceCenter.opportunities.scss';

import { FC } from 'react';
import {
  initNav,
  showPagination,
  validationNav,
} from '../../../utils/mainUtils';
import id from '../../../utils/randomId';

interface ServiceCenterOpportunitiesProps {
  content: any
}
const ServiceCenterOpportunities: FC<ServiceCenterOpportunitiesProps> = ({
  content,
}) => {
  SwiperCore.use([Pagination, Navigation, EffectFade]);

  const { title, description, images } = content;
  return (
    <div className="serviceCenterOpportunities">
      <div className="container">
        <div className="serviceCenterOpportunities__wrapper">
          <h2 className="serviceCenterOpportunities__slider-title title-1 black">
            {title}
          </h2>
          <p className="serviceCenterOpportunities__slider-description text-1 gray">
            {description}
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
            {images.map((image: any) => {
              const img = getImage(image);
              return (
                <SwiperSlide key={id()}>
                  {img ? (
                    <GatsbyImage
                      className="serviceCenter__body-image"
                      image={img}
                      alt={title}
                    />
                  ) : null}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ServiceCenterOpportunities;
