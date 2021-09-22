import * as React from 'react';
import { useEffect } from 'react';

import { graphql } from 'gatsby';
import H2sPreview from '../components/h2s/firstBlock/h2s.preview';
import H2sIso from '../components/h2s/fouthBlock/h2s.iso';
import H2sDescription from '../components/h2s/secondBlock/h2s.description';
import H2sAboutSft from '../components/h2s/thirdBlock/h2s.aboutSft';
import GasDetectionSystem from '../components/ppe/fouthBlock/ppe.gasDetectionSystem';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import Plug from '../components/plug/plug';

const H2sService = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);
  const { firstBlock, secondBlock } = props.data.pageH2SServiceJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional data={data}>
      <Seo title="Комплексные решения по безопасности" />
      <H2sPreview content={firstBlock} />
      <H2sDescription content={secondBlock}></H2sDescription>
      <GasDetectionSystem />
      <H2sIso />
      <H2sAboutSft />
      <Plug />
    </LayoutAdditional>
  );
};

export default H2sService;

export const query = graphql`
  query PageH2sServiceTemplateQuery($lang: String) {
    pageH2SServiceJson(lang: { eq: $lang }) {
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
            gatsbyImageData
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

// export const query = graphql`
//   query {
//     markdownRemark(frontmatter: {contentPage: {h2sService: {lang: {eq: "ru"}}}}) {
//       frontmatter {
//         contentPage {
//           h2sService {
//             firstBlock {
//               description
//               title
//               subtitles {
//                 digit
//                 text
//               }
//               image {
//                 childImageSharp {
//                   gatsbyImageData(
//                     formats: [AVIF, WEBP, JPG]
//                     placeholder: DOMINANT_COLOR
//                     quality: 50
//                   )
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
