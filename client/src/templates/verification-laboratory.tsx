import { graphql } from 'gatsby';
import * as React from 'react';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Plug from '../components/plug/plug';
import Seo from '../components/seo';
import VerificationLaboratoryPreview from '../components/verificationLaboratory/firstBlock/verificationLaboratory.preview';
import VerificationLaboratoryAchievements from '../components/verificationLaboratory/fouthBlock/verificationLaboratory.achievements';
import VerificationLaboratoryDescription from '../components/verificationLaboratory/secondBlock/verificationLaboratory.description';
import VerificationLaboratoryRequires from '../components/verificationLaboratory/thirdBlock/verificationLaboratory.requires';

const VerificationLaboratory = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);

  const { seo, firstBlock } = props.data.pageVerificationLaboratoryJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };

  return (
    <LayoutAdditional data={data}>
      <Seo title={seo.title} />
      <VerificationLaboratoryPreview content={firstBlock} />
      <VerificationLaboratoryDescription />
      <VerificationLaboratoryRequires />
      <VerificationLaboratoryAchievements />
      <Plug />
    </LayoutAdditional>
  );
};

export default VerificationLaboratory;

export const query = graphql`
  query PageVerificationLaboratoryTemplateQuery($lang: String) {
    pageVerificationLaboratoryJson(lang: { eq: $lang }) {
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
              quality: 50
            )
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
