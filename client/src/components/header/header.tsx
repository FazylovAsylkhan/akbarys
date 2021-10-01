import * as React from "react"
import { FC, useEffect } from "react"
import { globalHistory } from "@reach/router"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DarkLogo from "../../images/logo-dark.svg"
import LightLogo from "../../images/logo-light.svg"
import "./header.scss"
import { showBurgerMenu } from "../../utils/header/showBurgerMenu"
import { showAdditionalMenu } from "../../utils/header/showAdditionalMenu"

function getPreviewLangElement(lang: string, isMobile: boolean) {
  let element = (
    <div className="lang__preview">
      <span
        className="lang__text text-header"
        onClick={e => showSubMenu(e, isMobile)}
      >
        Рус
        <StaticImage
          className="lang__image"
          src="../../images/lang/russia.jpg"
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
          onClick={e => showSubMenu(e, isMobile)}
        >
          Qaz
          <StaticImage
            className="lang__image"
            src="../../images/lang/kazakh.jpg"
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
          onClick={e => showSubMenu(e, isMobile)}
        >
          Eng
          <StaticImage
            className="lang__image"
            src="../../images/lang/english.jpg"
            alt="english"
          ></StaticImage>
        </span>
      </div>
    )
  }
  return element
}
function showSubMenu(
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  isMobile: boolean
) {
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
    if (
      currentPage !== "ru" &&
      currentPage !== "" &&
      currentPage !== "kz" &&
      currentPage !== "en"
    ) {
      mainHeader?.classList.add("header_second")
      additionalHeader?.classList.add("header_second", "additional")
      if (
        !document.querySelector(".pressCenterNews") &&
        !document.querySelector(".page404") &&
        !document.querySelector(".politics")
      ) {
        mainHeader?.classList.remove("header_dark")
      } else {
        mainHeader?.classList.add("header_dark")
      }
    } else {
      mainHeader?.classList.remove("header_second")
    }
  }

  useEffect(() => {
    document.body.classList.remove("disable-scroll")
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
    showAdditionalMenu(additionalHeader, currentPage)

    if (stateIsMobile) {
      document.body.classList.add("touch")
      document.body.classList.remove("mouse")

      const isMain =
        currentPage == "ru" ||
        currentPage == "" ||
        currentPage == "kz" ||
        currentPage == "en"

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
          <DarkLogo
            className="header__logo-image header__logo-image_dark"
            alt="logo"
          />
          <LightLogo
            className="header__logo-image header__logo-image_light"
            alt="logo"
          />
          <div
            className="header__burger"
            onClick={e => showBurgerMenu(e, isAdditional)}
          >
            <span></span>
          </div>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__list-item sub-menu">
                <span
                  className="menu__toggle text-header"
                  onClick={e => showSubMenu(e, stateIsMobile)}
                >
                  {firstList.title}
                </span>
                <ul className="sub-menu__list">
                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[0].url}
                    >
                      {firstList.links[0].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[1].url}
                    >
                      {firstList.links[1].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[2].url}
                    >
                      {firstList.links[2].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item reset-border">
                    <Link
                      className="sub-menu__link text-header"
                      to={firstList.links[3].url}
                    >
                      {firstList.links[3].text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="menu__list-item sub-menu"
                onClick={e => showSubMenu(e, stateIsMobile)}
              >
                <span className="menu__toggle text-header">
                  {secondList.title}
                </span>
                <ul className="sub-menu__list">
                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to={secondList.links[0].url}
                    >
                      {secondList.links[0].text}
                    </Link>
                  </li>

                  <li className="sub-menu__list-item reset-border">
                    <Link
                      className="sub-menu__link text-header"
                      to={secondList.links[1].url}
                    >
                      {secondList.links[1].text}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__list-item">
                <Link className="menu__link text-header" to={links[0].url}>
                  {links[0].text}
                </Link>
              </li>
              <li className="menu__list-item">
                <Link className="menu__link text-header" to={links[1].url}>
                  {links[1].text}
                </Link>
              </li>

              <li className="menu__list-item reset-border">
                <Link className="menu__link text-header" to={links[2].url}>
                  {links[2].text}
                </Link>
              </li>
            </ul>
            <div className="header__box">
              <div className="lang">
                {getPreviewLangElement(lang, stateIsMobile)}
                <ul className="lang__list">
                  <li className="lang__list-item">
                    <Link className="lang__link" to={langs[0]}>
                      <span className="lang__text text-header">
                        Рус
                        <StaticImage
                          className="lang__image"
                          src="../../images/lang/russia.jpg"
                          alt="russia"
                        ></StaticImage>
                      </span>
                    </Link>
                  </li>
                  <li className="lang__list-item">
                    <Link className="lang__link" to={langs[2]}>
                      <span className="lang__text text-header">
                        Eng
                        <StaticImage
                          className="lang__image"
                          src="../../images/lang/english.jpg"
                          alt="english"
                        ></StaticImage>
                      </span>
                    </Link>
                  </li>
                  <li className="lang__list-item">
                    <Link className="lang__link" to={langs[1]}>
                      <span className="lang__text text-header">
                        Qaz
                        <StaticImage
                          className="lang__image"
                          src="../../images/lang/kazakh.jpg"
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
