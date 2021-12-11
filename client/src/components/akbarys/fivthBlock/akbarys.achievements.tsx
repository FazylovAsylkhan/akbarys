import * as React from "react"
import { FC } from "react"
import "./akbarys.achievements.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import EyeImg from "../../../data/images/eye.svg"
import ArrowImg from "../../../data/images/toggle-arrow.svg"
import id from "../../../utils/randomId"

function disableScroll() {
  const { body } = document
  const headers = document.querySelectorAll("header")
  headers.forEach(header => header.classList.add("achievments-disable"))
  const pagePosition = window.scrollY
  body.classList.add("disable-scroll")
  body.dataset.position = String(pagePosition)
  body.style.top = `${-pagePosition}px`
}
function enableScroll() {
  const { body } = document
  const headers = document.querySelectorAll("header")
  headers.forEach(header => header.classList.remove("achievments-disable"))
  const pagePosition = body.dataset.position
    ? parseInt(body.dataset.position, 10)
    : 0
  body.style.top = "auto"
  body.classList.remove("disable-scroll")
  window.scroll({ top: pagePosition, left: 0 })
  body.removeAttribute("data-position")
}
function openList(btnTexts: any) {
  const arrow = document.querySelector(".akbarysAchievments__toggle")
  const button = document.querySelector(".akbarysAchievments__toggle-text")
  const items = document.querySelectorAll(".akbarysAchievments__item")
  arrow?.classList.toggle("opened")

  if (button && arrow?.classList.contains("opened")) {
    button.textContent = btnTexts[1]
    items.forEach(item => {
      if (!item.classList.contains("default")) {
        item.classList.add("show")
      }
    })
  } else if (button) {
    button.textContent = btnTexts[0]
    items.forEach(item => {
      if (!item.classList.contains("default")) {
        item.classList.remove("show")
      }
    })
  }
}
interface AkbarysAchievementsProps {
  content: any
}

const AkbarysAchievements: FC<AkbarysAchievementsProps> = ({ content }) => {
  const { title, description, certificates, btnText } = content
  const openModalWindow = (n: number) => {
    disableScroll()
    const window = document.querySelectorAll(".akbarysAchievments__window")[n]
    window.classList.add("active")
  }
  const closeModalWindow = (n: number) => {
    const window = document.querySelectorAll(".akbarysAchievments__window")[n]
    window.classList.remove("active")
    enableScroll()
  }

  return (
    <div className="akbarysAchievemnets container">
      <div className="akbarysAchievments__wrapper">
        <div className="akbarysAchievments__content">
          <h2 className="akbarysAchievments__content-title title-1 black">
            {title}
          </h2>
          <div
            className="akbarysAchievments__content-description text-1 gray"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        {/* <div className="akbarysAchievments__items">
          {certificates.map((certificate: any, index: number) => {
            const classItem =
              index < 4
                ? "akbarysAchievments__item default"
                : "akbarysAchievments__item"
            return (
              <div
                className={classItem}
                onClick={() => openModalWindow(index)}
                key={id()}
              >
                <span
                  style={{ display: "block" }}
                  className="akbarysAchievments__item-link text-6 gray"
                >
                  {certificate.title}
                </span>
                <span
                  className="akbarysAchievments__item-description text-1"
                  style={{ color: "#C4C4C4" }}
                >
                  {certificate.description}
                </span>
                <EyeImg className="akbarysAchievments__item-img" />
              </div>
            )
          })}
        </div>
        <div
          className="akbarysAchievments__toggle"
          onClick={() => openList(btnText)}
        >
          <span className="akbarysAchievments__toggle-text text-6 blue">
            {btnText[0]}
          </span>
          {<ArrowImg className="akbarysAchievments__toggle-arrow" />}
        </div> */}
      </div>
      {certificates.map((certificate: any, index: number) => (
        <div className="akbarysAchievments__window" key={id()}>
          <div className="akbarysAchievments__window-content">
            <h2 className="akbarysAchievments__window-title text-3 white">
              {certificate.title}
            </h2>
            <button
              className="akbarysAchievments__window-button"
              onClick={() => closeModalWindow(index)}
            >
              <span className="cross-line"></span>
              <span className="cross-line"></span>
            </button>
            <div className="akbarysAchievments__window-inner">
              {certificate.images.map((image: any) => {
                const img = getImage(image)
                if (img) {
                  return (
                    <GatsbyImage
                      className="akbarysAchievments__window-image"
                      image={img}
                      alt={certificate.title}
                      key={id()}
                    />
                  )
                }
              })}
            </div>
            <p className="akbarysAchievments__window-description text-1 black">
              {certificate.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AkbarysAchievements
