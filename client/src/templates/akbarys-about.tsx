import * as React from 'react';
import { graphql } from 'gatsby';

import AkbarysAdvantages from '../components/akbarys/thirdBlock/akbarys.advantages';
import AkbarysAchievements from '../components/akbarys/fivthBlock/akbarys.achievements';
import AkbarysDescription from '../components/akbarys/secondBlock/akbarys.description';
import AkbarysCareer from '../components/akbarys/eighthBlock/akbarys.career';
import AkBarysPreview from '../components/akbarys/firstBlock/akbarys.preview';
import AkbarysMission from '../components/akbarys/fouthBlock/akbarys.mission';
import AkbarysProtection from '../components/akbarys/seventhBlock/akbarys.protection';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import Plug from '../components/plug/plug';

const AboutAkbarys = (props: any) => {
  const {
    firstBlock, secondBlock, thirdBlock, fouthBlock,
  } = props.data.pageAkbarysAboutJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <div>
      <LayoutAdditional data={data}>
        <Seo title={secondBlock.title} />
        <AkBarysPreview content={firstBlock} />
        <AkbarysDescription content={secondBlock} />
        <AkbarysAdvantages content={thirdBlock} />
        <AkbarysMission content={fouthBlock} />
        <AkbarysAchievements />
        <AkbarysProtection />
        <AkbarysCareer />
        <Plug />
      </LayoutAdditional>
    </div>
  );
};

export default AboutAkbarys;

export const query = graphql`
  query PageAkbarysAboutTemplateQuery($lang: String) {
    pageAkbarysAboutJson(lang: { eq: $lang }) {
      lang
      url
      firstBlock {
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
      fouthBlock {
        description
        title
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
