import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useEffect } from 'react';
import './ppe.gasDetectionSystem.scss';

import Line from '../../../images/ppe/illustration/line.svg';
import TIP_IMG from '../../../images/tip.svg';

const GasDetectionSystem = () => {
  const tipsTexts = new Array(2).fill(1).map((e, i) => (
    <div
      key={`keyText-${i}`}
      className={`gasDetectionSystem__tip-text gasDetectionSystem__tip-text-${i} text-9`}
    >
      Резервуар для хранения пластовых вод
    </div>
  ));
  const tipsImgs = new Array(2)
    .fill(1)
    .map((e, i) => (
      <TIP_IMG
        key={`keyImg-${i}`}
        className={`gasDetectionSystem__tip-img gasDetectionSystem__tip-img-${i}`}
      />
    ));
  useEffect(() => {
    const block = document.querySelector('.gasDetectionSystem');
    const tipsTextElements = document.querySelectorAll(
      '.gasDetectionSystem__tip-text',
    );
    let numberTip = -1;
    block?.addEventListener('mouseover', (e) => {
      const element = e.target as HTMLElement;
      if (element.classList.contains('gasDetectionSystem__tip-img')) {
        tipsTextElements.forEach((tipElement) => tipElement.classList.remove('show'));
        numberTip = Number(element.classList[1].slice(-1));
        const textHtmlElement = tipsTextElements[numberTip];
        textHtmlElement.classList.add('show');
      } else if (tipsTextElements[numberTip] === e.target) {
        true;
      } else {
        tipsTextElements.forEach((tipElement) => tipElement.classList.remove('show'));
        numberTip = -1;
      }
    });
  }, []);
  return (
    <div className="gasDetectionSystem container">
      <div className="gasDetectionSystem__wrapper">
        <div className="gasDetectionSystem__box">
          <StaticImage
            className="gasDetectionSystem__box-image"
            placeholder="dominantColor"
            src="../../../images/ppe/gasDetectionSystem.png"
            alt="ppePreview"
            quality={50}
            formats={['auto', 'webp', 'avif']}
          />
          {tipsImgs}
          {tipsTexts}
        </div>
        <div className="gasDetectionSystem__content">
          <div className="gasDetectionSystem__content-title title-1 black">
            Система газообнаружения
          </div>
          <div className="gasDetectionSystem__content-text text-1 gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            consectetur egestas tortor ut morbi nunc. Viverra enim, in amet,
            aliquet ut egestas.
          </div>
          <div className="gasDetectionSystem__content-illustration">
            <StaticImage
              className="gasDetectionSystem__content-image"
              placeholder="dominantColor"
              src="../../../images/ppe/illustration/item-1.png"
              alt="ppePreview"
              quality={50}
              formats={['auto', 'webp', 'avif']}
            />
            <Line className="gasDetectionSystem__content-image" />
            <StaticImage
              className="gasDetectionSystem__content-image"
              placeholder="dominantColor"
              src="../../../images/ppe/illustration/item-2.png"
              alt="ppePreview"
              quality={50}
              formats={['auto', 'webp', 'avif']}
            />
            <Line className="gasDetectionSystem__content-image" />
            <StaticImage
              className="gasDetectionSystem__content-image"
              placeholder="dominantColor"
              src="../../../images/ppe/illustration/item-3.png"
              alt="ppePreview"
              quality={50}
              formats={['auto', 'webp', 'avif']}
            />
          </div>

          <div className="gasDetectionSystem__content-text text-1 gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
            dignissim scelerisque sed. Cursus massa magna amet, dolor. Congue
            eget vitae lacinia dolor. Vulputate sed ac est dapibus varius sed
            egestas tempor ipsum. Tortor, aliquam ac placerat et.
          </div>
          <div className="gasDetectionSystem__content-text mt text-1 gray">
            Erat sit aenean risus magnis placerat pulvinar a amet, risus.
            Tincidunt tortor lorem molestie arcu. Urna eu elementum sit velit
            amet. Arcu elit sapien mattis molestie porttitor et porttitor vitae.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasDetectionSystem;
