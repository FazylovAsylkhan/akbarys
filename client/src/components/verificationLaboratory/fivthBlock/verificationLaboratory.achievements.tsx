import * as React from 'react';
import { FC, useEffect } from 'react';

import EyeImg from '../../../data/images/eye.svg';

import certificate1 from '../../../static/eiikqegw.pdf';
import certificate2 from '../../../static/wmssygkj.pdf';

import './verificationLaboratory.achievements.scss';

function openCertificate(id: string) {
  const link = document.getElementById(id) as HTMLLinkElement;
  link.click();
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
                {certificates[0].title}
              </a>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                {certificates[0].description}
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
                {certificates[1].title}
              </a>
              <span
                className="verificationLaboratoryAchievements__item-description text-1"
                style={{ color: '#C4C4C4' }}
              >
                {certificates[1].description}
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
