import './sft.partners.scss';

import * as React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from '../../../utils/constants';
import {
  hideSlides,
  initNav,
  showPagination,
  showSlide,
  validationNav,
} from '../../../utils/mainUtils';

const SftPartners = () => {
  const eighthBlock: any = data.pages.main.blocks[7];
  const sliderRef = React.useRef<Element[] | null>(null);
  SwiperCore.use([Pagination, Navigation]);
  const getsftPartnersImagesElements = () => {
    const copyImages: Function[] = eighthBlock.partnersImages.slice();
    const imagesElements = copyImages.map((Image, index) => (
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
          <h2 className="sftPartners__title title-1 black">{`${eighthBlock.title}`}</h2>
          <p className="sftPartners__description text-1 gray">{`${eighthBlock.description}`}</p>
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
            // navigation
            speed={1500}
            // pagination={{
            //   type: 'fraction',
            // }}
            onAfterInit={(swiper) => {
              // sliderRef.current = swiper.slides as unknown as Element[];
              // initNav(swiper, 'sftPartners');
              // showPagination(swiper);
              // const slides = sliderRef.current;
              // showSlide(slides, swiper, 'sftPartners__slide-item-wrapper');
              // validationNav(swiper);
              // const slides = sliderRef.current;
              // showSlide(slides, swiper, 'sftPartners__slide-item-wrapper');
            }}
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
                {getsftPartnersImagesElements()}
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
