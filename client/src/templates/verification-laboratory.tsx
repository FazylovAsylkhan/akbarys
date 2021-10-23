import * as React from 'react';
import { graphql } from 'gatsby';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import VerificationLaboratoryPreview from '../components/verificationLaboratory/firstBlock/verificationLaboratory.preview';
import VerificationLaboratoryAchievements from '../components/verificationLaboratory/fivthBlock/verificationLaboratory.achievements';
import VerificationLaboratoryDevelopment from '../components/verificationLaboratory/fouthBlock/verificationLaboratory.development';
import VerificationLaboratoryDescription from '../components/verificationLaboratory/secondBlock/verificationLaboratory.description';
import VerificationLaboratoryRequires from '../components/verificationLaboratory/thirdBlock/verificationLaboratory.requires';

const VerificationLaboratory = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);

  const {
    seo,
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    fivthBlock,
    langButtonsLinks,
  } = props.data.pageVerificationLaboratoryJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };

  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <VerificationLaboratoryPreview content={firstBlock} />
      <VerificationLaboratoryDescription content={secondBlock} />
      <VerificationLaboratoryRequires content={thirdBlock} />
      <VerificationLaboratoryDevelopment content={fourthBlock} />
      <VerificationLaboratoryAchievements content={fivthBlock} />
    </LayoutAdditional>
  );
};

export default VerificationLaboratory;

export const query = graphql`
  query PageVerificationLaboratoryTemplateQuery($lang: String) {
    pageVerificationLaboratoryJson(lang: { eq: $lang }) {
      h1
      langButtonsLinks
      url
      lang
      seo {
        title
      }
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
              quality: 90
            )
          }
        }
      }
      secondBlock {
        title
        description
        subtitle
        texts {
          title
          descriptions
        }
        items {
          title
          description
        }
      }
      thirdBlock {
        title
        description
        images {
          childImageSharp {
            gatsbyImageData(
              formats: [AVIF, WEBP, JPG]
              placeholder: DOMINANT_COLOR
              quality: 50
            )
          }
        }
      }
      fourthBlock {
        title
        description
        images {
          childImageSharp {
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
