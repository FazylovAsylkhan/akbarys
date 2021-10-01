import * as React from "react"
import { FC } from "react"
import id from "../../../utils/randomId"
import "./verificationLaboratory.description.scss"

interface VerificationLaboratoryDescriptionProps {
  content: any
}

const VerificationLaboratoryDescription: FC<VerificationLaboratoryDescriptionProps> =
  ({ content }) => {
    const { title, description, subtitle, items, texts } = content
    const getItemElement = (title: string, description: string) => {
      return (
        <div className="verificationLaboratoryDescription__item" key={id()}>
          <h4 className="verificationLaboratoryDescription__item-title title-1 black">
            {title}
          </h4>
          <p
            className="verificationLaboratoryDescription__item-description text-7 black"
            dangerouslySetInnerHTML={{ __html: description}}
          ></p>
        </div>
      )
    }
    const getWithoutBrStr = (str: string): string => {
      const reg = / <br \/>/gi
      return str.replace(reg, '')
    }
    return (
      <div className="verificationLaboratoryDescription">
        <div className="container">
          <div className="verificationLaboratoryDescription__wrapper">
            <h2 className="verificationLaboratoryDescription__title title-1 black">
              {title}
            </h2>
            <h3 className="verificationLaboratoryDescription__subtitle text-4 right black">
              {subtitle}
            </h3>
            <p className="verificationLaboratoryDescription__description text-1 right gray">
              {description}
            </p>
          </div>
        </div>

        <div className="line"></div>
        <div className="container items-1">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[0].title, items[0].description)}
            {getItemElement(items[1].title, items[1].description)}
            {getItemElement(items[2].title, items[2].description)}
            {getItemElement(items[3].title, items[3].description)}
          </div>
        </div>
        <div className="container items-2">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[0].title, getWithoutBrStr(items[0].description))}
            {getItemElement(items[1].title, getWithoutBrStr(items[1].description))}
          </div>
        </div>
        <div className="line items-2"></div>
        <div className="container items-2">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[2].title, getWithoutBrStr(items[2].description))}
            {getItemElement(items[3].title, getWithoutBrStr(items[3].description))}
          </div>
        </div>
        <div className="container items-3">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[0].title, getWithoutBrStr(items[0].description))}
          </div>
        </div>
        <div className="line items-3"></div>
        <div className="container items-3">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[1].title, getWithoutBrStr(items[1].description))}
          </div>
        </div>
        <div className="line items-3"></div>
        <div className="container items-3">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[2].title, getWithoutBrStr(items[2].description))}
          </div>
        </div>
        <div className="line items-3"></div>
        <div className="container items-3">
          <div className="verificationLaboratoryDescription__items">
            {getItemElement(items[3].title, getWithoutBrStr(items[3].description))}
          </div>
        </div>

        <div className="line"></div>
        <div className="container">
          <div className="verificationLaboratoryDescription__wrapper">
            <h2 className="verificationLaboratoryDescription__title title-1 black">
              {texts[0].title}
            </h2>
            <p className="verificationLaboratoryDescription__description text-1 gray left">
              {texts[0].descriptions[0]}
            </p>
            <p className="verificationLaboratoryDescription__description text-1 gray right">
              {texts[0].descriptions[1]}
            </p>
          </div>
          <div className="verificationLaboratoryDescription__wrapper pt paddingTop">
            <h2 className="verificationLaboratoryDescription__title title-1 black">
              {texts[1].title}
            </h2>
            <p className="verificationLaboratoryDescription__description text-1 gray left">
              {texts[1].descriptions[0]}
            </p>
            <p className="verificationLaboratoryDescription__description text-1 gray right">
              {texts[1].descriptions[1]}
            </p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    )
  }
export default VerificationLaboratoryDescription
