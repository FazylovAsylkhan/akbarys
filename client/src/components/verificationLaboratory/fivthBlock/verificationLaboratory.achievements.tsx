import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FC, useEffect } from 'react';

import EyeImg from '../../../data/images/eye.svg';
import id from '../../../utils/randomId';

import './verificationLaboratory.achievements.scss';

function disableScroll() {
  const { body } = document;
  const headers = document.querySelectorAll('header');
  headers.forEach((header) => header.classList.add('achievments-disable'));
  const pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = String(pagePosition);
  body.style.top = `${-pagePosition}px`;
}
function enableScroll() {
  const { body } = document;
  const headers = document.querySelectorAll('header');
  headers.forEach((header) => header.classList.remove('achievments-disable'));
  const pagePosition = body.dataset.position
    ? parseInt(body.dataset.position, 10)
    : 0;
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data-position');
}

interface LaboratoryProps {
  content: any
}

const VerificationLaboratoryAchievements: FC<LaboratoryProps> = ({
  content,
}) => {
  const { title, description, certificates } = content;
  useEffect(() => {
    const arrow = document.querySelector(
      '.verificationLaboratoryAchievements__toggle',
    );
    const button = document.querySelector(
      '.verificationLaboratoryAchievements__toggle-text',
    );
    arrow?.addEventListener('click', () => {
      const wrapper = document.querySelector(
        '.verificationLaboratoryAchievements__items',
      );
      wrapper?.classList.toggle('show');
      arrow.classList.toggle('show');
      if (wrapper?.classList.contains('show') && button) {
        button.textContent = 'Скрыть';
      } else if (button) {
        button.textContent = 'Раскрыть';
      }
    });
  }, []);

  const openModalWindow = (n: number) => {
    disableScroll();
    const window = document.querySelectorAll('.verificationLaboratoryAchievements__window')[n];
    window.classList.add('active');
  };
  const closeModalWindow = (n: number) => {
    const window = document.querySelectorAll('.verificationLaboratoryAchievements__window')[n];
    window.classList.remove('active');
    enableScroll();
  };
  return (
    <div className="verificationLaboratoryAchievements ">
      <div className="container">
        <div className="verificationLaboratoryAchievements__wrapper">
          <div className="verificationLaboratoryAchievements__content">
            <h2 className="verificationLaboratoryAchievements__content-title title-1 black">
              {title}
            </h2>
            <div className="verificationLaboratoryAchievements__content-description text-1 gray">
              {description}
            </div>
          </div>

          <div className="verificationLaboratoryAchievements__items">
            {certificates.map((certificate: any, index: number) => (
                <div
                  className="verificationLaboratoryAchievements__item"
                  onClick={() => openModalWindow(index)}
                  key={id()}
                >
                  <span
                    style={{ display: 'block' }}
                    className="verificationLaboratoryAchievements__item-link text-6 gray"
                  >
                    {certificate.title}
                  </span>
                  <span
                    className="verificationLaboratoryAchievements__item-description text-1"
                    style={{ color: '#C4C4C4' }}
                  >
                    {certificate.description}
                  </span>
                  <EyeImg className="verificationLaboratoryAchievements__item-img" />
                </div>
            ))}
          </div>
        </div>
      </div>
      {certificates.map((certificate: any, index: number) => (
          <div className="verificationLaboratoryAchievements__window" key={id()}>
            <div className="verificationLaboratoryAchievements__window-content">
              <h2 className="verificationLaboratoryAchievements__window-title text-3 white">
                {certificate.title}
              </h2>
              <button
                className="verificationLaboratoryAchievements__window-button"
                onClick={() => closeModalWindow(index)}
              >
                <span className="cross-line"></span>
                <span className="cross-line"></span>
              </button>
              <div className="verificationLaboratoryAchievements__window-inner">
                {certificate.images.map((image: any) => {
                  const img = getImage(image);
                  if (img) {
                    return (
                      <GatsbyImage
                        className="verificationLaboratoryAchievements__window-image"
                        image={img}
                        alt={certificate.title}
                        key={id()}
                      />
                    );
                  }
                })}
              </div>
              <p className="verificationLaboratoryAchievements__window-description text-1 black">
                {certificate.description}
              </p>
            </div>
          </div>
      ))}
      <div className="line"></div>
    </div>
  );
};
export default VerificationLaboratoryAchievements;
