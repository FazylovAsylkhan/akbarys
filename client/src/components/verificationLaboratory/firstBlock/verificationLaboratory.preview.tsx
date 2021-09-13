import "./verificationLaboratory.preview.scss"

import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const VerificationLaboratoryPreview = () => (
  <div className="verificationLaboratoryPreview ">
    <div className="verificationLaboratoryPreview__wrapper container">
      <div className="verificationLaboratoryPreview__wrapper">
        <h2 className="verificationLaboratoryPreview__title title-1 white">
          Поверочные лаборатории
        </h2>
        <div className="verificationLaboratoryPreview__box">
          <h3 className=" verificationLaboratoryPreview__subtitle">
            <span className="verificationLaboratoryPreview__subtitle-digit text-2 white">
              8
            </span>
            <span className="verificationLaboratoryPreview__subtitle-description text-1 white_dark">
              Специалистов
            </span>
          </h3>
            <h3 className=" verificationLaboratoryPreview__subtitle">
              <span className="verificationLaboratoryPreview__subtitle-digit text-2 white">
                23
              </span>
              <span className="verificationLaboratoryPreview__subtitle-description text-1 white_dark">
                Вида лаболаторных испытании
              </span>
            </h3>
        </div>
      </div>
    </div>
    <div className="verificationLaboratoryPreview__body">
      <StaticImage
        className="verificationLaboratoryPreview__body-image"
        placeholder="dominantColor"
        src="../../../images/verificationLaboratory/preview.jpg"
        alt="verificationLaboratoryPreview"
        quality={50}
        formats={["auto", "webp", "avif"]}
      />
    </div>
  </div>
)

export default VerificationLaboratoryPreview
