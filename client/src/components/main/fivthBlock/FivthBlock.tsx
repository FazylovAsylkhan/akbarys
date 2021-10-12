import * as React from 'react';
import { FC, useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './fivthBlock.scss';

import {
  hideSlides,
  initNav,
  showPagination,
  showSlide,
  validationNav,
} from '../../../utils/mainUtils';
import id from '../../../utils/randomId';

interface FivthBlockProps {
  content: any
}

const FivthBlock: FC<FivthBlockProps> = ({ content }) => {
  const currentSlidesRef = useRef<Element[] | null>(null);
  const { title, slides } = content;

  return (
    <div className="projects">
      <div className="screen__content container">
        <div className="projects__wrapper">
          <h2 className="projects__title mainText-3 black">{title} </h2>
          <Swiper
            className="projects__slider"
            slidesPerView={1}
            direction="horizontal"
            nested
            spaceBetween={130}
            watchOverflow
            observer
            observeSlideChildren
            observeParents
            speed={1500}
            navigation
            effect="slide"
            pagination={{
              type: 'fraction',
            }}
            onAfterInit={(swiper) => {
              currentSlidesRef.current = swiper.slides as unknown as Element[];
              initNav(swiper, 'projects');
              showPagination(swiper);
              validationNav(swiper);
            }}
            onSlideChange={(swiper) => {
              const slidesElements = currentSlidesRef.current;
              if (slidesElements) {
                hideSlides(slidesElements, swiper, 'projects__content');
                showSlide(slidesElements, swiper, 'projects__advantages');
              }
              validationNav(swiper);
              showPagination(swiper);
            }}
          >
            {slides.map((slide: any) => {
              const {
                description, image, specifications,
              } = slide;
              const img = getImage(image);
              return (
                <SwiperSlide className="projects__slide" key={id()}>
                  <div className="projects__content">
                    {img ? (
                      <GatsbyImage
                        className="projects__content-image"
                        image={img}
                        alt={slide.title}
                      />
                    ) : null}
                    <div className="projects__content-box">
                      <h4 className="projects__content-title mainText-8 black">
                        {slide.title}
                      </h4>
                      <p className="projects__content-description mainText-6 gray">
                        {description}
                      </p>
                    </div>
                    <div className="projects__advantages">
                      {specifications.map((specification: any) => (
                          <h3 className="projects__advantages-item" key={id()}>
                            <span className="projects__content-subtitle mainText-7 black">
                              {specification.digit}
                            </span>
                            <span className="projects__content-description mainText-6 gray">
                              {specification.description}
                            </span>
                          </h3>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FivthBlock;
