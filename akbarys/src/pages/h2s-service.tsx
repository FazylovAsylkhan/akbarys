import * as React from 'react';
import { useEffect } from 'react';

import H2sPreview from '../components/h2s/firstBlock/h2s.preview';
import H2sIso from '../components/h2s/fouthBlock/h2s.iso';
import H2sDescription from '../components/h2s/secondBlock/h2s.description';
import H2sAboutSft from '../components/h2s/thirdBlock/h2s.aboutSft';
import GasDetectionSystem from '../components/ppe/fouthBlock/ppe.gasDetectionSystem';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import data from '../utils/constants';
import { graphql } from 'gatsby';

const H2sService = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);
  const { firstBlock } = props.data.markdownRemark.frontmatter.contentPage.h2sService
  return (
    <LayoutAdditional>
      <Seo title="Комплексные решения по безопасности" />
      <H2sPreview content={firstBlock} />
      <H2sDescription data={data.pages.h2s.blocks[0]}></H2sDescription>
      <GasDetectionSystem/>
      <H2sIso />
      <H2sAboutSft />
    </LayoutAdditional>
  );
};

export default H2sService;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {contentPage: {h2sService: {lang: {eq: "ru"}}}}) {
      frontmatter {
        contentPage {
          h2sService {
            firstBlock {
              description
              title
              subtitles {
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
          }
        }
      }
    }
  }
`