// import SvgImg from '../../../images/serviceCenter/item-icon.svg';
import * as React from 'react';
import { FC } from 'react';
import './serviceCenter.description.scss';

interface ServiceCenterDescriptionProps {
  content: any
}
const ServiceCenterDescription: FC<ServiceCenterDescriptionProps> = ({
  content,
}) => {
  const { h1, description, typesOfWork } = content;

  return (
    <div className="serviceCenterDescription">
      <div className="container">
        <h1 className="transparent">{h1}</h1>
        <div className="serviceCenterDescription__wrapper">
          <h2 className="serviceCenterDescription__title title-1 black">
            {description[0].title}
          </h2>
          <h3 className="serviceCenterDescription__subtitle text-4 black">
            {description[0].text[0]}
          </h3>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="serviceCenterDescription__wrapper">
          <h2 className="serviceCenterDescription__title title-1 black">
            {description[1].title}
          </h2>
          <p className="serviceCenterDescription__description text-1 gray left">
            {description[1].text[0]}
          </p>
          <p className="serviceCenterDescription__description text-1 gray right">
            {description[1].text[1]}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="serviceCenterDescription__wrapper ">
          <h2 className="serviceCenterDescription__title title-1 black">
            {typesOfWork.title}
          </h2>
          <p className="serviceCenterDescription__description text-1 gray serviceCenterDescription__description_changable">
            {typesOfWork.description}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="serviceCenterDescription__items">
          <div className="serviceCenterDescription__item">
            <h4 className="serviceCenterDescription__item-title title-1 black">
              01
            </h4>
            <p
              className="serviceCenterDescription__item-description text-7 black"
              dangerouslySetInnerHTML={{ __html: typesOfWork.stages[0] }}
            ></p>
          </div>
          <div className="serviceCenterDescription__item">
            <h4 className="serviceCenterDescription__item-title title-1 black">
              02
            </h4>
            <p
              className="serviceCenterDescription__item-description text-7 black"
              dangerouslySetInnerHTML={{ __html: typesOfWork.stages[1] }}
            ></p>
          </div>
          <div className="serviceCenterDescription__item">
            <h4 className="serviceCenterDescription__item-title title-1 black">
              03
            </h4>
            <p
              className="serviceCenterDescription__item-description text-7 black"
              dangerouslySetInnerHTML={{ __html: typesOfWork.stages[2] }}
            ></p>
          </div>
          <div className="serviceCenterDescription__item">
            <h4 className="serviceCenterDescription__item-title title-1 black">
              04
            </h4>
            <p
              className="serviceCenterDescription__item-description text-7 black"
              dangerouslySetInnerHTML={{ __html: typesOfWork.stages[3] }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterDescription;
