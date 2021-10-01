import * as React from "react"
import { FC, useRef } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import "./fivthBlock.scss"

import data from "../../../utils/constants"
import {
  hideSlides,
  initNav,
  showPagination,
  showSlide,
  validationNav,
} from "../../../utils/mainUtils"

interface FivthBlockProps {
  content: any
}

const FivthBlock: FC<FivthBlockProps> = ({ content }) => {
  const currentSlidesRef = useRef<Element[] | null>(null)
  const { title, slides } = content

  const sixthBlock: any = data.pages.main.blocks[5]
  return (
    <div className="projects">
      <div className="screen__content container">
        <div className="projects__wrapper">
          <h2 className="projects__title mainText-3 black">{`${title}`} </h2>
          <Swiper
            className="projects__slider"
            slidesPerView={1}
            direction="horizontal"
            nested
            spaceBetween={130}
            watchOverflow
            observer
            observeSlideChildren
            observeParents
            speed={1500}
            navigation
            effect="slide"
            pagination={{
              type: "fraction",
            }}
            onAfterInit={swiper => {
              currentSlidesRef.current = swiper.slides as unknown as Element[]
              initNav(swiper, "projects")
              showPagination(swiper)
              validationNav(swiper)
            }}
            onSlideChange={swiper => {
              const slides = currentSlidesRef.current
              if (slides) {
                hideSlides(slides, swiper, "projects__content")
                showSlide(slides, swiper, "projects__advantages")
              }
              validationNav(swiper)
              showPagination(swiper)
            }}
          >
            {slides.map((slide: any) => {
              const { title, description, image, specifications } = slide
              const img = getImage(image)
              return (
                <SwiperSlide className="projects__slide">
                  <div className="projects__content">
                    {img ? (
                      <GatsbyImage
                        className="projects__content-image"
                        image={img}
                        alt={title}
                      />
                    ) : null}
                    <div className="projects__content-box">
                      <h4 className="projects__content-title mainText-8 black">
                        {title}
                      </h4>
                      <p className="projects__content-description mainText-6 gray">
                        {description}
                      </p>
                    </div>
                    <div className="projects__advantages">
                      {specifications.map((specification: any) => {
                        return (
                          <h3 className="projects__advantages-item">
                            <span className="projects__content-subtitle mainText-7 black">
                              {specification.digit}
                            </span>
                            <span className="projects__content-description mainText-6 gray">
                              {specification.description}
                            </span>
                          </h3>
                        )
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FivthBlock
