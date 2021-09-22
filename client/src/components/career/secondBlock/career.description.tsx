import * as React from 'react';
import { FC, useEffect } from 'react';
import id from '../../../utils/randomId';
import './career.description.scss';

interface Opportunity {
  digit: string
  title: string
  description: string
}

interface CareerDescriptionProps {
  content: {
    title: string
    subtitle: string
    opportunities: Opportunity[]
  }
}

const CareerDescription: FC<CareerDescriptionProps> = ({ content }) => {
  const { title, subtitle, opportunities } = content;
  useEffect(() => {
    const itemsWrapper = document.querySelector(
      '.careerDescription__benefits-list',
    );
    const items = document.querySelectorAll(
      '.careerDescription__benefits-list-item',
    );
    const contents = document.querySelectorAll(
      '.careerDescription__benefits-item',
    );
    itemsWrapper?.addEventListener('mouseover', (event) => {
      const element = event.target as HTMLElement;
      if (element.classList.contains('careerDescription__benefits-list-item')) {
        items.forEach((e) => e.classList.remove('show'));
        element.classList.add('show');
        const numberItem = +element.classList[1].slice(-1);
        contents.forEach((e) => e.classList.remove('show'));
        contents[numberItem].classList.add('show');
      } else {
        items.forEach((e) => e.classList.remove('show'));
      }
    });
    document
      .querySelector('.careerDescription__benefits-item')
      ?.classList.add('show');
  }, []);

  return (
    <div className="careerDescription ">
      <div className="careerDescription__wrapper container">
        <div className="careerDescription__content">
          <h2 className="careerDescription__content-title title-1 black">
            {title}
          </h2>
          <p className="careerDescription__content-description text-4 black">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="careerDescription__wrapper">
        <div className="container">
          <div className="careerDescription__benefits ">
            <div className="careerDescription__benefits-box">
              <div className="careerDescription__benefits-wrapper">
                {opportunities.map((opportunity) => (
                    <div className="careerDescription__benefits-item" key={id()}>
                      <h2 className="careerDescription__benefits-box-title text-6 black">
                        {opportunity.title}
                      </h2>
                      <p className="careerDescription__benefits-box-description text-1 gray">
                        {opportunity.description}
                      </p>
                    </div>
                ))}
              </div>
            </div>
            <ul className="careerDescription__benefits-list">
              <li className="careerDescription__benefits-list-item careerDescription__benefits-list-item-0 show">
                <div className="careerDescription__benefits-list-item-content">
                  <h3 className="careerDescription__benefits-list-item-subtitle text-3 black">
                    {opportunities[0].digit}
                  </h3>
                  <p className="careerDescription__benefits-list-item-description text-7 gray">
                    {opportunities[0].title}
                  </p>
                </div>
              </li>
              <div className="line"></div>
              <li className="careerDescription__benefits-list-item careerDescription__benefits-list-item-1">
                <div className="careerDescription__benefits-list-item-content">
                  <h3 className="careerDescription__benefits-list-item-subtitle text-3 black">
                    {opportunities[1].digit}
                  </h3>
                  <p className="careerDescription__benefits-list-item-description text-7 gray">
                    {opportunities[1].title}
                  </p>
                </div>
              </li>
              <div className="line"></div>
              <li className="careerDescription__benefits-list-item careerDescription__benefits-list-item-2">
                <div className="careerDescription__benefits-list-item-content">
                  <h3 className="careerDescription__benefits-list-item-subtitle text-3 black">
                    {opportunities[2].digit}
                  </h3>
                  <p className="careerDescription__benefits-list-item-description text-7 gray">
                    {opportunities[2].title}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDescription;
