import * as React from "react"
import { FC, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DarkLogo from "../../data/images/logo-dark.svg"
import LightLogo from "../../data/images/logo-light.svg"
import { handleScroll } from "../../utils/header/handlerScroll"
import { closeBurgerMenu, openBurgerMenu } from "../../utils/header/BurgerMenu"
import "./header.scss"

function openSubMenu(
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  isMobile: boolean
) {
  e.stopPropagation()
  if (isMobile) {
    const toggleSubMenu = e.target as HTMLElement
    const subMenu = toggleSubMenu.nextSibling as HTMLElement
    toggleSubMenu?.classList.toggle("active")
    subMenu?.classList.toggle("open")
    const langPreview = toggleSubMenu.classList.contains("lang__image")
      ? toggleSubMenu.parentElement?.parentElement
      : toggleSubMenu.parentElement
    const langList = langPreview?.nextSibling as HTMLElement
    langList?.classList.toggle("open")
    langPreview?.classList.toggle("active")
  }
}
function getPreviewLangElement(lang: string, isMobile: boolean) {
  let element = (
    <div className="lang__preview">
      <span
        className="lang__text text-header"
        onClick={e => openSubMenu(e, isMobile)}
      >
        Рус
        <StaticImage
          className="lang__image"
          src="../../data/images/flags/russia.jpg"
          alt="russia"
          style={{ pointerEvents: "none" }}
        ></StaticImage>
      </span>
    </div>
  )
  if (lang === "kz") {
    element = (
      <div className="lang__preview">
        <span
          className="lang__text text-header"
          onClick={e => openSubMenu(e, isMobile)}
        >
          Қаз
          <StaticImage
            className="lang__image"
            src="../../data/images/flags/kazakh.jpg"
            alt="kazakh"
          ></StaticImage>
        </span>
      </div>
    )
  }
  if (lang === "en") {
    element = (
      <div className="lang__preview">
        <span
          className="lang__text text-header"
          onClick={e => openSubMenu(e, isMobile)}
        >
          Eng
          <StaticImage
            className="lang__image"
            src="../../data/images/flags/english.jpg"
            alt="english"
          ></StaticImage>
        </span>
      </div>
    )
  }
  return element
}
function clickBtn(
  e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  isMobile: boolean
) {
  if (isMobile) {
    const li = e.target as HTMLLIElement
    const span = li.querySelector("span")
    const link = li.querySelector("a")
    if (span) {
      span.click()
    } else if (link) {
      link.click()
    }
  }
}
interface HeaderProps {
  isAdditional: boolean
  data?: any
  langs: any
}

const Header: FC<HeaderProps> = ({ isAdditional, data, langs }) => {
  const [stateIsMobile, setStateIsMobile] = React.useState(false)
  const { links, subMenu, lang } = data
  const firstList = subMenu[0]
  const secondList = subMenu[1]
  function updateHeader(
    mainHeader: any,
    additionalHeader: any,
    currentPage: any
  ) {
    const AreSpecialPages =
      document.querySelector(".pressCenterNews") ||
      document.querySelector(".page404") ||
      document.querySelector(".politics")
    const isMain =
      currentPage === "ru" ||
      currentPage === "" ||
      currentPage === "kz" ||
      currentPage === "test-main" ||
      currentPage === "en"

    if (!isMain) {
      mainHeader?.classList.add("header_second")
      additionalHeader?.classList.add("header_second", "additional")
      if (!AreSpecialPages) {
        mainHeader?.classList.remove("header_dark")
      } else {
        mainHeader?.classList.add("header_dark")
      }
      if (AreSpecialPages) {
        mainHeader?.classList.add("default-white-header")
        mainHeader?.classList.add("header_dark")
      } else {
        mainHeader?.classList.remove("default-white-header")
        mainHeader?.classList.remove("header_dark")
      }
    } else {
      mainHeader?.classList.remove("header_second")
    }
  }

  useEffect(() => {
    const { body } = document
    body.classList.remove("ru", "kz", "en")
    body.classList.add(lang)
    body.style.top = "auto"
    body.classList.remove("disable-scroll")
    body.removeAttribute("data-position")
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setStateIsMobile(true)
    } else {
      setStateIsMobile(false)
    }
    const currentPage = window.location.href.split("/")[3]
    const mainHeader = document.querySelectorAll("header")[0]
    const additionalHeader = document.querySelectorAll("header")[1]
    updateHeader(mainHeader, additionalHeader, currentPage)
    handleScroll(additionalHeader, currentPage)

    if (stateIsMobile) {
      document.body.classList.add("touch")
      document.body.classList.remove("mouse")

      const isMain =
        currentPage === "ru" ||
        currentPage === "" ||
        currentPage === "kz" ||
        currentPage === "en"

      isMain
        ? document.body.classList.add("mainPage")
        : document.body.classList.remove("mainPage")
    } else {
      document.body.classList.add("mouse")
      document.body.classList.remove("touch")
    }
  }, [stateIsMobile])

  return (
    <>
      <header slot="container-start" className="header">
        <div className="header__wrapper container">
          <Link
            to={firstList.links[0].url}
            className="header__logo-image header__logo-image_dark"
            onClick={e => closeBurgerMenu(e, isAdditional)}
          >
            <DarkLogo alt="logo" />
          </Link>
          <Link
            to={firstList.links[0].url}
            className="header__logo-image header__logo-image_light"
            onClick={e => closeBurgerMenu(e, isAdditional)}
          >
            <LightLogo alt="logo" />
          </Link>
          <div
            className="header__burger"
            onClick={e => openBurgerMenu(e, isAdditional)}
          >
            <span></span>
          </div>
          <nav className="header__menu">
            <ul className="menu__list">
              <li
                className="menu__list-item sub-menu"
                onClick={e => clickBtn(e, stateIsMobile)}
              >
                <span
                  className="menu__toggle text-header"
                  onClick={e => openSubMenu(e, stateIsMobile)}
                >
                  {firstList.title}
                </span>
                <ul className="sub-menu__list">
                  {firstList.links.map((item, i, arr) => {
                    const isLastItem = arr.length - 2 === i
                    const classNameItem = `sub-menu__list-item ${
                      isLastItem ? "reset-border" : ""
                    }`
                    const isPressCenter =
                      item.url.split("/")[1] === "press-center"
                    if (isPressCenter) {
                      return
                    }

                    return (
                      <li
                        className={classNameItem}
                        onClick={e => clickBtn(e, stateIsMobile)}
                        key={item.url}
                      >
                        <Link
                          className="sub-menu__link text-header"
                          to={item.url}
                          onClick={e => closeBurgerMenu(e, isAdditional)}
                        >
                          {item.text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li
                className="menu__list-item sub-menu"
                onClick={e => clickBtn(e, stateIsMobile)}
              >
                <span
                  className="menu__toggle text-header"
                  onClick={e => openSubMenu(e, stateIsMobile)}
                >
                  {secondList.title}
                </span>
                <ul className="sub-menu__list">
                  <li
                    className="sub-menu__list-item"
                    onClick={e => clickBtn(e, stateIsMobile)}
                  >
                    <Link
                      className="sub-menu__link text-header"
                      to={secondList.links[0].url}
                      onClick={e => closeBurgerMenu(e, isAdditional)}
                    >
                      {secondList.links[0].text}
                    </Link>
                  </li>

                  <li
                    className="sub-menu__list-item reset-border"
                    onClick={e => clickBtn(e, stateIsMobile)}
                  >
                    <Link
                      className="sub-menu__link text-header"
                      to={secondList.links[1].url}
                      onClick={e => closeBurgerMenu(e, isAdditional)}
                    >
                      {secondList.links[1].text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="menu__list-item"
                onClick={e => clickBtn(e, stateIsMobile)}
              >
                <Link
                  className="menu__link text-header"
                  to={links[0].url}
                  onClick={e => closeBurgerMenu(e, isAdditional)}
                >
                  {links[0].text}
                </Link>
              </li>
              <li
                className="menu__list-item"
                onClick={e => clickBtn(e, stateIsMobile)}
              >
                <Link
                  className="menu__link text-header"
                  to={links[1].url}
                  onClick={e => closeBurgerMenu(e, isAdditional)}
                >
                  {links[1].text}
                </Link>
              </li>

              <li
                className="menu__list-item reset-border"
                onClick={e => clickBtn(e, stateIsMobile)}
              >
                <Link
                  className="menu__link text-header"
                  to={links[2].url}
                  onClick={e => closeBurgerMenu(e, isAdditional)}
                >
                  {links[2].text}
                </Link>
              </li>
            </ul>
            <div className="header__box">
              <div className="lang">
                {getPreviewLangElement(lang, stateIsMobile)}
                <ul className="lang__list">
                  <li className="lang__list-item">
                    <Link
                      className="lang__link"
                      to={langs[0]}
                      onClick={e => closeBurgerMenu(e, isAdditional)}
                    >
                      <span className="lang__text text-header">
                        Рус
                        <StaticImage
                          className="lang__image"
                          src="../../data/images/flags/russia.jpg"
                          alt="russia"
                        ></StaticImage>
                      </span>
                    </Link>
                  </li>
                  <li className="lang__list-item">
                    <Link
                      className="lang__link"
                      to={langs[2]}
                      onClick={e => closeBurgerMenu(e, isAdditional)}
                    >
                      <span className="lang__text text-header">
                        Eng
                        <StaticImage
                          className="lang__image"
                          src="../../data/images/flags/english.jpg"
                          alt="english"
                        ></StaticImage>
                      </span>
                    </Link>
                  </li>
                  <li className="lang__list-item">
                    <Link
                      className="lang__link"
                      to={langs[1]}
                      onClick={e => closeBurgerMenu(e, isAdditional)}
                    >
                      <span className="lang__text text-header">
                        Қаз
                        <StaticImage
                          className="lang__image"
                          src="../../data/images/flags/kazakh.jpg"
                          alt="kazakh"
                        ></StaticImage>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <DarkLogo className="menu__image menu__logo-image " alt="logo" />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
