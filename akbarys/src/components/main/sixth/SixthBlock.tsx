import './sixthBlock.scss';

import { Link } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import data from '../../../utils/constants';
import {
  hideSlides,
  initNav,
  showPagination,
  showSlide,
  validationNav,
} from '../../../utils/mainUtils';

const SixthBlock = () => {
  const currentSlidesRef = useRef<Element[] | null>(null);

  const sixthBlock: any = data.pages.main.blocks[5];
  return (
    <div className="projects">
      <div className="screen__content container">
        <div className="projects__wrapper">
          <h2 className="projects__title black">{`${sixthBlock.title}`} </h2>
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
              const slides = currentSlidesRef.current;
              if (slides) {
                hideSlides(slides, swiper, 'projects__content');
                showSlide(slides, swiper, 'projects__advantages');
              }
              validationNav(swiper);
              showPagination(swiper);
            }}
          >
            <SwiperSlide className="projects__slide">
              <div className="projects__content">
                <StaticImage
                  className="projects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects1.jpg"
                  alt="projects1"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  {/* <Link className="button projects__button" to="/">
                    Открыть проект
                  </Link> */}
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__content">
                <StaticImage
                  className="projects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects2.jpg"
                  alt="projects2"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  {/* <Link className="button projects__button" to="/">
                    Открыть проект
                  </Link> */}
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__content">
                <StaticImage
                  className="projects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects2.jpg"
                  alt="projects2"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  {/* <Link className="button projects__button" to="/">
                    Открыть проект
                  </Link> */}
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__content">
                <StaticImage
                  className="projects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects2.jpg"
                  alt="projects2"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  {/* <Link className="button projects__button" to="/">
                    Открыть проект
                  </Link> */}
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="projects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SixthBlock;
