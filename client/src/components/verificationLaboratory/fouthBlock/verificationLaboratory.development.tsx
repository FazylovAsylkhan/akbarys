import * as React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  initNav,
  showPagination,
  validationNav,
} from "../../../utils/mainUtils"
import "./verificationLaboratory.development.scss"
import { FC } from "react"
import id from "../../../utils/randomId"

interface VerificationLaboratoryDevelopmentProps {
  content: any
}

const VerificationLaboratoryDevelopment: FC<VerificationLaboratoryDevelopmentProps> =
  ({ content }) => {
    const { title, description, images } = content
    SwiperCore.use([Pagination, Navigation, EffectFade])
    return (
      <div className="verificationLaboratoryDevelopment">
        <div className="container">
          <div className="verificationLaboratoryDevelopment__wrapper">
            <h2 className="verificationLaboratoryDevelopment__slider-title title-1 black">
              {title}
            </h2>
            <p className="verificationLaboratoryDevelopment__slider-description text-1 gray">
              {description}
            </p>
            <Swiper
              className="verificationLaboratoryDevelopment__slider"
              speed={1500}
              slidesPerView={1}
              fadeEffect={{
                crossFade: true,
              }}
              pagination={{
                clickable: true,
                type: "fraction",
              }}
              navigation
              effect="fade"
              onAfterInit={swiper => {
                initNav(swiper, "verificationLaboratoryDevelopment")
                showPagination(swiper)
                validationNav(swiper)
              }}
              onSlideChange={swiper => {
                validationNav(swiper)
                showPagination(swiper)
              }}
            >
              {images.map((image: any) => {
                const img = getImage(image)
                return (
                  <SwiperSlide key={id()} className="verificationLaboratoryDevelopment__slide">
                    {img ? (
                      <GatsbyImage
                        className="verificationLaboratoryDevelopment__image"
                        image={img}
                        alt={title}
                      />
                    ) : null}
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        <div className="line"></div>
      </div>
    )
  }

export default VerificationLaboratoryDevelopment
