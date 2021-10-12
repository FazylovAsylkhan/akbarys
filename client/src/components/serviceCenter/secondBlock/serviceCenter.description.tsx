// import SvgImg from '../../../images/serviceCenter/item-icon.svg';
import * as React from 'react';
import { FC } from 'react';
import id from '../../../utils/randomId';
import './serviceCenter.description.scss';

interface ServiceCenterDescriptionProps {
  content: any
}
const ServiceCenterDescription: FC<ServiceCenterDescriptionProps> = ({
  content,
}) => {
  const { descriptions, typesOfWork } = content;
  const { items } = typesOfWork;

  const getItemElement = (title: string, description: string) => (
      <div className="serviceCenterDescription__item" key={id()}>
        <h4 className="serviceCenterDescription__item-title title-1 black">
          {title}
        </h4>
        <p
          className="serviceCenterDescription__item-description text-7 black"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
  );

  return (
    <div className="serviceCenterDescription">
      <div className="container">
        <div className="serviceCenterDescription__wrapper">
          <h2 className="serviceCenterDescription__title title-1 black left">
            {descriptions[0].title}
          </h2>
          <h3 className="serviceCenterDescription__subtitle text-4 black right">
            {descriptions[0].text[0]}
          </h3>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="serviceCenterDescription__wrapper">
          <h2 className="serviceCenterDescription__title title-1 black">
            {descriptions[1].title}
          </h2>
          <p className="serviceCenterDescription__description text-1 gray left">
            {descriptions[1].text[0]}
          </p>
          <p className="serviceCenterDescription__description text-1 gray right">
            {descriptions[1].text[1]}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="serviceCenterDescription__wrapper ">
          <h2 className="serviceCenterDescription__title title-1 black">
            {typesOfWork.title}
          </h2>
          <p className="serviceCenterDescription__description text-1 gray left">
            {typesOfWork.description}
          </p>
        </div>
      </div>

      <div className="line"></div>
      <div className="container items-1">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[0].title, items[0].description)}
          {getItemElement(items[1].title, items[1].description)}
          {getItemElement(items[2].title, items[2].description)}
          {getItemElement(items[3].title, items[3].description)}
        </div>
      </div>
      <div className="container items-2">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[0].title, items[0].description)}
          {getItemElement(items[1].title, items[1].description)}
        </div>
      </div>
      <div className="line items-2"></div>
      <div className="container items-2">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[2].title, items[2].description)}
          {getItemElement(items[3].title, items[3].description)}
        </div>
      </div>
      <div className="container items-3">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[0].title, items[0].description)}
        </div>
      </div>
      <div className="line items-3"></div>
      <div className="container items-3">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[1].title, items[1].description)}
        </div>
      </div>
      <div className="line items-3"></div>
      <div className="container items-3">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[2].title, items[2].description)}
        </div>
      </div>
      <div className="line items-3"></div>
      <div className="container items-3">
        <div className="serviceCenterDescription__items">
          {getItemElement(items[3].title, items[3].description)}
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterDescription;
