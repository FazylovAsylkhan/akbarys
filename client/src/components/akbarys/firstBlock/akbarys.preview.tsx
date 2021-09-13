import * as React from "react"
import { FC } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./akbarys.preview.scss"

interface AkBarysPreviewProps {
  content: {
    subtitle: {
      digit: string
      text: string
    }
    description: string
    title: string
    image: any
  };
}

const AkBarysPreview: FC<AkBarysPreviewProps> = ({content}) => {
  const {title, description, subtitle, image} = content
  const img = getImage(image)
  return (
    <div className="akbarysPreview">
      <div className="akbarysPreview__content container">
        <div className="akbarysPreview__wrapper">
          <h2 className="akbarysPreview__title title-1 white">
            {title}
          </h2>
          <p className="akbarysPreview__title-description text-6 white">
            {description}
          </p>
          <h3 className="akbarysPreview__subtitle text-2 white">
            {subtitle.digit}
          </h3>
          <p className="akbarysPreview__subtitle-description text-6 white">
            {subtitle.text}
          </p>
        </div>
      </div>
      <div className="akbarysPreview__body">
        {img ? <GatsbyImage className="akbarysPreview__body-image" image={img} alt={title} /> : null}
      </div>
    </div>
  )
}
export default AkBarysPreview
