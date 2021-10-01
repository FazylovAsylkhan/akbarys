import * as React from "react"
import { FC, useRef } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import showPaginationBackground from "../../../utils/h2s"
import {
  initNav,
  showPagination,
  validationNav,
} from "../../../utils/mainUtils"
import "./h2s.aboutSft.scss"

interface H2sAboutSftProps {
  content: any
}

const H2sAboutSft: FC<H2sAboutSftProps> = ({ content }) => {
  const { slides } = content
  const currentSlidesRef = useRef<Element[] | null>(null)
  SwiperCore.use([Pagination, Navigation, EffectFade])
  return (
    <div className="h2sAboutSft">
      <div className="container">
        <div className="h2sAboutSft__wrapper">
          <Swiper
            className="h2sAboutSft__slider"
            slidesPerView={1}
            direction="horizontal"
            spaceBetween={1000}
            watchOverflow
            observer
            nested
            observeSlideChildren
            observeParents
            speed={1500}
            fadeEffect={{
              crossFade: true,
            }}
            navigation
            effect="fade"
            pagination={{
              type: "fraction",
            }}
            onAfterInit={swiper => {
              currentSlidesRef.current = swiper.slides as unknown as Element[]
              initNav(swiper, "h2sAboutSft")
              showPagination(swiper)
              if (currentSlidesRef.current) {
                showPaginationBackground(swiper, currentSlidesRef.current)
              }
              validationNav(swiper)
            }}
            onSlideChange={swiper => {
              validationNav(swiper)
              showPagination(swiper)
              if (currentSlidesRef.current) {
                showPaginationBackground(swiper, currentSlidesRef.current)
              }
            }}
          >
            {slides.map((slide: any) => {
              const { title, subtitle, image, description } = slide
              const img = getImage(image)

              return (
                <SwiperSlide className="h2sAboutSft__slide">
                  <div className="h2sAboutSft__content">
                    {img ? (
                      <GatsbyImage
                        className="h2sAboutSft__content-image"
                        image={img}
                        alt={title}
                      />
                    ) : null}
                    <div className="h2sAboutSft__content-box">
                      <h4 className="h2sAboutSft__content-subtitle text-1 gray">
                        {subtitle}
                      </h4>
                      <h3 className="h2sAboutSft__content-title title-2 black">
                        {title}
                      </h3>

                      <p className="h2sAboutSft__content-description text-5 gray">
                        {description}
                      </p>
                      <div className="h2sAboutSft__digit"></div>
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

export default H2sAboutSft
