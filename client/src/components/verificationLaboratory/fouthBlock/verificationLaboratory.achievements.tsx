import * as React from 'react';
import { useEffect } from 'react';

import EyeImg from '../../../images/eye.svg';

import certificate1 from '../../../static/eiikqegw.pdf';
import certificate2 from '../../../static/wmssygkj.pdf';

import './verificationLaboratory.achievements.scss';

function openCertificate(id: string) {
  const link = document.getElementById(id) as HTMLLinkElement;
  link.click();
}
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
              Разрешительные документы
            </h2>
            <div className="verificationLaboratoryAchievements__content-description text-1 gray">
              Поверки средств измерений проводится не только в соответствии с
              требованиями ГОСТ ИСО/МЭК 17025-2009 «Общие требования к
              компетентности испытательных и калибровочных лабораторий», но и на
              основании Законов Республики Казахстан (ЗРК) «Об обеспечении
              единства измерений» и «Об аккредитации в области оценки
              соответствия».
            </div>
          </div>

          <div className="verificationLaboratoryAchievements__items">
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => openCertificate('certificate1')}
            >
              <a
                href={certificate1}
                target="_blank"
                rel="noreferrer"
                id="certificate1"
                style={{ display: 'block' }}
                className="verificationLaboratoryAchievements__item-link text-6 gray"
                onClick={(e) => e.stopPropagation()}
              >
                Аккредитация поверочной лаборатории
              </a>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                Поверочная лаборатория имеет аккредитацию на соответствие
                требованиям ГОСТ ISO/IEC 17025-2019
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
            <div
              className="verificationLaboratoryAchievements__item"
              onClick={() => openCertificate('certificate2')}
            >
              <a
                href={certificate2}
                target="_blank"
                rel="noreferrer"
                id="certificate2"
                style={{ display: 'block' }}
                className="verificationLaboratoryAchievements__item-link text-6 gray"
                onClick={(e) => e.stopPropagation()}
              >
                Аккредитация калибровочной лаборатории
              </a>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                Калибровочная лаборатория имеет аккредитацию на соответствие
                требованиям ГОСТ ISO/IEC 17025-2019
              </span>
              <EyeImg className="verificationLaboratoryAchievements__item-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default VerificationLaboratoryAchievements;
