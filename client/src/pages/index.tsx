import React, { useRef } from 'react';
import { globalHistory } from '@reach/router';
import { graphql } from 'gatsby';
import SwiperCore, {
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../components/header/header';
import Seo from '../components/seo';
import SecondBlock from '../components/main/secondBlock/SecondBlock';
import { PaginationProps } from '../types/mainTypes';
import { changeMenuHeader, setEffects } from '../utils/mainUtils';
import '../scss/mainStyle.scss';
import NinthBlock from '../components/main/ninthBlok/NinthBlock';
import EighthBlock from '../components/main/eighthBlock/EighthBlock';
import SeventhBlock from '../components/main/seventhBlock/SeventhBlock';
import SixthBlock from '../components/main/sixth/SixthBlock';
import FivthBlock from '../components/main/fivthBlock/FivthBlock';
import ThirdBlock from '../components/main/thirdBlock/ThirdBlock';
import MainAkbarys from '../components/main/firstBlock/mainAkbarys';
import Plug from '../components/plug/plug';

const IndexPage = (props: any) => {
  let currentPage = '';
  globalHistory.listen(({ action }) => {
    if (action === 'PUSH') {
      currentPage = globalHistory.location.href.split('/')[3];
    }
  });
  const pageSliderRef = useRef<Element | null>(null);
  const { pagination } = (Pagination as PaginationProps).params;
  pagination.el = 'page__pagination';
  pagination.clickable = true;
  pagination.bulletClass = 'page__bullet';
  pagination.bulletActiveClass = 'page__bullet_active';
  pagination.bulletElement = 'div';
  const showActiveLink = () => {
    pageSliderRef.current
      ?.querySelector('.header__link')
      ?.classList.add('active');
  };

  SwiperCore.use([
    Mousewheel,
    Keyboard,
    Pagination,
    Navigation,
    EffectCoverflow,
  ]);

  const { firstBlock, secondBlock } = props.data.pageMainJson;

  return (
    <Swiper
      slidesPerView={1}
      mousewheel
      direction="vertical"
      className="page"
      keyboard
      effect="slide"
      speed={800}
      spaceBetween={0}
      watchOverflow
      observer
      observeSlideChildren
      observeParents
      pagination
      scrollbar
      simulateTouch={false}
      onAfterInit={(swiper) => {
        pageSliderRef.current = swiper.el as unknown as Element;
        const parentSliderWrapper = swiper.el.querySelector('.swiper-wrapper');
        parentSliderWrapper?.classList.add('page__wrapper');
        const paginationElemeny = swiper.el.querySelector('.swiper-pagination');
        paginationElemeny?.classList.add('page__pagination');
        showActiveLink();

        document.addEventListener('click', () => {
          const header = document.querySelector('header');
          if (swiper.mousewheel) {
            if (header?.classList.contains('active')) {
              swiper.allowTouchMove = false;
              swiper.mousewheel.disable();
            } else {
              swiper.allowTouchMove = true;
              swiper.mousewheel.enable();
            }
          }
        });
        swiper.allowTouchMove = false;
      }}
      onBeforeInit={(pageSlider) => {
        const swiper = pageSlider;
        swiper.params.slideToClickedSlide = false;
        swiper.params.simulateTouch = false;
      }}
      onInit={(pageSlider) => {
        const swiper = pageSlider;
        swiper.params.slideToClickedSlide = false;
      }}
      onSlideChange={(swiper) => {
        const paginationElement = document.body.querySelector('.swiper-pagination');
        changeMenuHeader(swiper, paginationElement);
        const pageSlider = pageSliderRef.current;
        if (pageSlider) setEffects(pageSlider, swiper);
      }}
    >
      <Seo title="Главная" />
      <Header data={props.data.headerJson} />
      <SwiperSlide className="page__screen screen">
        <MainAkbarys content={firstBlock} />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <SecondBlock content={secondBlock} />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <ThirdBlock />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <FivthBlock />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <SixthBlock />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <SeventhBlock />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <EighthBlock />
      </SwiperSlide>
      <SwiperSlide className="page__screen screen">
        <NinthBlock />
      </SwiperSlide>
      <Plug />
    </Swiper>
  );
};

export default IndexPage;

export const query = graphql`
  query PageMainQuery {
    pageMainJson(lang: { eq: "ru" }) {
      lang
      url
      firstBlock {
        description
        title
        image {
          childImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, JPG]
              placeholder: DOMINANT_COLOR
              quality: 50
            )
          }
        }
      }
      secondBlock {
        description
        title
        button {
          text
          url
        }
        subtitles {
          digit
          text
        }
        image {
          childImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, JPG]
              placeholder: DOMINANT_COLOR
              quality: 50
            )
          }
        }
      }
    }
    headerJson(lang: { eq: "ru" }) {
      lang
      links {
        text
        url
      }
      subMenu {
        links {
          text
          url
        }
        title
      }
    }
  }
`;
