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
  return (
    <div className="akbarysAdvantages container">
      <div className="akbarysAdvantages__wrapper">
        <div className="akbarysAdvantages__label">
          <h2 className="akbarysAdvantages__title blue">{preview.digit}</h2>
          <div className="akbarysAdvantages__title-description title-3 gray">
            {preview.text}
          </div>
        </div>
        <div className="akbarysAdvantages__content">
          {advantages.map((advantage) => (
              <h3
                key={id()}
                className="akbarysAdvantages__subtitle"
              >
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
  );
};

export default AkbarysAdvantages;
