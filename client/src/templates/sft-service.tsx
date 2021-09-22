import * as React from 'react';
import { graphql } from 'gatsby';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Plug from '../components/plug/plug';
import Seo from '../components/seo';
import SftPreview from '../components/sft/firstBlock/sft.preview';
import SftRequires from '../components/sft/fivthBlock/sft.requires';
import SftDescription from '../components/sft/secondBlock/sft.description';
import SftPartners from '../components/sft/sixthBlock/sft.partners';
import SftSourFluidTreatment from '../components/sft/thirdBlock/sft.sourFluidTreatment';

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
  const { firstBlock, secondBlock } = props.data.pageSftServiceJson;

  return (
    <LayoutAdditional data={data}>
      <Seo title="Нейтрализация сероводорода" />
      <SftPreview content={firstBlock} />
      <SftDescription content={secondBlock}></SftDescription>
      <SftSourFluidTreatment />
      <SftRequires />
      <SftPartners />
      <Plug />
    </LayoutAdditional>
  );
};

export default sftService;

export const query = graphql`
  query PageSftServiceTemplateQuery($lang: String) {
    pageSftServiceJson(lang: { eq: $lang }) {
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
        h1
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
