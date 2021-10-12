import * as React from 'react';
import { FC } from 'react';
import './akbarys.achievements.scss';

import EyeImg from '../../../data/images/eye.svg';
import ArrowImg from '../../../data/images/toggle-arrow.svg';
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
function openList(btnTexts: any) {
  const arrow = document.querySelector('.akbarysAchievments__toggle');
  const button = document.querySelector('.akbarysAchievments__toggle-text');
  const items = document.querySelectorAll('.akbarysAchievments__item');
  arrow?.classList.toggle('opened');

  if (button && arrow?.classList.contains('opened')) {
    button.textContent = btnTexts[1];
    items.forEach((item) => {
      if (!item.classList.contains('default')) {
        item.classList.add('show');
      }
    });
  } else if (button) {
    button.textContent = btnTexts[0];
    items.forEach((item) => {
      if (!item.classList.contains('default')) {
        item.classList.remove('show');
      }
    });
  }
}
interface AkbarysAchievementsProps {
  content: any
}

const AkbarysAchievements: FC<AkbarysAchievementsProps> = ({ content }) => {
  const {
    title, description, certificates, btnText,
  } = content;
  return (
    <div className="akbarysAchievemnets container">
      <div className="akbarysAchievments__wrapper">
        <div className="akbarysAchievments__content">
          <h2 className="akbarysAchievments__content-title title-1 black">
            {title}
          </h2>
          <div className="akbarysAchievments__content-description text-1 gray">
            {description}
          </div>
        </div>
        <div className="akbarysAchievments__items">
          <div
            className="akbarysAchievments__item default"
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
              {certificates[0].title}
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              {certificates[0].description}
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item default"
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
              {certificates[1].title}
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              {certificates[1].description}
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item default"
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
              {certificates[2].title}
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              {certificates[2].description}
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>

          <div
            className="akbarysAchievments__item default"
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
              {certificates[3].title}
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              {certificates[3].description}
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
              {certificates[4].title}
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              {certificates[4].description}
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
              {certificates[5].title}
            </a>
            <span
              className="akbarysAchievments__item-description text-1"
              style={{ color: '#C4C4C4' }}
            >
              {certificates[5].description}
            </span>
            <EyeImg className="akbarysAchievments__item-img" />
          </div>
        </div>
        <div
          className="akbarysAchievments__toggle"
          onClick={() => openList(btnText)}
        >
          <span className="akbarysAchievments__toggle-text text-6 blue">
            {btnText[0]}
          </span>
          {<ArrowImg className="akbarysAchievments__toggle-arrow" />}
        </div>
      </div>
    </div>
  );
};
export default AkbarysAchievements;
