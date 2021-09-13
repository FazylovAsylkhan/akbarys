import './akbarys.projects.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  initNav,
  showPagination,
  validationNav,
} from '../../../utils/mainUtils';

const AkbarysProjects = () => {
  const currentSlidesRef = React.useRef<Element[] | null>(null);
  SwiperCore.use([Pagination, Navigation, EffectFade]);

  return (
    <div className="akbarysProjects">
      <div className="akbarysProjects__wrapper container">
        <h2 className="akbarysProjects__title title-1 black">
          Ключевые проекты
        </h2>
        <Swiper
          className="akbarysProjects__slider"
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
          effect="fade"
          navigation
          pagination={{
            type: 'fraction',
          }}
          onAfterInit={(swiper) => {
            currentSlidesRef.current = swiper.slides as unknown as Element[];
            initNav(swiper, 'akbarysProjects');
            showPagination(swiper);
            validationNav(swiper);
          }}
          onSlideChange={(swiper) => {
            validationNav(swiper);
            showPagination(swiper);
          }}
        >
          <SwiperSlide className="akbarysProjects__slide">
            <StaticImage
              className="akbarysPreview__body-image"
              placeholder="dominantColor"
              src="../../../images/akbarys/akbarysProject1.jpg"
              alt="akbarys"
              quality={95}
              formats={['auto', 'webp', 'avif']}
            />
          </SwiperSlide>
          <SwiperSlide className="akbarysProjects__slide">
            <StaticImage
              className="akbarysPreview__body-image"
              placeholder="dominantColor"
              src="../../../images/projects1.jpg"
              alt="akbarys"
              quality={95}
              formats={['auto', 'webp', 'avif']}
            />
          </SwiperSlide>
          <SwiperSlide className="akbarysProjects__slide">
            <StaticImage
              className="akbarysPreview__body-image"
              placeholder="dominantColor"
              src="../../../images/projects2.jpg"
              alt="akbarys"
              quality={95}
              formats={['auto', 'webp', 'avif']}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AkbarysProjects;
