import React, { useRef, useState } from 'react';
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
import { HeaderTypes, PaginationProps } from '../types/mainTypes';
import { changeMenuHeader, setEffects } from '../utils/mainUtils';
import '../scss/mainStyle.scss';
import NinthBlock from '../components/main/ninthBlok/NinthBlock';
import EighthBlock from '../components/main/eighthBlock/EighthBlock';
import SeventhBlock from '../components/main/seventhBlock/SeventhBlock';
import SixthBlock from '../components/main/sixth/SixthBlock';
import FivthBlock from '../components/main/fivthBlock/FivthBlock';
import ThirdBlock from '../components/main/thirdBlock/ThirdBlock';
import MainAkbarys from '../components/main/firstBlock/mainAkbarys';

const IndexPage = (props: any) => {
  const pageSliderRef = useRef<Element | null>(null);
  const stateHeaderColor = useState(HeaderTypes.LIGHT);
  const [headerColor] = stateHeaderColor;
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

  
  const { firstBlock, secondBlock } = props.data.markdownRemark.frontmatter.contentPage.main

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
        changeMenuHeader(swiper, stateHeaderColor, paginationElement);
        const pageSlider = pageSliderRef.current;
        if (pageSlider) setEffects(pageSlider, swiper);
      }}
    >
      <Seo title="Главная" />
      <Header color={headerColor} />
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
    </Swiper>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {contentPage: {main: {lang: {eq: "ru"}}}}) {
      frontmatter {
        contentPage {
          main {
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
                url
                text
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
        }
      }
    }
  }
`