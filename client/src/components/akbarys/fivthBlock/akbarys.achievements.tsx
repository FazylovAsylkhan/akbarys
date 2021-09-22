import './akbarys.achievements.scss';

import * as React from 'react';
import { useEffect } from 'react';

import EyeImg from '../../../images/eye.svg';
import ArrowImg from '../../../images/toggle-arrow.svg';
import certificate1 from '../../../static/argjkyrg.pdf';
import certificate2 from '../../../static/vzksxnwu.pdf';
import certificate3 from '../../../static/dfmJqwmb.pdf';
import certificate4 from '../../../static/vzivbfau.pdf';
import certificate5 from '../../../static/jnmkvjtb.pdf';
import certificate6 from '../../../static/ukcatdbd.pdf';

function openCertificate(id: string) {
  const link = document.getElementById(id) as HTMLLinkElement;
  link.click();
}
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
            Каждый день мы стремимся повышать качество наших услуг, улучшать
            профессиональные навыки наших сотрудников и вносить свой вклад в
            развитие региона и страны в целом.
          </div>
        </div>
        <div className="akbarysAchievments__items">
          <div
            className="akbarysAchievments__item"
            onClick={() => openCertificate('certificate1')}
          >
            <a
              href={certificate1}
              target="_blank"
              rel="noreferrer"
              id="certificate1"
              style={{ display: 'block' }}
              className="akbarysAchievments__item-link text-6 gray"
              onClick={(e) => e.stopPropagation()}
            >
              Лучший Подрядчик КПО
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              Награда Лучший Подрядчик KPO B. V. в области ОТ, ТБ и ООС за 2018
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item"
            onClick={() => openCertificate('certificate3')}
          >
            <a
              href={certificate3}
              target="_blank"
              rel="noreferrer"
              id="certificate3"
              style={{ display: 'block' }}
              className="akbarysAchievments__item-link text-6 gray"
              onClick={(e) => e.stopPropagation()}
            >
              Ежегодная премия HSE
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              Награда KPO B. V. за заслуги 2017
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item"
            onClick={() => openCertificate('certificate2')}
          >
            <a
              href={certificate2}
              target="_blank"
              rel="noreferrer"
              id="certificate2"
              style={{ display: 'block' }}
              className="akbarysAchievments__item-link text-6 gray"
              onClick={(e) => e.stopPropagation()}
            >
              Лауреат ПАРЫЗ-2016
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              Награда в номинации «Лучшее предприятие в области охраны труда и
              техники безопасности»
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item"
            onClick={() => openCertificate('certificate4')}
          >
            <a
              href={certificate4}
              target="_blank"
              rel="noreferrer"
              id="certificate4"
              style={{ display: 'block' }}
              className="akbarysAchievments__item-link text-6 gray"
              onClick={(e) => e.stopPropagation()}
            >
              Сертификат доверия
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              “Сертификатом доверия” о соблюдении требований охраны труда
              работников.
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item"
            onClick={() => openCertificate('certificate5')}
          >
            <a
              href={certificate5}
              target="_blank"
              rel="noreferrer"
              id="certificate5"
              style={{ display: 'block' }}
              className="akbarysAchievments__item-link text-6 gray"
              onClick={(e) => e.stopPropagation()}
            >
              Лучший Подрядчик KPO B. V.
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              Лучший Подрядчик KPO B. V. в области ОТ, ТБ и ООС за 2016г
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item"
            onClick={() => openCertificate('certificate6')}
          >
            <a
              href={certificate6}
              target="_blank"
              rel="noreferrer"
              id="certificate6"
              style={{ display: 'block' }}
              className="akbarysAchievments__item-link text-6 gray"
              onClick={(e) => e.stopPropagation()}
            >
              Лучший показатель 2015
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              Лучший показатель 2015 года в области ОТ, ТБ и ООС среди подрядных
              организаций
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
