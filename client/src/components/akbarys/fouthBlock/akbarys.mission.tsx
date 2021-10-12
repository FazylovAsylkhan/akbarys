import * as React from 'react';
import { FC, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import './akbarys.mission.scss';
import id from '../../../utils/randomId';

interface AkbarysMissionProps {
  content: any
}
const AkbarysMission: FC<AkbarysMissionProps> = ({ content }) => {
  const {
    title, description, images, qualities,
  } = content;
  let featsItems: null | Element[] = null;

  useEffect(() => {
    featsItems = document.querySelectorAll(
      '.akbarysMission__feats-item',
    ) as unknown as Element[];
    const backgroundImages = document.querySelectorAll('.akbarysMission__body');
    const image1 = backgroundImages[0];
    const image2 = backgroundImages[1];
    const image3 = backgroundImages[2];
    featsItems.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        const circle = e.target as HTMLElement;
        e.stopPropagation();
        const firstCircle = circle.classList.contains(
          'akbarysMission__feats-item-1',
        );
        const secondCircle = circle.classList.contains(
          'akbarysMission__feats-item-2',
        );
        const thirdCircle = circle.classList.contains(
          'akbarysMission__feats-item-3',
        );
        if (firstCircle) {
          backgroundImages.forEach((image) => image.classList.remove('show'));
          image1?.classList.add('show');
        } else if (secondCircle) {
          backgroundImages.forEach((image) => image.classList.remove('show'));
          image2?.classList.add('show');
        } else if (thirdCircle) {
          backgroundImages.forEach((image) => image.classList.remove('show'));
          image3?.classList.add('show');
        }
      });
      item.addEventListener('mouseleave', () => backgroundImages.forEach((image) => image.classList.remove('show')));
    });
  }, []);

  SwiperCore.use([EffectFade, Autoplay]);

  return (
    <div className="akbarysMission">
      <div className="container" style={{ height: '100%' }}>
        <div className="akbarysMission__wrapper">
          <div className="akbarysMission__content">
            <div className="akbarysMission__title title-1 white">{title}</div>
            {description.map((text: any) => (
              <div key={id()} className="akbarysMission__text text-1 white">
                {text}
              </div>
            ))}
          </div>
          <div className="akbarysMission__feats">
            <div className="akbarysMission__feats-item akbarysMission__feats-item-1">
              <span className="akbarysMission__feats-text text-1">
                {qualities[0]}
              </span>
            </div>
            <div className="akbarysMission__feats-item akbarysMission__feats-item-2">
              <span className="akbarysMission__feats-text text-1">
              {qualities[1]}
              </span>
            </div>
            <div className="akbarysMission__feats-item akbarysMission__feats-item-3">
              <span className="akbarysMission__feats-text text-1">
              {qualities[2]}
              </span>
            </div>
          </div>
        </div>
      </div>
      {images.map((image: any, index: number) => {
        const img = getImage(image.childrenImageSharp[0]);
        return (
          <div
            className={`akbarysMission__body akbarysMission__body-${index}`}
            key={id()}
          >
            {img ? (
              <GatsbyImage
                className="akbarysMission__body-image"
                image={img}
                alt={title}
              />
            ) : null}
            <div className="background"></div>
          </div>
        );
      })}
    </div>
  );
};

export default AkbarysMission;
