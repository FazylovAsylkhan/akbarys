import * as React from 'react';
import { useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import '../scss/pressCenter.scss';
import Plug from '../components/plug/plug';

const PressCenter = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[6]
      ?.classList.add('active');
  }, []);

  const { nodes } = props.data.allMarkdownRemark;
  const { title, buttonText, langButtonsLinks } = props.data.pagePressCenterJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional langs={langButtonsLinks} data={data}>
      <Seo title="Пресс-центр" />
      <div className="pressCenterNews">
        <div className="container">
          <div className="pressCenterNews__wrapper">
            <div className="pressCenterNews__title title-1 black">{title}</div>
            <div className="pressCenterNews__cards">
              {(nodes as any[]).map((post) => {
                const {
                  title, url, image, description,
                } = post.frontmatter.contentPost;
                const img = getImage(image);
                return (
                  <div key={post.id} className="pressCenterNews__card">
                    <div className="pressCenterNews__card-head">
                      {img ? <GatsbyImage image={img} alt={title} /> : ''}
                    </div>
                    <div className="pressCenterNews__card-body">
                      <h3 className="pressCenterNews__card-title text-11 black">
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/press-center/${url}`)}
                        >
                          {title}
                        </span>
                      </h3>
                      <p className="pressCenterNews__card-description text-1 gray">
                        {description}
                      </p>

                      <span
                        className="pressCenterNews__card-button blue"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(`/press-center/${url}`)}
                      >
                        {buttonText}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div></div>
      <Plug />
    </LayoutAdditional>
  );
};

export default PressCenter;

export const query = graphql`
  query PagePressCenterTemplateQuery($lang: String) {
    pagePressCenterJson(lang: { eq: $lang }) {
      h1
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
