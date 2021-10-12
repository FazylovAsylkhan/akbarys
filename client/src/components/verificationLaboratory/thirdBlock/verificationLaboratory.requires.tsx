import * as React from 'react';

import './verificationLaboratory.requires.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FC } from 'react';

interface VerificationLaboratoryRequiresProps {
  content: any
}

const VerificationLaboratoryRequires: FC<VerificationLaboratoryRequiresProps> = ({ content }) => {
  const { title, description, images } = content;
  const img1 = getImage(images[0]);
  const img2 = getImage(images[1]);

  return (
      <div className="verificationLaboratoryRequires">
        <div className="container">
          <div className="verificationLaboratoryRequires__wrapper">
            <div className="verificationLaboratoryRequires__content">
              <h3 className="verificationLaboratoryRequires__title title-1">
                {title}
              </h3>
              <p className="verificationLaboratoryRequires__description text-5">
                {description}
              </p>
            </div>

            <div className="verificationLaboratoryRequires__images">
              {img2 ? (
                <GatsbyImage
                  className="verificationLaboratoryRequires__image"
                  image={img2}
                  alt={title}
                />
              ) : null}
              {img1 ? (
                <GatsbyImage
                  className="verificationLaboratoryRequires__image"
                  image={img1}
                  alt={title}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
  );
};

export default VerificationLaboratoryRequires;
