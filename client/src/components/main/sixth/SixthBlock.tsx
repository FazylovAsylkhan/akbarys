import * as React from 'react';
import { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './sixthBlock.scss';

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
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    Tengizchevroil
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    TCO - казахстанское партнерство занимающиеся разведкой,
                    разработкой, добычей и сбытом сырой нефти, сжиженного
                    нефтяного газа, сухого газа и серы.
                  </p>
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      5004
                    </span>
                    <span className="projects__content-description text-1 gray">
                      LTI Days
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      158
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Человек задействовано
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      18
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Eдиниц оборудования
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      102000
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Человеко-часов
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
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    Karachaganak Petroleum Operating B.V.
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    KPO B.V. - одно из крупнейших в мире месторождение
                    нефтегазового конденсата в Западно-Казахстанcкой области
                    Республики Казахстан
                  </p>
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      5006
                    </span>
                    <span className="projects__content-description text-1 gray">
                      LTI Days
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      120
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Человек задействовано
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      14
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Eдиниц оборудования
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      92250
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Человеко-часов
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
                  src="../../../images/projects3.jpg"
                  alt="projects2"
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="projects__content-box">
                  <h4 className="projects__content-title title-2 black">
                    North Caspian Operating Company N.V.
                  </h4>
                  <p className="projects__content-description text-1 gray">
                    NCOC N.V. представляет собой первый крупный проект освоения
                    морских нефтегазовых месторождений в Казахстане.
                  </p>
                </div>
                <div className="projects__advantages">
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      18952
                    </span>
                    <span className="projects__content-description text-1 gray">
                      LTI Days
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      65
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Человек задействовано
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      21
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Eдиниц оборудования
                    </span>
                  </h3>
                  <h3 className="projects__advantages-item">
                    <span className="projects__content-subtitle text-3 black">
                      208 477
                    </span>
                    <span className="projects__content-description text-1 gray">
                      Человеко-часов
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
