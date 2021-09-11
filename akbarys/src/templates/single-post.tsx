import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LayoutAdditional from "../components/layer/layerAdditional"
import Seo from "../components/seo"
import "./single-post.scss"
import { Helmet } from "react-helmet"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, date, imagePreview } = data.markdownRemark.frontmatter.contentPost
  const img = getImage(imagePreview)
  React.useEffect(() => {
    const body = document.querySelector(`.singlePost__body`)
    body
      ?.querySelectorAll("p")
      .forEach(text => text.classList.add("text-1", "gray", "singlePost__text"))
    body
      ?.querySelectorAll("h2")
      .forEach(text =>
        text.classList.add("title-2", "gray", "singlePost__text")
      )
  }, [])

  return (
    <LayoutAdditional>
      <Seo title={title} />
      <Helmet>
        <script
          type="text/javascript"
          src="https://yastatic.net/share2/share.js"
          defer={true}
        ></script>
      </Helmet>
      <div className="singlePost">
        <div className="singlePost__background">
          {img ? (
            <GatsbyImage
              className="singlePost__background-image"
              image={img}
              alt={title}
            />
          ) : (
            ""
          )}
        </div>
        <div className="container">
          <div className="singlePost__wrapper">
            <div className="newsPreview__header">
              <h1 className="singlePost__title title-1 black">{title}</h1>
              <div className="singlePost__data text-6 gray">{date}</div>
              <div
                className="ya-share2 singlePost__social"
                lang="ru"
                data-services="facebook,vkontakte,telegram,linkedin,twitter,whatsapp"
              ></div>
              <div
                className="singlePost__body"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </LayoutAdditional>
  )
}

export default SinglePost

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { contentPost: {lang: {eq: "ru"}, url: { eq: $url }}}) {
      frontmatter {
        contentPost {
          title
          url
          date
          imagePreview {
            childImageSharp {
              gatsbyImageData(
                formats: [AVIF, WEBP, JPG]
                placeholder: DOMINANT_COLOR
                quality: 95
              )
            }
          }
        }
      }
      html
    }
  }
`
