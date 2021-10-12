import * as React from 'react';
import { FC } from 'react';
import './career.description.scss';

interface CareerDescriptionProps {
  content: {
    title: string
    subtitle: string
  }
}

const CareerDescription: FC<CareerDescriptionProps> = ({ content }) => {
  const { title, subtitle } = content;
  return (
    <div className="careerDescription ">
      <div className="careerDescription__wrapper container">
        <div className="careerDescription__content">
          <h2 className="careerDescription__content-title title-1 black">
            {title}
          </h2>
          <h3 className="careerDescription__content-description text-4 black">
            {subtitle}
          </h3>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CareerDescription;
