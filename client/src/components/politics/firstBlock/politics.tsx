import * as React from 'react';
import { FC } from 'react';
import './politics.scss';

interface PoliticsFistBlock {
  content: any
}

const PoliticsPreview: FC<PoliticsFistBlock> = ({ content }) => {
  const { title, texts } = content;

  return (
    <div className="politics">
      <div className="container">
        <div className="politics__wrapper">
          <div className="politics__title title-1 black">{title}</div>
          <div className="politics__description text-1 gray">
            {texts.map((text: any) => (
              <p>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default PoliticsPreview;
