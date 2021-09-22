import * as React from 'react';
import { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import showPaginationBackground from '../../../utils/h2s';
import {
  initNav,
  showPagination,
  validationNav,
} from '../../../utils/mainUtils';
import './h2s.aboutSft.scss';

const H2sAboutSft = () => {
  const currentSlidesRef = useRef<Element[] | null>(null);
  SwiperCore.use([Pagination, Navigation, EffectFade]);
  return (
    <div className="h2sAboutSft">
      <div className="container">
        <div className="h2sAboutSft__wrapper">
          <Swiper
            className="h2sAboutSft__slider"
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
            navigation
            effect="fade"
            pagination={{
              type: 'fraction',
            }}
            onAfterInit={(swiper) => {
              currentSlidesRef.current = swiper.slides as unknown as Element[];
              initNav(swiper, 'h2sAboutSft');
              showPagination(swiper);
              if (currentSlidesRef.current) {
                showPaginationBackground(swiper, currentSlidesRef.current);
              }
              validationNav(swiper);
            }}
            onSlideChange={(swiper) => {
              validationNav(swiper);
              showPagination(swiper);
              if (currentSlidesRef.current) {
                showPaginationBackground(swiper, currentSlidesRef.current);
              }
            }}
          >
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/h2sService/h2s-img-1.jpg"
                  alt="projects1"
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Комплексное обесепечние газовой безопасности
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Обучение по Курсу H2S
                  </h3>

                  <p className="h2sAboutSft__content-description text-5 gray">
                    Задачей курса является предоставление информации о свойствах
                    и опасности сероводорода, о его воздействия на человека, а
                    также об использовании средств защиты органов дыхания, при
                    воздействии сероводорода
                  </p>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/h2sService/h2s-img-2.jpg"
                  alt="projects1"
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Комплексное обесепечние газовой безопасности
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Практическое применение СИЗОД
                  </h3>

                  <p className="h2sAboutSft__content-description text-5 gray">
                    Персоналу необходимо иметь практические навыки применения
                    СИЗОД. Для этих целей проводятся курсы а так же ежедневные
                    учебно-практические занятия с персоналом.
                  </p>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/h2sService/h2s-img-3.jpg"
                  alt="projects1"
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Комплексное обесепечние газовой безопасности
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Учебно-тренировочные занятия
                  </h3>
                  <p className="h2sAboutSft__content-description text-5 gray">
                    Проведения учебно-тренировочных занятий с персоналом по
                    выработке практических навыков выполнения действий при
                    использовании СИЗОД в аварийной ситуации. УТЗ проводятся
                    согласно утвержденному графику.
                  </p>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h2sAboutSft__slide">
              <div className="h2sAboutSft__content">
                <StaticImage
                  className="h2sAboutSft__content-image"
                  placeholder="dominantColor"
                  src="../../../images/h2sService/h2s-img-4.jpg"
                  alt="projects1"
                  quality={50}
                  formats={['auto', 'webp', 'avif']}
                />
                <div className="h2sAboutSft__content-box">
                  <h4 className="h2sAboutSft__content-subtitle text-6 gray">
                    Комплексное обесепечние газовой безопасности
                  </h4>
                  <h3 className="h2sAboutSft__content-title title-2 black">
                    Аудиты и инспекции
                  </h3>
                  <p className="h2sAboutSft__content-description text-5 gray">
                    Аудиты и инспекции помогают руководству проверять состояние
                    бизнеса и достоверность отчётности. Главная цель аудита —
                    выявить риски и усовершенствовать процессы после
                    консультации аудитора.
                  </p>
                  <div className="h2sAboutSft__digit"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default H2sAboutSft;
