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
  const { firstBlock, secondBlock, thirdBlock, fouthBlock } = props.data.markdownRemark.frontmatter.contentPage.akbarysAbout
  return (

    <div>
      <LayoutAdditional>
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
} 

export default AboutAkbarys;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {contentPage: {akbarysAbout: {lang: {eq: "ru"}}}}) {
      frontmatter {
        contentPage {
          akbarysAbout {
            firstBlock {
              subtitle {
                digit
                text
              }
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
            fouthBlock {
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
            thirdBlock {
              preview {
                digit
                text
              }
              advantages {
                text
                digit
              }
            }
          }
        }
      }
    }
  }
`