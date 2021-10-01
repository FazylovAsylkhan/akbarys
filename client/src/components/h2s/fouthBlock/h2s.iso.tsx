import "./h2s.iso.scss"

import * as React from "react"

import ISO_IMG from "../../../images/iso.svg"
import { FC } from "react"

interface H2sIsoProps {
  content: any
}

const H2sIso: FC<H2sIsoProps> = ({ content }) => {
  const { title, descriptions } = content

  return (
    <div className="ISO">
      <div className="container">
        <div className="ISO__wrapper">
          <div className="ISO__content">
            <h3 className="ISO__title title-1">{title}</h3>
            <p className="ISO__description text-5">
              {descriptions[0]}
            </p>
            <p className="ISO__description text-5">
              {descriptions[1]}
            </p>
          </div>
          <div className="ISO__img">{<ISO_IMG className="ISO__img" />}</div>
        </div>
      </div>
    </div>
  )
}

export default H2sIso
