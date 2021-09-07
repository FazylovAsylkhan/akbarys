import * as React from 'react';
import { useEffect } from 'react';

import AkbarysMission from '../components/akbarys/fouthBlock/akbarys.mission';
import CareerPreview from '../components/career/firstBlock/career.preview';
import CareerDescription from '../components/career/secondBlock/career.description';
import CareerOffer from '../components/career/thirdBlock/career.offer';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

const Career = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[7]
      ?.classList.add('active');
  }, []);
  const { firstBlock, secondBlock, thirdBlock } = props.data.markdownRemark.frontmatter.contentPage.career
  
  return (
    <LayoutAdditional>
      <Seo title="Карьера в Akbarys" />
      <CareerPreview content={firstBlock} />
      <CareerDescription content={secondBlock} />
      <AkbarysMission content={thirdBlock} />
      <CareerOffer />
    </LayoutAdditional>
  );
};

export default Career;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {contentPage: {career: {lang: {eq: "ru"}}}}) {
      frontmatter {
        contentPage {
          career {
            firstBlock {
              title {
                firstRow
                secondRow
              }
              description
              subtitle {
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
              title
              subtitle
              opportunities {
                description
                digit
                title
              }
            }
            thirdBlock {
              title
              description
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
        }
      }
    }
  }
`