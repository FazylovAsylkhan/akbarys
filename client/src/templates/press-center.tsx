import * as React from 'react';
import { useEffect } from 'react';
import { graphql } from 'gatsby';

import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import PressCenterNews from '../components/pressCenter/firstBlock/pressCenter.news';

const PressCenter = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[6]
      ?.classList.add('active');
  }, []);

  const { nodes } = props.data.allMarkdownRemark;
  const {
    seo, title, buttonText, langButtonsLinks,
  } = props.data.pagePressCenterJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  const content = {
    news: nodes,
    title,
    buttonText,
  };
  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <PressCenterNews content={content} />
    </LayoutAdditional>
  );
};

export default PressCenter;

export const query = graphql`
  query PagePressCenterTemplateQuery($lang: String) {
    pagePressCenterJson(lang: { eq: $lang }) {
      seo {
        title
        h1
      }
      langButtonsLinks
      lang
      title
      buttonText
    }
    allMarkdownRemark(
      filter: { frontmatter: { contentPost: { lang: { eq: $lang } } } }
    ) {
      nodes {
        id
        frontmatter {
          contentPost {
            url
            title
            description
            date
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
