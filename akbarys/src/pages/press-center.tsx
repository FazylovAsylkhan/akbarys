import * as React from "react"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LayoutAdditional from "../components/layer/layerAdditional"
import Seo from "../components/seo"
import "../scss/pressCenter.scss"

const PressCenter = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll(".headerAdditional__link")[6]
      ?.classList.add("active")
  }, [])

  const { nodes } = props.data.allMarkdownRemark
  return (
    <LayoutAdditional>
      <Seo title="Пресс-центр" />
      <div className="pressCenterNews">
        <div className="container">
          <div className="pressCenterNews__wrapper">
            <div className="pressCenterNews__title title-1 black">
              Пресс-центр
            </div>
            <div className="pressCenterNews__cards">
              {(nodes as any[]).map(post => {
                const { title, url, image, description } = post.frontmatter.contentPost
                const img = getImage(image)
                return (
                  <div key={post.id} className="pressCenterNews__card">
                    <div className="pressCenterNews__card-head">
                      {img ? <GatsbyImage image={img} alt={title} /> : ""}
                    </div>
                    <div className="pressCenterNews__card-body">
                      <h3 className="pressCenterNews__card-title text-11 black">
                        <Link to={url}>{title}</Link>
                      </h3>
                      <p className="pressCenterNews__card-description text-1 gray">
                        {description}
                      </p>

                      <Link
                        to={url}
                        className="pressCenterNews__card-button blue"
                      >
                        Читать
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div></div>
    </LayoutAdditional>
  )
}

export default PressCenter

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {contentPost: {lang: {eq: "ru"}}}}) {
      nodes {
        id
        frontmatter {
          contentPost {
            url
            title
            description
            date
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: [AVIF, WEBP, JPG]
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
          }
        }
      }
    }
  }
`
