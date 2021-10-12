import * as React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC } from 'react';
import {
  hideSlides,
  showPagination,
  validationNav,
} from '../../../utils/mainUtils';
import Partners1 from '../../../data/images/partners/partners1.svg';
import Partners2 from '../../../data/images/partners/partners2.svg';
import Partners3 from '../../../data/images/partners/partners3.svg';
import Partners4 from '../../../data/images/partners/partners4.svg';
import Partners5 from '../../../data/images/partners/partners5.svg';
import Partners6 from '../../../data/images/partners/partners6.svg';
import Partners7 from '../../../data/images/partners/partners7.svg';
import Partners8 from '../../../data/images/partners/partners8.svg';
import Partners9 from '../../../data/images/partners/partners9.svg';
import Partners10 from '../../../data/images/partners/partners10.svg';
import './sft.partners.scss';

interface SftPartnersProps {
  content: any
}

const SftPartners:FC<SftPartnersProps> = ({ content }) => {
  const sliderRef = React.useRef<Element[] | null>(null);
  const { title } = content;
  SwiperCore.use([Pagination, Navigation]);
  const getPartnersImagesElements = () => {
    const partnersLogo = [
      Partners1,
      Partners2,
      Partners3,
      Partners4,
      Partners5,
      Partners6,
      Partners7,
      Partners8,
      Partners9,
      Partners10,
    ];
    const imagesElements = partnersLogo.map((Image, index) => (
      <div className="sftPartners__slide-item" key={`image${index}`}>
        {<Image />}
      </div>
    ));
    return imagesElements;
  };
  return (
    <div className="sftPartners">
      <div className=" container">
        <div className="sftPartners__wrapper">
          <h2 className="sftPartners__title title-1 black">{title}</h2>
          <Swiper
            className="sftPartners__slider"
            slidesPerView={1}
            direction="horizontal"
            nested
            observer
            watchOverflow
            observeSlideChildren
            observeParents
            effect="slide"
            speed={1500}
            onSlideChange={(swiper) => {
              const slides = sliderRef.current;
              if (slides) {
                hideSlides(slides, swiper, 'sftPartners__slide-item-wrapper');

                const nextSlide = slides[swiper.realIndex + 1];

                if (nextSlide) {
                  const nextWrapper = nextSlide.querySelector(
                    '.sftPartners__slide-item-wrapper',
                  );
                  nextWrapper?.classList.add('hide');
                }
              }
              validationNav(swiper);
              showPagination(swiper);
            }}
          >
            <SwiperSlide className="sftPartners__slide">
              <div className="sftPartners__slide-item-wrapper">
                {getPartnersImagesElements()}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SftPartners;
