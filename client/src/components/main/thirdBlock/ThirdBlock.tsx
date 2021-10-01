import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import "./thirdBlock.scss"
import id from "../../../utils/randomId"
interface ThirdBlockProps {
  content: any
}

const ThirdBlock: React.FC<ThirdBlockProps> = ({ content }) => {
  const { title, button, subtitles, image } = content
  const img = getImage(image)

  return (
    <div className="sft">
      <div className="screen__content container">
        <div className="sft__wrapper">
          <h2 className="sft__title mainText_additional-3 white">{title}</h2>
          <Link className="button sft__button" to={button.url}>
            {button.text}
          </Link>
          <div className="sft__box">
            {subtitles.map((subtitle: any) => {
              return (
                <h3 className=" sft__subtitle" key={id()}>
                  <span className="sft__subtitle-digit mainText-4 white">
                    {subtitle.digit}
                  </span>
                  <span className="sft__subtitle-description mainText-5 white_dark">
                    {subtitle.text}
                  </span>
                </h3>
              )
            })}
          </div>
        </div>
      </div>
      <div className="screen__body">
        {img ? (
          <GatsbyImage className="screen__image" image={img} alt={title} />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  )
}

export default ThirdBlock
