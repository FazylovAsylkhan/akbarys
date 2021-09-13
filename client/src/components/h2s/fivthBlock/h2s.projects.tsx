import './h2s.projects.scss';

import { Link } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useRef } from 'react';
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

const H2sProjects = () => {
  const currentSlidesRef = useRef<Element[] | null>(null);
  const sixthBlock: any = data.pages.main.blocks[5];

  SwiperCore.use([Pagination, Navigation]);
  return (
    <div className="h2sProjects">
      <div className="container">
        <div className="h2sProjects__wrapper">
          <h2 className="h2sProjects__title black">{sixthBlock.title}</h2>
          <Swiper
            className="h2sProjects__slider"
            slidesPerView={1}
            direction="horizontal"
            spaceBetween={130}
            watchOverflow
            observer
            observeSlideChildren
            observeParents
            speed={1500}
            navigation
            nested
            effect="slide"
            pagination={{
              clickable: true,
              type: 'fraction',
            }}
            onAfterInit={(swiper) => {
              currentSlidesRef.current = swiper.slides as unknown as Element[];
              initNav(swiper, 'h2sProjects');
              showPagination(swiper);
              validationNav(swiper);
              const slides = currentSlidesRef.current;
              if (slides) showSlide(slides, swiper, 'h2sProjects__advantages');
            }}
            onSlideChange={(swiper) => {
              const slides = currentSlidesRef.current;
              if (slides) {
                hideSlides(slides, swiper, 'h2sProjects__content');
                showSlide(slides, swiper, 'h2sProjects__advantages');
              }
              validationNav(swiper);
              showPagination(swiper);
            }}
          >
            <SwiperSlide className="h2sProjects__slide">
              <div className="h2sProjects__content">
                <StaticImage
                  className="h2sProjects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects1.jpg"
                  alt="projects1"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sProjects__content-box">
                  <h4 className="h2sProjects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="h2sProjects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  <Link className="button h2sProjects__button" to="/">
                    Открыть проект
                  </Link>
                </div>
                <div className="h2sProjects__advantages">
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sProjects__slide">
              <div className="h2sProjects__content">
                <StaticImage
                  className="h2sProjects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects2.jpg"
                  alt="projects1"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sProjects__content-box">
                  <h4 className="h2sProjects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="h2sProjects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  <Link className="button h2sProjects__button" to="/">
                    Открыть проект
                  </Link>
                </div>
                <div className="h2sProjects__advantages">
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sProjects__slide">
              <div className="h2sProjects__content">
                <StaticImage
                  className="h2sProjects__content-image"
                  placeholder="dominantColor"
                  src="../../../images/projects1.jpg"
                  alt="projects2"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sProjects__content-box">
                  <h4 className="h2sProjects__content-title title-2 black">
                    Казахстан - North Caspian Operating Company N.V.
                  </h4>
                  <p className="h2sProjects__content-description text-1 gray">
                    Месторождение Кашаган входит в топ 10 крупнейших
                    месторождений мира, а так же является крупнейшим
                    месторождением на море.
                  </p>
                  <Link className="button h2sProjects__button" to="/">
                    Открыть проект
                  </Link>
                </div>
                <div className="h2sProjects__advantages">
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.first.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.first.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.second.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.second.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.third.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.third.description}
                    </span>
                  </h3>
                  <h3 className="h2sProjects__advantages-item">
                    <span className="h2sProjects__content-subtitle text-3 black">
                      {sixthBlock.advantages.fourth.digit}
                    </span>
                    <span className="h2sProjects__content-description text-1 gray">
                      {sixthBlock.advantages.fourth.description}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default H2sProjects;
