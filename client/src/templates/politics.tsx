import * as React from 'react';

import { graphql } from 'gatsby';
import PoliticsPreview from '../components/politics/firstBlock/politics';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import Plug from '../components/plug/plug';

const Politics = (props: any) => {
  const { seo, firstBlock } = props.data.pagePoliticsJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional data={data}>
      <Seo title={seo.title} />
      <PoliticsPreview content={firstBlock} />
      <Plug />
    </LayoutAdditional>
  );
};

export default Politics;

export const query = graphql`
  query PagePoliticsTemplateQuery($lang: String) {
    pagePoliticsJson(lang: { eq: $lang }) {
      lang
      seo {
          title
      }
      firstBlock {
          title
          texts
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
