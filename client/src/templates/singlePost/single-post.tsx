import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

import LayoutAdditional from '../../components/layer/layerAdditional';
import Seo from '../../components/seo';
import './single-post.scss';

const SinglePost = (props: any) => {
  const { html } = props.data.markdownRemark;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  const {
    seo, title, date, imagePreview, langButtonsLinks, postNumber,
  } = props.data.markdownRemark.frontmatter.contentPost;
  const img = getImage(imagePreview);
  React.useEffect(() => {
    const body = document.querySelector('.singlePost__body');
    body
      ?.querySelectorAll('p')
      .forEach((text) => text.classList.add('text-1', 'gray', 'singlePost__text'));
    body
      ?.querySelectorAll('h2')
      .forEach((text) => text.classList.add('title-2', 'gray', 'singlePost__text'));
  }, []);

  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <Helmet>
        <script
          type="text/javascript"
          src="https://yastatic.net/share2/share.js"
          defer={true}
        ></script>
      </Helmet>
      <div className={`singlePost preview ${postNumber}`}>
        <div className="singlePost__background">
          {img ? (
            <GatsbyImage
              className="singlePost__background-image"
              image={img}
              alt={title}
            />
          ) : (
            ''
          )}
        </div>
        <div className="container">
          <div className="singlePost__wrapper">
            <div className="newsPreview__header">
              <h1 className="singlePost__title title-1 black">{title}</h1>
              <div className="singlePost__data text-6 gray">{date}</div>
              <div
                className="ya-share2 singlePost__social"
                lang="ru"
                data-services="facebook,vkontakte,telegram,linkedin,twitter,whatsapp"
              ></div>
              <div
                className="singlePost__body"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </LayoutAdditional>
  );
};

export default SinglePost;

export const query = graphql`
  query PostQuery($url: String, $lang: String) {
    markdownRemark(
      frontmatter: { contentPost: { lang: { eq: $lang }, url: { eq: $url } } }
    ) {
      frontmatter {
        contentPost {
          seo {
            title
            h1
          }
          langButtonsLinks
          title
          url
          postNumber
          date
          imagePreview {
            childImageSharp {
              gatsbyImageData(
                formats: [AVIF, WEBP, JPG]
                placeholder: DOMINANT_COLOR
                quality: 95
              )
            }
          }
        }
      }
      html
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
