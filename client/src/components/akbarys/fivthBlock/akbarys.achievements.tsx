import './akbarys.achievements.scss';

import * as React from 'react';
import { useEffect } from 'react';

import EyeImg from '../../../images/eye.svg';
import ArrowImg from '../../../images/toggle-arrow.svg';

const AkbarysAchievements = () => {
  useEffect(() => {
    const arrow = document.querySelector('.akbarysAchievments__toggle');
    const button = document.querySelector('.akbarysAchievments__toggle-text');
    arrow?.addEventListener('click', () => {
      const wrapper = document.querySelector('.akbarysAchievments__items');
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
    <div className="akbarysAchievemnets container">
      <div className="akbarysAchievments__wrapper">
        <div className="akbarysAchievments__content">
          <h2 className="akbarysAchievments__content-title title-1 black">
            Достижения и сертификаты
          </h2>
          <div className="akbarysAchievments__content-description text-1 gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae massa
            sed ipsum in eros sit. Nibh sapien sed id laoreet.
          </div>
        </div>
        <div className="akbarysAchievments__items">
          <div
            className="akbarysAchievments__item"
            onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
            }
          >
            <h3 className="akbarysAchievments__item-link text-6 gray">
              Сертификат СТО РК №2131234
            </h3>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              (.pdf 1.2мб)
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
          <div
            className="akbarysAchievments__item"
            onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
            }
          >
            <h3 className="akbarysAchievments__item-link text-6 gray">
              Сертификат СТО РК №2131234
            </h3>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              (.pdf 1.2мб)
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
          <div
            className="akbarysAchievments__item"
            onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
            }
          >
            <h3 className="akbarysAchievments__item-link text-6 gray">
              Сертификат СТО РК №2131234
            </h3>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              (.pdf 1.2мб)
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
          <div
            className="akbarysAchievments__item"
            onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
            }
          >
            <h3 className="akbarysAchievments__item-link text-6 gray">
              Сертификат СТО РК №2131234
            </h3>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              (.pdf 1.2мб)
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
          <div
            className="akbarysAchievments__item"
            onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
            }
          >
            <h3 className="akbarysAchievments__item-link text-6 gray">
              Сертификат СТО РК №2131234
            </h3>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              (.pdf 1.2мб)
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
          <div
            className="akbarysAchievments__item"
            onClick={() => window.open('https://app.rs.school/certificate/ekv8kixa')
            }
          >
            <h3 className="akbarysAchievments__item-link text-6 gray">
              Сертификат СТО РК №2131234
            </h3>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              (.pdf 1.2мб)
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
        </div>
        <div className="akbarysAchievments__toggle">
          <span className="akbarysAchievments__toggle-text text-6 blue">
            Раскрыть
          </span>
          {<ArrowImg className="akbarysAchievments__toggle-arrow" />}
        </div>
      </div>
    </div>
  );
};
export default AkbarysAchievements;
