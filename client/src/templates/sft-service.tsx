import * as React from 'react';
import { graphql } from 'gatsby';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import SftPreview from '../components/sft/firstBlock/sft.preview';
import SftDescription from '../components/sft/secondBlock/sft.description';
import SftSourFluidTreatment from '../components/sft/thirdBlock/sft.sourFluidTreatment';
import SftRequires from '../components/sft/fourthBlock/sft.requires';
import SftPartners from '../components/sft/fivthBlock/sft.partners';

const sftService = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  const {
    seo,
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    fivthBlock,
    langButtonsLinks,
  } = props.data.pageSftServiceJson;
  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <SftPreview content={firstBlock} />
      <SftDescription content={secondBlock}></SftDescription>
      <SftSourFluidTreatment content={thirdBlock} />
      <SftRequires content={fourthBlock} />
      <SftPartners content={fivthBlock} />
    </LayoutAdditional>
  );
};

export default sftService;

export const query = graphql`
  query PageSftServiceTemplateQuery($lang: String) {
    pageSftServiceJson(lang: { eq: $lang }) {
      seo {
        title
        h1
      }
      langButtonsLinks
      lang
      firstBlock {
        title
        subtitles {
          description
          digit
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
        first {
          subtitle
          title
        }
        second {
          description
          stages
          title
        }
      }
      thirdBlock {
        first {
          title
          descriptions
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
        second {
          title
          items
        }
      }
      fourthBlock {
        title
        descriptions
      }
      fivthBlock {
        title
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
