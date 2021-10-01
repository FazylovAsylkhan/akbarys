import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  hideSlides,
  initNav,
  showPagination,
  showSlide,
  validationNav,
} from "../../../utils/mainUtils"
import Partners1 from "../../../images/partners/partners1.svg"
import Partners2 from "../../../images/partners/partners2.svg"
import Partners3 from "../../../images/partners/partners3.svg"
import Partners4 from "../../../images/partners/partners4.svg"
import Partners5 from "../../../images/partners/partners5.svg"
import Partners6 from "../../../images/partners/partners6.svg"
import Partners7 from "../../../images/partners/partners7.svg"
import Partners8 from "../../../images/partners/partners8.svg"
import Partners9 from "../../../images/partners/partners9.svg"
import Partners10 from "../../../images/partners/partners10.svg"
import "./seventhBlock.scss"
import { FC } from "react"
interface SeventhBlockProps {
  content: any
}

const SeventhBlock: FC<SeventhBlockProps> = ({ content }) => {
  const sliderRef = React.useRef<Element[] | null>(null)
  const { title, description } = content

  const getPartnersImagesElements = () => {
    const partnersLogo = [
      Partners1,
      Partners2,
      Partners3,
      Partners4,
      Partners5,
      Partners6,
      Partners7,
      Partners8,
      Partners9,
      Partners10,
    ]
    const imagesElements = partnersLogo.map((Image, index) => (
      <div className="partners__slide-item" key={`image${index}`}>
        {<Image />}
      </div>
    ))
    return imagesElements
  }
  return (
    <div className="partners">
      <div className="screen__content container">
        <div className="partners__wrapper">
          <h2 className="partners__title mainText-3 black">{title}</h2>
          <p className="partners__description mainText-6 gray">{description}</p>
          <Swiper
            className="partners__slider"
            slidesPerView={1}
            direction="horizontal"
            nested
            observer
            watchOverflow
            observeSlideChildren
            observeParents
            effect="slide"
            // navigation
            speed={1500}
            // pagination={{
            //   type: 'fraction',
            // }}
            onBeforeInit={swiper => {
              swiper.params.slideToClickedSlide = false
              swiper.params.simulateTouch = false
            }}
            onAfterInit={swiper => {
              sliderRef.current = swiper.slides as unknown as Element[]
              // initNav(swiper, "partners")
              // showPagination(swiper)
              // validationNav(swiper)
            }}
            onSlideChange={swiper => {
              const slides = sliderRef.current
              if (slides) {
                hideSlides(slides, swiper, "partners__slide-item-wrapper")

                const nextSlide = slides[swiper.realIndex + 1]

                if (nextSlide) {
                  const nextWrapper = nextSlide.querySelector(
                    ".partners__slide-item-wrapper"
                  )
                  nextWrapper?.classList.add("hide")
                }
                setTimeout(() => {
                  showSlide(slides, swiper, "partners__slide-item-wrapper")
                }, 1000)
              }
              validationNav(swiper)
              showPagination(swiper)
            }}
          >
            <SwiperSlide className="partners__slide">
              <div className="partners__slide-item-wrapper">
                {getPartnersImagesElements()}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SeventhBlock
