import * as React from 'react';
import { FC } from 'react';
import LogoProtection from '../../../data/images/akbarysProtection.svg';
import id from '../../../utils/randomId';
import './akbarys.protection.scss';

interface AkbarysProtectionProps {
  content: any
}

const AkbarysProtection: FC<AkbarysProtectionProps> = ({ content }) => {
  const { title, descriptions, button } = content;
  return (
    <div className="akbarysProtection">
      <div className="container">
        <div className="akbarysProtection__wrapper">
          <div className="akbarysProtection__content">
            <h2 className="akbarysProtection__content-title title-1 white">
              {title}
            </h2>
            {descriptions.map((description: any) => (
                <p className="akbarysProtection__content-text text-1 white" key={id()}>
                  {description}
                </p>
            ))}
            <a
              className="button akbarysProtection__content-button blue"
              style={{ background: '#fff' }}
              target="_blank"
              href={button.link}
            >
              {button.text}
            </a>
          </div>
          <div className="akbarysProtection__logo">
            <LogoProtection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkbarysProtection;
