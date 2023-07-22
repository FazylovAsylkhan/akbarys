import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"

import LayoutAdditional from "../components/layer/layerAdditional"
import Seo from "../components/seo"
import ServiceCenterPreview from "../components/serviceCenter/firstBlock/serviceCenter,preview"
import ServiceCenterOpportunities from "../components/serviceCenter/fouthBlock/serviceCenter.opportunities"
import ServiceCenterDescription from "../components/serviceCenter/secondBlock/serviceCenter.description"
import ServiceCenterDiagnostics from "../components/serviceCenter/thirdBlock/serviceCenter.diagnostics"
import SftPartners from "../components/sft/fivthBlock/sft.partners"

const ServiceCenter = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll(".headerAdditional__link")[1]
      ?.classList.add("active")
  }, [])
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  }
  const {
    seo,
    firstBlock,
    secondBlock,
    thirdBlock,
    fouthBlock,
    langButtonsLinks,
  } = props.data.pageServiceCenterJson

  const { fivthBlock } = props.data.pageSftServiceJson
  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <ServiceCenterPreview content={firstBlock} />
      <ServiceCenterDescription content={secondBlock} />
      <ServiceCenterDiagnostics content={thirdBlock} />
      <ServiceCenterOpportunities content={fouthBlock} />
      <SftPartners content={fivthBlock} />
    </LayoutAdditional>
  )
}

export default ServiceCenter

export const query = graphql`
  query PageServiceCenterTemplateQuery($lang: String) {
    pageSftServiceJson(lang: { eq: $lang }) {
      fivthBlock {
        title
      }
    }
    pageServiceCenterJson(lang: { eq: $lang }) {
      seo {
        title
        h1
      }
      langButtonsLinks
      lang
      firstBlock {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      secondBlock {
        typesOfWork {
          description
          items {
            title
            description
          }
          title
        }
        descriptions {
          text
          title
        }
      }
      thirdBlock {
        title
        descriptions
      }
      fouthBlock {
        title
        description
        images {
          childImageSharp {
            gatsbyImageData
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
      logoLink
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
