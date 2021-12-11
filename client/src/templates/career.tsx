import * as React from 'react';
import { useEffect } from 'react';

import { graphql } from 'gatsby';
import AkbarysMission from '../components/akbarys/fouthBlock/akbarys.mission';
import CareerPreview from '../components/career/firstBlock/career.preview';
import CareerDescription from '../components/career/secondBlock/career.description';
import CareerOffer from '../components/career/fourthBlock/career.offer';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import CareerBenefits from '../components/career/thirdBlock/career.benefits';

const Career = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[7]
      ?.classList.add('active');
  }, []);
  const {
    seo, firstBlock, secondBlock, thirdBlock, fourthBlock, langButtonsLinks,
  } = props.data.pageCareerJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };

  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <CareerPreview content={firstBlock} />
      <CareerDescription content={secondBlock} />
      <CareerBenefits content={thirdBlock} />
      <AkbarysMission content={props.data.pageAboutUsJson.fourthBlock} />
      <CareerOffer content={fourthBlock} />
    </LayoutAdditional>
  );
};

export default Career;

export const query = graphql`
  query PageCareerTemplateQuery($lang: String) {
    pageAboutUsJson(lang: { eq: $lang }) {
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
    }
    pageCareerJson(lang: { eq: $lang }) {
      seo {
        title
        h1
      }
      langButtonsLinks
      lang
      url
      firstBlock {
        description
        title {
          firstRow
          secondRow
        }
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
        subtitle
        title
      }
      thirdBlock {
        opportunities {
          description
          digit
          title
        }
      }
      fourthBlock {
        title
        subtitle
        fieldNames
        btnText
        politica {
          text
          link
        }
        popup {
          success {
            title
            description
            btnText
          }
          error {
            title
            description
            btnText
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
`;

// export const query = graphql`
//   query {
//     markdownRemark(frontmatter: {contentPage: {career: {lang: {eq: "ru"}}}}) {
//       frontmatter {
//         contentPage {
//           career {
//             firstBlock {
//               title {
//                 firstRow
//                 secondRow
//               }
//               description
//               subtitle {
//                 digit
//                 text
//               }
//               image {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//             secondBlock {
//               title
//               subtitle
//               opportunities {
//                 description
//                 digit
//                 title
//               }
//             }
//             thirdBlock {
//               title
//               description
//               images {
//                 childrenImageSharp {
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
