import './sft.description.scss';
import * as React from 'react';
import { FC } from 'react';

interface SftDescriptionProps {
  data: any
}

const SftDescription: FC<SftDescriptionProps> = ({ data }) => {
  const getStagesElements = () => {
    const copyArray: Function[] = data.second.stages.slice();
    const stagesElements = copyArray.map((stage, index) => (
      <h3 className="sftDescription__item" key={`image${index}`}>
        <span className="sftDescription__digit title-1 black">{`0${
          index + 1
        }`}</span>
        <span className="sftDescription__digit-description text-7 black">
          {stage}
        </span>
      </h3>
    ));
    return stagesElements;
  };

  return (
    <div className="sftDescription">
      <div className="container">
        <h1 className="transparent">{data.h1}</h1>
        <div className="sftDescription__wrapper">
          <h2 className="sftDescription__title title-1 black">
            {data.first.title}
          </h2>
          <h3 className="sftDescription__subtitle text-4 black">
            {data.first.subtitle}
          </h3>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="sftDescription__wrapper sftDescription__wrapper_special">
          <h2 className="sftDescription__title title-1 black">
            {data.second.title}
          </h2>
          <p className="sftDescription__description text-1 gray sftDescription__description_changable">
            {data.second.description}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="sftDescription__items">{getStagesElements()}</div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SftDescription;
