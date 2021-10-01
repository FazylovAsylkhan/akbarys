import * as React from "react"
import { useEffect } from "react"

import { graphql } from "gatsby"
import H2sPreview from "../components/h2s/firstBlock/h2s.preview"
import H2sIso from "../components/h2s/fouthBlock/h2s.iso"
import H2sDescription from "../components/h2s/secondBlock/h2s.description"
import LayoutAdditional from "../components/layer/layerAdditional"
import Seo from "../components/seo"
import H2sAboutSft from "../components/h2s/fivthBlock/h2s.aboutSft"
import H2sGasDetectionSystem from "../components/h2s/thirdBlock/h2s.gasDetectionSystem"

const H2sService = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll(".headerAdditional__link")[1]
      ?.classList.add("active")
  }, [])
  const { firstBlock, secondBlock, thirdBlock,
    fourthBlock,
    fivthBlock, langButtonsLinks } =
    props.data.pageH2SServiceJson
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  }
  return (
    <LayoutAdditional langs={langButtonsLinks} data={data}>
      <Seo title="Комплексные решения по безопасности" />
      <H2sPreview content={firstBlock} />
      <H2sDescription content={secondBlock} />
      <H2sGasDetectionSystem content={thirdBlock} />
      <H2sIso content={fourthBlock} />
      <H2sAboutSft content={fivthBlock} />
    </LayoutAdditional>
  )
}

export default H2sService

export const query = graphql`
  query PageH2sServiceTemplateQuery($lang: String) {
    pageH2SServiceJson(lang: { eq: $lang }) {
      h1
      langButtonsLinks
      url
      lang
      firstBlock {
        description
        title
        subtitles {
          digit
          text
        }
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
      secondBlock {
        h1
        first {
          description
          subtitle
          title
        }
        second {
          description1
          description2
          title
        }
      }
      thirdBlock {
        title
        descriptions
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fourthBlock {
        title
        descriptions
      }
      fivthBlock {
        slides {
          title
          subtitle
          description
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
    headerJson(lang: { eq: $lang }) {
      lang
      links {
        text
        url
      }
      subMenu {
        links {
          text
          url
        }
        title
      }
    }
    footerJson(lang: { eq: $lang }) {
      lang
      description
      politics {
        links {
          text
          url
        }
        title
      }
      social {
        links
        title
      }
      subMenu {
        title
        links {
          text
          url
        }
      }
    }
  }
`
