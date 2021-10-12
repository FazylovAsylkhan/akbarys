import * as React from 'react';
import { FC } from 'react';
import h2s1 from '../../../data/images/h2s/h2s-1.svg';
import h2s2 from '../../../data/images/h2s/h2s-2.svg';
import h2s3 from '../../../data/images/h2s/h2s-3.svg';
import h2s4 from '../../../data/images/h2s/h2s-4.svg';
import h2s5 from '../../../data/images/h2s/h2s-5.svg';
import './h2s.description.scss';

interface H2sDescriptionProps {
  content: any
}

const H2sDescription: FC<H2sDescriptionProps> = ({ content }) => {
  const { first, second } = content;
  const images = [h2s1, h2s2, h2s3, h2s4, h2s5];
  const getPartnersImagesElements = () => {
    const copyImages: Function[] = images.slice();
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
        <div className="h2sDescription__wrapper">
          <h2 className="h2sDescription__title title-1 black">
            {first.title}
          </h2>
          <h3 className="h2sDescription__subtitle text-4 black">
            {first.subtitle}
          </h3>
          <p className="h2sDescription__description text-1 gray">
            {first.description}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="h2sDescription__wrapper">
          <h2 className="h2sDescription__title title-1 black">
            {second.title}
          </h2>
          <p className="h2sDescription__description text-1 gray h2sDescription__description_changable">
            {second.description1}
          </p>
          <p className="h2sDescription__description text-1 gray">
            {second.description2}
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
