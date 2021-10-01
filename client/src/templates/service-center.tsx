import * as React from 'react';
import { useEffect } from 'react';
import { graphql } from 'gatsby';

import LayoutAdditional from '../components/layer/layerAdditional';
import Plug from '../components/plug/plug';
import Seo from '../components/seo';
import ServiceCenterPreview from '../components/serviceCenter/firstBlock/serviceCenter,preview';
import ServiceCenterOpportunities from '../components/serviceCenter/fouthBlock/serviceCenter.opportunities';
import ServiceCenterDescription from '../components/serviceCenter/secondBlock/serviceCenter.description';
import ServiceCenterDiagnostics from '../components/serviceCenter/thirdBlock/serviceCenter.diagnostics';

const ServiceCenter = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  const { firstBlock, secondBlock, langButtonsLinks } = props.data.pageServiceCenterJson;
  return (
    <LayoutAdditional langs={langButtonsLinks} data={data}>
      <Seo title="Сервисный центр" />
      <ServiceCenterPreview content={firstBlock} />
      <ServiceCenterDescription content={secondBlock} />
      <ServiceCenterDiagnostics />
      <ServiceCenterOpportunities />
      <Plug />
    </LayoutAdditional>
  );
};

export default ServiceCenter;

export const query = graphql`
  query PageServiceCenterTemplateQuery($lang: String) {
    pageServiceCenterJson(lang: { eq: $lang }) {
      h1
      langButtonsLinks
      lang
      firstBlock {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      secondBlock {
        h1
        typesOfWork {
          description
          stages
          title
        }
        description {
          text
          title
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
