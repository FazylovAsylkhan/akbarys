import * as React from 'react';
import { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './verificationLaboratory.preview.scss';
import id from '../../../utils/randomId';

interface VerificationLaboratoryPreviewProps {
  content: any
}

const VerificationLaboratoryPreview: FC<VerificationLaboratoryPreviewProps> = ({
  content,
}) => {
  const { title, subtitles, image } = content;
  const img = getImage(image);

  return (
    <div className="verificationLaboratoryPreview ">
      <div className="verificationLaboratoryPreview__wrapper container">
        <div className="verificationLaboratoryPreview__wrapper">
          <h2 className="verificationLaboratoryPreview__title title-1 white">
            {title}
          </h2>
          <div className="verificationLaboratoryPreview__box">
            {subtitles.map((subtitle: any) => (
                <h3 className=" verificationLaboratoryPreview__subtitle" key={id()}>
                  <span className="verificationLaboratoryPreview__subtitle-digit text-2 white">
                    {subtitle.digit}
                  </span>
                  <span className="verificationLaboratoryPreview__subtitle-description text-1 white_dark">
                    {subtitle.description}
                  </span>
                </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="verificationLaboratoryPreview__body">
        {img ? (
          <GatsbyImage
            className="verificationLaboratoryPreview__body-image"
            image={img}
            alt={title}
          />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default VerificationLaboratoryPreview;
