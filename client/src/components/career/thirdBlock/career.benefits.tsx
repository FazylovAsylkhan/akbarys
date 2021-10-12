import * as React from 'react';
import { FC, useEffect } from 'react';
import id from '../../../utils/randomId';
import './career.benefits.scss';

function showBody(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const tabElement = e.target as HTMLElement;
  const tabs = document.querySelectorAll('.careerBenefits__tab');
  const isOpen = tabElement.classList.contains('show');
  if (isOpen) {
    tabElement.classList.remove('show');
  } else {
    tabs.forEach((tab) => tab.classList.remove('show'));
    tabElement.classList.add('show');
  }
}

interface Opportunity {
  digit: string
  title: string
  description: string
}
interface CareerBenefitsProps {
  content: {
    opportunities: Opportunity[]
  }
}
const CareerBenefits: FC<CareerBenefitsProps> = ({ content }) => {
  const { opportunities } = content;
  useEffect(() => {
    const itemsWrapper = document.querySelector('.careerBenefits__list');
    const contents = document.querySelectorAll('.careerBenefits__item');
    itemsWrapper?.addEventListener('mouseover', (event) => {
      const element = event.target as HTMLElement;
      if (element.classList.contains('careerBenefits__list-item')) {
        const numberItem = +element.classList[1].slice(-1);
        contents.forEach((e) => e.classList.remove('show'));
        contents[numberItem].classList.add('show');
      }
    });
    document.querySelector('.careerBenefits__item')?.classList.add('show');
  }, []);

  return (
    <div className="careerBenefits">
      <div className="container tabs-non">
        <div className="careerBenefits__wrapper ">
          <div className="careerBenefits__box">
            <div className="careerBenefits__inner">
              {opportunities.map((opportunity) => (
                <div className="careerBenefits__item" key={id()}>
                  <h2 className="careerBenefits__box-title text-6 black">
                    {opportunity.title}
                  </h2>
                  <p className="careerBenefits__box-description text-1 gray">
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ul className="careerBenefits__list">
            <li className="careerBenefits__list-item careerBenefits__list-item-0 show">
              <div className="careerBenefits__list-item-content">
                <h3 className="careerBenefits__list-item-subtitle text-3 black">
                  {opportunities[0].digit}
                </h3>
                <p className="careerBenefits__list-item-description text-7 gray">
                  {opportunities[0].title}
                </p>
              </div>
            </li>
            <div className="line"></div>
            <li className="careerBenefits__list-item careerBenefits__list-item-1">
              <div className="careerBenefits__list-item-content">
                <h3 className="careerBenefits__list-item-subtitle text-3 black">
                  {opportunities[1].digit}
                </h3>
                <p className="careerBenefits__list-item-description text-7 gray">
                  {opportunities[1].title}
                </p>
              </div>
            </li>
            <div className="line"></div>
            <li className="careerBenefits__list-item careerBenefits__list-item-2">
              <div className="careerBenefits__list-item-content">
                <h3 className="careerBenefits__list-item-subtitle text-3 black">
                  {opportunities[2].digit}
                </h3>
                <p className="careerBenefits__list-item-description text-7 gray">
                  {opportunities[2].title}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabs">
        <div className="container" onClick={(e) => showBody(e)}>
          <div className="careerBenefits__wrapper">
            <div className="careerBenefits__tab">
              <div className="careerBenefits__tab-head">
                <h3 className="careerBenefits__tab-title text-3 black">
                  {opportunities[0].digit}
                </h3>
                <p className="careerBenefits__tab-description text-7 black">
                  {opportunities[0].title}
                </p>
              </div>
              <div className="careerBenefits__tab-body">
                <p className="careerBenefits__tab-content gray text-1">
                  {opportunities[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="container" onClick={(e) => showBody(e)}>
          <div className="careerBenefits__wrapper">
            <div className="careerBenefits__tab">
              <div className="careerBenefits__tab-head">
                <h3 className="careerBenefits__tab-title text-3 black">
                  {opportunities[1].digit}
                </h3>
                <p className="careerBenefits__tab-description text-7 black">
                  {opportunities[1].title}
                </p>
              </div>
              <div className="careerBenefits__tab-body">
                <p className="careerBenefits__tab-content gray text-1">
                  {opportunities[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="container" onClick={(e) => showBody(e)}>
          <div className="careerBenefits__wrapper">
            <div className="careerBenefits__tab">
              <div className="careerBenefits__tab-head">
                <h3 className="careerBenefits__tab-title text-3 black">
                  {opportunities[2].digit}
                </h3>
                <p className="careerBenefits__tab-description text-7 black">
                  {opportunities[2].title}
                </p>
              </div>
              <div className="careerBenefits__tab-body">
                <p className="careerBenefits__tab-content gray text-1">
                  {opportunities[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerBenefits;
