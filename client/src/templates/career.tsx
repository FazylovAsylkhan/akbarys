import * as React from 'react';
import { useEffect } from 'react';

import { graphql } from 'gatsby';
import AkbarysMission from '../components/akbarys/fouthBlock/akbarys.mission';
import CareerPreview from '../components/career/firstBlock/career.preview';
import CareerDescription from '../components/career/secondBlock/career.description';
import CareerOffer from '../components/career/thirdBlock/career.offer';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import Plug from '../components/plug/plug';

const Career = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[7]
      ?.classList.add('active');
  }, []);
  const { firstBlock, secondBlock, thirdBlock, langButtonsLinks } = props.data.pageCareerJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };

  return (
    <LayoutAdditional langs={langButtonsLinks} data={data}>
      <Seo title="Карьера в Akbarys" />
      <CareerPreview content={firstBlock} />
      <CareerDescription content={secondBlock} />
      <AkbarysMission content={thirdBlock} />
      <CareerOffer />
      <Plug />
    </LayoutAdditional>
  );
};

export default Career;

export const query = graphql`
  query PageCareerTemplateQuery($lang: String) {
    pageCareerJson(lang: { eq: $lang }) {
      h1
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
        opportunities {
          description
          digit
          title
        }
      }
      thirdBlock {
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
