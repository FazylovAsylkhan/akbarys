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
          {texts.begin.map((text: any) => (
            <p
              className="politics__description text-1 gray"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          ))}
          {texts.rules.map((rule: any, index: number) => (
              <div className="politics__rule">
                <h3 className="politics__rule-title title-3 black">{`${index + 1}. ${rule.title}`}</h3>
                <ol className="politics__list">
                  {rule.items.map((item: any, j: number) => <li className="politics__list-item text-1 gray">{`${index + 1}.${j}. ${item}`}</li>)}
                </ol>
              </div>
          ))}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default PoliticsPreview;
