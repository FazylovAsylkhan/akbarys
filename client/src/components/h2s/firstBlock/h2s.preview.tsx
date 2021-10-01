import * as React from "react"
import { FC } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./h2s.preview.scss"
import id from "../../../utils/randomId"

interface Subtitle {
  digit: string
  text: string
}

interface H2sPreviewProps {
  content: {
    title: string
    subtitles: Subtitle[]
    image: any
  }
}

const H2sPreview: FC<H2sPreviewProps> = ({ content }) => {
  const { title, subtitles, image } = content
  const img = getImage(image)

  return (
    <div className="h2sPreview">
      <div className="h2sPreview__content container">
        <div className="h2sPreview__wrapper">
          <h2 className="h2s__title title-1 white">{title}</h2>
          <div className="h2sPreview__box">
            {subtitles.map(subtitle => (
              <h3 className="h2sPreview__subtitle" key={id()}>
                <span className="h2sPreview__subtitle-digit text-2 white">
                  {subtitle.digit}
                </span>
                <span className="h2sPreview__subtitle-description text-1 white_dark">
                  {subtitle.text}
                </span>
              </h3>
            ))}
          </div>
        </div>
      </div>
      <div className="h2sPreview__body">
        {img ? (
          <GatsbyImage
            className="h2sPreview__body-image"
            image={img}
            alt={title}
          />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  )
}
export default H2sPreview
