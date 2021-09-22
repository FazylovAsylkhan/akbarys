import * as React from 'react';
import { FC, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './akbarys.mission.scss';
import id from '../../../utils/randomId';

interface AkbarysMissionProps {
  content: {
    title: string
    description: string[]
    images: any[]
  }
}
const AkbarysMission: FC<AkbarysMissionProps> = ({ content }) => {
  const { title, description, images } = content;
  let featsItems: null | Element[] = null;

  useEffect(() => {
    featsItems = document.querySelectorAll(
      '.akbarysMission__feats-item',
    ) as unknown as Element[];
  }, []);

  SwiperCore.use([EffectFade, Autoplay]);

  return (
    <div className="akbarysMission">
      <div className="container" style={{ height: '100%' }}>
        <div className="akbarysMission__wrapper">
          <div className="akbarysMission__content">
            <div className="akbarysMission__title title-1 white">{title}</div>
            {description.map((text) => (
                <div
                  key={id()}
                  className="akbarysMission__text text-1 white"
                >
                  {text}
                </div>
            ))}
          </div>
          <div className="akbarysMission__feats">
            <div className="akbarysMission__feats-item akbarysMission__feats-1">
              <span className="akbarysMission__feats-text text-1 white"></span>
            </div>
            <div className="akbarysMission__feats-item akbarysMission__feats-2">
              <span className="akbarysMission__feats-text text-1 white"></span>
            </div>
            <div className="akbarysMission__feats-item akbarysMission__feats-3">
              <span className="akbarysMission__feats-text text-1 white"></span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="akbarysMission__slider"
        slidesPerView={1}
        speed={2000}
        effect="fade"
        loop
        autoplay={true}
        onSlideChange={(swiper) => {
          if (featsItems) {
            featsItems.forEach((item) => item.classList.remove('show'));
            featsItems[swiper.realIndex].classList.add('show');
          }
        }}
      >
        {images.map((image) => {
          const img = getImage(image.childrenImageSharp[0]);
          return (
            <SwiperSlide key={id()}>
              {img ? (
                <GatsbyImage
                  className="akbarysMission__body-image"
                  image={img}
                  alt={title}
                />
              ) : null}
              <div className="background"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AkbarysMission;
