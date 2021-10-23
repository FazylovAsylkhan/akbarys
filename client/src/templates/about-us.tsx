import * as React from 'react';
import { graphql } from 'gatsby';

import AkbarysAdvantages from '../components/akbarys/thirdBlock/akbarys.advantages';
import AkbarysAchievements from '../components/akbarys/fivthBlock/akbarys.achievements';
import AkbarysDescription from '../components/akbarys/secondBlock/akbarys.description';
import AkBarysPreview from '../components/akbarys/firstBlock/akbarys.preview';
import AkbarysMission from '../components/akbarys/fouthBlock/akbarys.mission';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import AkbarysProtection from '../components/akbarys/sixth/akbarys.protection';
import AkbarysCareer from '../components/akbarys/seventhBlock/akbarys.career';

const AboutAkbarys = (props: any) => {
  const {
    seo,
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    fivthBlock,
    sixthBlock,
    seventhBlock,
    langButtonsLinks,
  } = props.data.pageAboutUsJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <div>
      <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
        <Seo title={seo.title} />
        <AkBarysPreview content={firstBlock} />
        <AkbarysDescription content={secondBlock} />
        <AkbarysAdvantages content={thirdBlock} />
        <AkbarysMission content={fourthBlock} />
        <AkbarysAchievements content={fivthBlock} />
        <AkbarysProtection content={sixthBlock} />
        <AkbarysCareer content={seventhBlock} />
      </LayoutAdditional>
    </div>
  );
};

export default AboutAkbarys;

export const query = graphql`
  query PageAkbarysAboutTemplateQuery($lang: String) {
    pageAboutUsJson(lang: { eq: $lang }) {
      seo {
        title
        h1
      }
      langButtonsLinks
      lang
      url
      firstBlock {
        title
        description
        subtitle {
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
        description
        title
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
      thirdBlock {
        advantages {
          digit
          text
        }
        preview {
          digit
          text
        }
      }
      fourthBlock {
        description
        title
        qualities
        images {
          childrenImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, JPG]
              placeholder: DOMINANT_COLOR
              quality: 50
            )
          }
        }
      }
      fivthBlock {
        title
        description
        certificates {
          title
          description
          images {
            childImageSharp {
              gatsbyImageData(
                formats: [AVIF, WEBP, JPG]
                placeholder: DOMINANT_COLOR
                quality: 90
              )
            }
          }
        }
        btnText
      }
      sixthBlock {
        title
        descriptions
        button {
          text
          link
        }
      }
      seventhBlock {
        title
        description
        subtitle
        button {
          text
          link
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
`;
