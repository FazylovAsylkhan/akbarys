import { graphql } from 'gatsby';
import * as React from 'react';
import { useEffect } from 'react';

import ContactsPreview from '../components/contacts/firstBlock/contacts.preview';
import ContactsDescription from '../components/contacts/secondBlock/contacts.description';
import ContactsForm from '../components/contacts/thirdBlock/contacts.form';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';

const Contacts = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[8]
      ?.classList.add('active');
  }, []);
  const {
    seo, firstBlock, secondBlock, thirdBlock, langButtonsLinks,
  } = props.data.pageContactsJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional h1={seo.h1} langs={langButtonsLinks} data={data}>
      <Seo title={seo.title} />
      <ContactsPreview content={firstBlock} />
      <ContactsDescription content={secondBlock} />
      <ContactsForm content={thirdBlock} />
    </LayoutAdditional>
  );
};
export default Contacts;

export const query = graphql`
  query PageContactsTemplateQuery($lang: String) {
    pageContactsJson(lang: { eq: $lang }) {
      seo {
        title
        h1
      }
      langButtonsLinks
      url
      lang
      firstBlock {
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
        contacts {
          title
          address
          phones {
            number
            link
          }
          email
          site
        }
      }
      thirdBlock {
        title
        subtitle
        fieldNames
        btnText
        politica {
          text
          link
        }
        popup {
          success {
            title
            description
            btnText
          }
          error {
            title
            description
            btnText
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
      logoLink
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
