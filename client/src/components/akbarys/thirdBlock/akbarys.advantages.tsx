import * as React from 'react';
import { FC } from 'react';
import id from '../../../utils/randomId';
import './akbarys.advantages.scss';

interface Advantage {
  digit: number
  text: string
}

interface AkbarysAdvantagesProps {
  content: {
    preview: Advantage
    advantages: Advantage[]
  }
}

const AkbarysAdvantages: FC<AkbarysAdvantagesProps> = ({ content }) => {
  const { preview, advantages } = content;
  const getItemElement = (title: number, description: string) => (
      <div className="container  items-3" key={id()}>
        <div className="akbarysAdvantages__wrapper">
          <div className="akbarysAdvantages__content">
            <h3 className="akbarysAdvantages__subtitle">
              <span className="akbarysAdvantages__subtitle-digit text-14 black">
                {title}
              </span>
              <span className="akbarysAdvantages__subtitle-description text-1 gray">
                {description}
              </span>
            </h3>
          </div>
        </div>
      </div>
  );
  return (
    <div className="akbarysAdvantages ">
      <div className="container items-1">
        <div className="akbarysAdvantages__wrapper">
          <div className="akbarysAdvantages__label">
            <h2 className="akbarysAdvantages__title blue">{preview.digit}</h2>
            <div className="akbarysAdvantages__title-description title-3 gray">
              {preview.text}
            </div>
          </div>
          <div className="akbarysAdvantages__content">
            {advantages.map((advantage) => (
              <h3 key={id()} className="akbarysAdvantages__subtitle">
                <span className="akbarysAdvantages__subtitle-digit text-3 black">
                  {advantage.digit}
                </span>
                <span className="akbarysAdvantages__subtitle-description text-1 gray">
                  {advantage.text}
                </span>
              </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="container  items-2">
        <div className="akbarysAdvantages__wrapper">
          <div className="akbarysAdvantages__label">
            <h2 className="akbarysAdvantages__title blue">{preview.digit}</h2>
            <div className="akbarysAdvantages__title-description text-6 gray">
              {preview.text}
            </div>
          </div>
        </div>
      </div>
      <div className="line  items-2"></div>
      <div className="container  items-2">
        <div className="akbarysAdvantages__wrapper">
          <div className="akbarysAdvantages__content">
            {advantages.map((advantage) => (
              <h3 key={id()} className="akbarysAdvantages__subtitle">
                <span className="akbarysAdvantages__subtitle-digit text-14 black">
                  {advantage.digit}
                </span>
                <span className="akbarysAdvantages__subtitle-description text-1 gray">
                  {advantage.text}
                </span>
              </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="container  items-3">
        <div className="akbarysAdvantages__wrapper">
          <div className="akbarysAdvantages__label">
            <h2 className="akbarysAdvantages__title blue">{preview.digit}</h2>
            <div className="akbarysAdvantages__title-description text-6 gray">
              {preview.text}
            </div>
          </div>
        </div>
      </div>
      <div className="line items-3"></div>
      {getItemElement(advantages[0].digit, advantages[0].text)}
      <div className="line items-3"></div>
      {getItemElement(advantages[1].digit, advantages[1].text)}
      <div className="line items-3"></div>
      {getItemElement(advantages[2].digit, advantages[2].text)}
      <div className="line items-3"></div>
      {getItemElement(advantages[3].digit, advantages[3].text)}
    </div>
  );
};

export default AkbarysAdvantages;
