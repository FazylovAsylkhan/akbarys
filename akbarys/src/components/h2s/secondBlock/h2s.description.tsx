import './h2s.description.scss';

import * as React from 'react';
import { FC } from 'react';

interface H2sDescriptionProps {
  data: any
}

const H2sDescription: FC<H2sDescriptionProps> = ({ data }) => {
  const getPartnersImagesElements = () => {
    const copyImages: Function[] = data.images.slice();
    const imagesElements = copyImages.map((Image, index) => (
      <div className="h2sDescription__item" key={`image${index}`}>
        {<Image />}
      </div>
    ));
    return imagesElements;
  };
  return (
    <div className="h2sDescription">
      <div className="container">
        <h1 className="transparent">{data.h1}</h1>
        <div className="h2sDescription__wrapper">
          <h2 className="h2sDescription__title title-1 black">
            {data.first.title}
          </h2>
          <h3 className="h2sDescription__subtitle text-4 black">
            {data.first.subtitle}
          </h3>
          <p className="h2sDescription__description text-1 gray">
            {data.first.description}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="h2sDescription__wrapper">
          <h2 className="h2sDescription__title title-1 black">
            {data.second.title}
          </h2>
          <p className="h2sDescription__description text-1 gray h2sDescription__description_changable">
            {data.second.description1}
          </p>
          <p className="h2sDescription__description text-1 gray">
            {data.second.description2}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="h2sDescription__items">
          {getPartnersImagesElements()}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default H2sDescription;
