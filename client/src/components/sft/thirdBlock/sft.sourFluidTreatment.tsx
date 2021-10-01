import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { FC, useEffect } from "react"
import "./sft.sourFluidTreatment.scss"

import TIP_IMG from "../../../images/tip.svg"
import id from "../../../utils/randomId"

interface SftSourFluidTreatmentProps {
  content: any
}

const SftSourFluidTreatment: FC<SftSourFluidTreatmentProps> = ({ content }) => {
  const { first, second } = content
  const img1 = getImage(first.images[0])
  const img2 = getImage(first.images[1])

  const contentTips = [
    second.items[0],
    second.items[1],
    second.items[2],
    second.items[5],
    second.items[8],
    second.items[4],
    second.items[3],
    second.items[6],
    second.items[7],
  ]
  const tipsTexts = contentTips.map((content, i) => (
    <div
      key={`keyText-${i}`}
      className={`sourFluidTreatment__tip-text sourFluidTreatment__tip-text-${i} text-9`}
    >
      <span>{content}</span>
    </div>
  ))
  const tipsImgs = new Array(9)
    .fill(1)
    .map((e, i) => (
      <TIP_IMG
        key={`keyImg-${i}`}
        className={`sourFluidTreatment__tip-img sourFluidTreatment__tip-img-${i}`}
      />
    ))
  useEffect(() => {
    const img = document.querySelector(".sourFluidTreatment")
    const tipsTextElements = document.querySelectorAll(
      ".sourFluidTreatment__tip-text"
    )
    let numberTip = -1
    img?.addEventListener("mouseover", e => {
      const element = e.target as HTMLElement
      if (element.classList.contains("sourFluidTreatment__tip-img")) {
        tipsTextElements.forEach(tipElement =>
          tipElement.classList.remove("show")
        )
        numberTip = Number(element.classList[1].slice(-1))
        const textHtmlElement = tipsTextElements[numberTip]
        textHtmlElement.classList.add("show")
      } else if (tipsTextElements[numberTip] === e.target) {
        true
      } else {
        tipsTextElements.forEach(tipElement =>
          tipElement.classList.remove("show")
        )
        numberTip = -1
      }
    })
  }, [])

  return (
    <div>
      <div className="sourFluidTreatment">
        <div className="container ">
          <div className="sourFluidTreatment__content">
            <h2 className="sourFluidTreatment__content-title title-2 black left">
              {first.title}
            </h2>
            <p className="sourFluidTreatment__content-description text-1 gray right">
              {first.descriptions[0]}
            </p>
          </div>
          <div className="sourFluidTreatment__wrapper illustration-1">
            {img1 ? (
              <GatsbyImage
                className="sourFluidTreatment__img"
                image={img1}
                alt={second.title}
              />
            ) : null}
            {tipsImgs}
            {tipsTexts}
          </div>
          <div className="sourFluidTreatment__wrapper illustration-2">
            {img2 ? (
              <GatsbyImage
                className="sourFluidTreatment__img"
                image={img2}
                alt={second.title}
              />
            ) : null}
            <h2 className="sourFluidTreatment__title title-2 blue">
              {second.title}
            </h2>
            <ul className="sourFluidTreatment__list">
              {second.items.map((item: string) => {
                return (
                  <li
                    className="sourFluidTreatment__list-item text-13 gray"
                    key={id()}
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="sourFluidTreatment__content">
            <p className="sourFluidTreatment__content-description text-1 gray right">
              {first.descriptions[1]}
            </p>
            <p className="sourFluidTreatment__content-description text-1 gray right">
              {first.descriptions[2]}
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default SftSourFluidTreatment
