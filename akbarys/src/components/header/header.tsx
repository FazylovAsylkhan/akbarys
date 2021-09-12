import * as React from "react"
import { FC, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DarkLogo from "../../images/logo-dark.svg"
import LightLogo from "../../images/logo-light.svg"
import "./header.scss"

interface HeaderProps {
  isAdditional?: boolean
}
const Header: FC<HeaderProps> = ({ isAdditional }) => {
  const showMenu = (isAdditional: boolean | undefined) => {
    const header = document.querySelectorAll("header")
    if (isAdditional) {
      header[1]?.classList.toggle("active")
    } else {
      header[0]?.classList.toggle("active")
    }
    document?.querySelectorAll(".header__logo-image").forEach(img => {
      img.classList.toggle("hide")
    })
    if (
      header[1]?.classList.contains("active") ||
      header[0]?.classList.contains("active")
    ) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = ""
    }
  }
  const showAdditionalMenu = (additionalHeader: any, currentPage: any) => {
    let prevScrollPosition = 0
    document.addEventListener("scroll", () => {
      if (currentPage !== "") {
        const currentScrollPosition = window.pageYOffset
        const heightScreen = document.documentElement.clientHeight
        if (additionalHeader) {
          if (
            prevScrollPosition > currentScrollPosition &&
            !document.querySelector(".pressCenterNews") &&
            !document.querySelector(".page404") &&
            !document.querySelector(".politics")
          ) {
            additionalHeader.classList.remove("hide")
            additionalHeader.classList.add("show")
          } else {
            additionalHeader.classList.remove("show")
            additionalHeader.classList.add("hide")
          }
          if (
            heightScreen > window.pageYOffset &&
            !document.querySelector(".pressCenterNews") &&
            !document.querySelector(".page404") &&
            !document.querySelector(".politics")
          ) {
            additionalHeader.classList.remove("header_dark")
            additionalHeader.classList.add("header_transparent")
          } else {
            additionalHeader.classList.add("header_dark")
            additionalHeader.classList.remove("header_transparent")
          }
          prevScrollPosition = window.pageYOffset
        }
      }
    })
  }
  function updateHeader(
    mainHeader: any,
    additionalHeader: any,
    currentPage: any
  ) {
    if (currentPage !== "") {
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
    let currentPage = window.location.href.split("/")[3]
    const mainHeader = document.querySelectorAll("header")[0]
    const additionalHeader = document.querySelectorAll("header")[1]
    updateHeader(mainHeader, additionalHeader, currentPage)
    showAdditionalMenu(additionalHeader, currentPage)

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      document.body.classList.add("touch")
      const subMenus = document.querySelectorAll(".sub-menu")
      subMenus.forEach(subMenu => {
        const thisLink = subMenu.querySelector(".menu__link")
        const toggleSubMenu = subMenu.querySelector(".menu__toggle")
        const subMenuList = subMenu.querySelector(".sub-menu__list")
        thisLink?.classList.add("parent")
        subMenu.addEventListener("click", () => {
          subMenuList?.classList.toggle("open")
          toggleSubMenu?.classList.toggle("active")
        })
      })
      document.querySelector(".lang")?.addEventListener("click", () => {
        const langList = document.querySelector(".lang__list")
        const langPreview = document.querySelector(".lang__preview")
        langList?.classList.toggle("open")
        langPreview?.classList.toggle("active")
      })
    } else {
      document.body.classList.add("mouse")
    }
  }, [])

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
            onClick={() => showMenu(isAdditional)}
          >
            <span></span>
          </div>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="menu__list-item sub-menu">
                <span className="menu__toggle text-header">Компания</span>
                <ul className="sub-menu__list">
                  <li className="sub-menu__list-item">
                    <Link className="sub-menu__link text-header" to="/">
                      Главная
                    </Link>
                  </li>

                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to="/akbarys-about/"
                    >
                      О компании
                    </Link>
                  </li>

                  <li className="sub-menu__list-item">
                    <Link className="sub-menu__link text-header" to="/career/">
                      Карьера
                    </Link>
                  </li>

                  <li className="sub-menu__list-item reset-border">
                    <Link
                      className="sub-menu__link text-header"
                      to="/press-center/"
                    >
                      Пресс-центр
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__list-item sub-menu">
                <span className="menu__toggle text-header">Решения</span>
                <ul className="sub-menu__list">
                  <li className="sub-menu__list-item">
                    <Link
                      className="sub-menu__link text-header"
                      to="/h2s-service"
                    >
                      Газовая безопасность
                    </Link>
                  </li>

                  <li className="sub-menu__list-item reset-border">
                    <Link
                      className="sub-menu__link text-header"
                      to="/sft-service"
                    >
                      Нейтрализация сероводорода
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__list-item">
                <Link
                  className="menu__link text-header"
                  to="/verification-laboratory"
                >
                  Лаборатория
                </Link>
              </li>
              <li className="menu__list-item">
                <Link className="menu__link text-header" to="/service-center">
                  Сервисный центр
                </Link>
              </li>

              <li className="menu__list-item reset-border">
                <Link className="menu__link text-header" to="/contacts/">
                  Контакты
                </Link>
              </li>
            </ul>
            <div className="header__box">
              <div className="lang">
                <div className="lang__preview">
                  <span className="lang__text text-header">
                    Рус
                    <StaticImage
                      className="lang__image"
                      src="../../images/lang/russia.jpg"
                      alt="russia"
                    ></StaticImage>
                  </span>
                </div>
                <ul className="lang__list">
                  <li className="lang__list-item">
                    <Link className="lang__link" to="/">
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
                    <Link className="lang__link" to="/404/">
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
                    <Link className="lang__link" to="/404/">
                      <span className="lang__text text-header">
                        Қаз
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
