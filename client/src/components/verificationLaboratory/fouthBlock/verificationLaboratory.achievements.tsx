import './verificationLaboratory.achievements.scss';

import * as React from 'react';
import { useEffect } from 'react';

import EyeImg from '../../../images/eye.svg';
import ArrowImg from '../../../images/toggle-arrow.svg';

const VerificationLaboratoryAchievements = () => {
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
  return (
    <div className="verificationLaboratoryAchievements ">
      <div className="container">
        <div className="verificationLaboratoryAchievements__wrapper">
          <div className="verificationLaboratoryAchievements__content">
            <h2 className="verificationLaboratoryAchievements__content-title title-1 black">
              Достижения и сертификаты
            </h2>
            <div className="verificationLaboratoryAchievements__content-description text-1 gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              massa sed ipsum in eros sit. Nibh sapien sed id laoreet.
            </div>
          </div>
          <div className="verificationLaboratoryAchievements__items">
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
              }
            >
              <h3 className="verificationLaboratoryAchievements__item-link text-6 gray">
                Сертификат СТО РК №2131234
              </h3>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                (.pdf 1.2мб)
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
              }
            >
              <h3 className="verificationLaboratoryAchievements__item-link text-6 gray">
                Сертификат СТО РК №2131234
              </h3>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                (.pdf 1.2мб)
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
              }
            >
              <h3 className="verificationLaboratoryAchievements__item-link text-6 gray">
                Сертификат СТО РК №2131234
              </h3>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                (.pdf 1.2мб)
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
              }
            >
              <h3 className="verificationLaboratoryAchievements__item-link text-6 gray">
                Сертификат СТО РК №2131234
              </h3>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                (.pdf 1.2мб)
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
              }
            >
              <h3 className="verificationLaboratoryAchievements__item-link text-6 gray">
                Сертификат СТО РК №2131234
              </h3>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                (.pdf 1.2мб)
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
              }
            >
              <h3 className="verificationLaboratoryAchievements__item-link text-6 gray">
                Сертификат СТО РК №2131234
              </h3>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                (.pdf 1.2мб)
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
          </div>
          <div className="verificationLaboratoryAchievements__toggle">
            <span className="verificationLaboratoryAchievements__toggle-text text-6 blue">
              Раскрыть
            </span>
            {
              <ArrowImg className="verificationLaboratoryAchievements__toggle-arrow" />
            }
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default VerificationLaboratoryAchievements;
