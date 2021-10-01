import "./sft.requires.scss"

import * as React from "react"
import { FC } from "react"

interface SftRequiresProps {
  content: any
}

const SftRequires: FC<SftRequiresProps> = ({ content }) => {
  const { title, descriptions } = content

  return (
    <div className="sftRequires">
      <div className="container">
        <div className="sftRequires__wrapper">
          <div className="sftRequires__content">
            <h3 className="sftRequires__title title-1">
              {title}
            </h3>
            <p className="sftRequires__description text-5">
              {descriptions[0]}
            </p>
            <p className="sftRequires__description text-5">
              {descriptions[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SftRequires
