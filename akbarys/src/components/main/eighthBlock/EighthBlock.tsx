import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  hideSlides,
  initNav,
  showPagination,
  showSlide,
  validationNav,
} from '../../../utils/mainUtils';
import './eighthBlock.scss';
import data from '../../../utils/constants';

const EighthBlock = () => {
  const sliderRef = React.useRef<Element[] | null>(null);
  const eighthBlock: any = data.pages.main.blocks[7];

  const getPartnersImagesElements = () => {
    const copyImages: Function[] = eighthBlock.partnersImages.slice();
    const imagesElements = copyImages.map((Image, index) => (
      <div className="partners__slide-item" key={`image${index}`}>
        {<Image />}
      </div>
    ));
    return imagesElements;
  };
  return (
    <div className="partners">
      <div className="screen__content container">
        <div className="partners__wrapper">
          <h2 className="partners__title title-1 black">{`${eighthBlock.title}`}</h2>
          <p className="partners__description text-1 gray">{`${eighthBlock.description}`}</p>
          <Swiper
            className="partners__slider"
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
            onBeforeInit={(swiper) => {
              swiper.params.slideToClickedSlide = false;
              swiper.params.simulateTouch = false;
            }}
            onAfterInit={(swiper) => {
              sliderRef.current = swiper.slides as unknown as Element[];
              // initNav(swiper, "partners")
              // showPagination(swiper)
              // validationNav(swiper)
            }}
            onSlideChange={(swiper) => {
              const slides = sliderRef.current;
              if (slides) {
                hideSlides(slides, swiper, 'partners__slide-item-wrapper');

                const nextSlide = slides[swiper.realIndex + 1];

                if (nextSlide) {
                  const nextWrapper = nextSlide.querySelector(
                    '.partners__slide-item-wrapper',
                  );
                  nextWrapper?.classList.add('hide');
                }
                setTimeout(() => {
                  showSlide(slides, swiper, 'partners__slide-item-wrapper');
                }, 1000);
              }
              validationNav(swiper);
              showPagination(swiper);
            }}
          >
            <SwiperSlide className="partners__slide">
              <div className="partners__slide-item-wrapper">
                {getPartnersImagesElements()}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EighthBlock;
