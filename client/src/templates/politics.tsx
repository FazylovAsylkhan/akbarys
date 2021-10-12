import * as React from 'react';

import { graphql } from 'gatsby';
import PoliticsPreview from '../components/politics/firstBlock/politics';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';

const Politics = (props: any) => {
  const { seo, firstBlock, langButtonsLinks } = props.data.pagePoliticsJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <PoliticsPreview content={firstBlock} />
    </LayoutAdditional>
  );
};

export default Politics;

export const query = graphql`
  query PagePoliticsTemplateQuery($lang: String) {
    pagePoliticsJson(lang: { eq: $lang }) {
      langButtonsLinks
      lang
      seo {
        title
        h1
      }
      firstBlock {
        title
        texts {
          begin
          rules {
            title
            items
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
