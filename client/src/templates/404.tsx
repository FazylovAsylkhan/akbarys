import { graphql } from 'gatsby';
import * as React from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Page404 from '../components/page404/page404';
import Seo from '../components/seo';

const NotFoundPage = (props: any) => {
  const { seo, firstBlock, langButtonsLinks } = props.data.page404Json;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <Page404 content={firstBlock}></Page404>
    </LayoutAdditional>
  );
};

export default NotFoundPage;

export const query = graphql`
  query Page404TemplateQuery($lang: String) {
    page404Json(lang: { eq: $lang }) {
      h1
      langButtonsLinks
      url
      lang
      firstBlock {
        button {
          text
          url
        }
        title
      }
      seo {
        title
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
