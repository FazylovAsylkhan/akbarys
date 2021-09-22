import * as React from 'react';

import './verificationLaboratory.requires.scss';
import { StaticImage } from 'gatsby-plugin-image';

const VerificationLaboratoryRequires = () => (
  <div className="verificationLaboratoryRequires">
    <div className="container">
      <div className="verificationLaboratoryRequires__wrapper">
        <div className="verificationLaboratoryRequires__content">
          <h3 className="verificationLaboratoryRequires__title title-1">
            Аккредитовано NCA
          </h3>
          <p className="verificationLaboratoryRequires__description text-5">
            Лаборатория аккредитована на соответствие ГОСТ ИСО/МЭК 17025-2009
            «Общие требования к компетентности испытательных и калибровочных
            лабораторий» национальным органом по аккредитации в области оценки
            соответствия ТОО «Национальный центр аккредитации». Аттестат
            аккредитации № KZ.П.09.1363 от 18 февраля 2018 г.
          </p>
        </div>

        <div className="verificationLaboratoryRequires__images">
          <StaticImage
            className="verificationLaboratoryRequires__image"
            placeholder="dominantColor"
            src="../../../images/verificationLaboratory/nca.jpg"
            alt="nca"
            quality={95}
            formats={['auto', 'webp', 'avif']}
          />
          <StaticImage
            className="verificationLaboratoryRequires__image"
            placeholder="dominantColor"
            src="../../../images/verificationLaboratory/mra.jpg"
            alt="mra"
            quality={95}
            formats={['auto', 'webp', 'avif']}
          />
        </div>
      </div>
    </div>
  </div>
);

export default VerificationLaboratoryRequires;
