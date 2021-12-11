import './sft.description.scss';
import * as React from 'react';
import { FC } from 'react';
import id from '../../../utils/randomId';

interface SftDescriptionProps {
  content: any
}

const SftDescription: FC<SftDescriptionProps> = ({ content }) => {
  const { first, second } = content;
  const getStagesElements = (number: number) => (
      <h3 className="sftDescription__item" key={id()}>
        <span className="sftDescription__digit text-12 black">{`${number}`}</span>
        <span className="sftDescription__digit-description text-7 black">
          {second.stages[number - 1]}
        </span>
      </h3>
  );

  return (
    <div className="sftDescription">
      <div className="container">
        <div className="sftDescription__wrapper">
          <h2 className="sftDescription__title title-1 black">{first.title}</h2>
          <h3 className="sftDescription__subtitle text-4 black">
            {first.subtitle}
          </h3>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="sftDescription__wrapper sftDescription__wrapper_special">
          <h2 className="sftDescription__title title-1 black">
            {second.title}
          </h2>
          <p className="sftDescription__description text-1 gray sftDescription__description_changable">
            {second.description}
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container items-1">
        <div className="sftDescription__items">
          {getStagesElements(1)}
          {getStagesElements(2)}
          {getStagesElements(3)}
          {getStagesElements(4)}
        </div>
      </div>
      <div className="container items-2">
        <div className="sftDescription__items">
          {getStagesElements(1)}
          {getStagesElements(2)}
        </div>
      </div>
      <div className="line items-2"></div>
      <div className="container items-2">
        <div className="sftDescription__items">
          {getStagesElements(3)}
          {getStagesElements(4)}
        </div>
      </div>
      <div className="container items-3">
        <div className="sftDescription__items">
          {getStagesElements(1)}
        </div>
      </div>
      <div className="line items-3"></div>
      <div className="container items-3">
        <div className="sftDescription__items">
          {getStagesElements(2)}
        </div>
      </div>
      <div className="line items-3"></div>
      <div className="container items-3">
        <div className="sftDescription__items">
          {getStagesElements(3)}
        </div>
      </div>
      <div className="line items-3"></div>
      <div className="container items-3">
        <div className="sftDescription__items">
          {getStagesElements(4)}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SftDescription;
