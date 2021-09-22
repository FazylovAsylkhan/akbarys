import { graphql } from 'gatsby';
import * as React from 'react';
import { useEffect } from 'react';

import ContactsPreview from '../components/contacts/firstBlock/contacts.preview';
import ContactsDescription from '../components/contacts/secondBlock/contacts.description';
import ContactsForm from '../components/contacts/thirdBlock/contacts.form';
import LayoutAdditional from '../components/layer/layerAdditional';
import Plug from '../components/plug/plug';
import Seo from '../components/seo';

const Contacts = (props: any) => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[8]
      ?.classList.add('active');
  }, []);
  const { firstBlock, secondBlock } = props.data.pageContactsJson;
  const data = {
    header: props.data.headerJson,
    footer: props.data.footerJson,
  };
  return (
    <LayoutAdditional data={data}>
      <Seo title="Контактная информация" />
      <ContactsPreview content={firstBlock} />
      <ContactsDescription content={secondBlock} />
      <ContactsForm />
      <Plug />
    </LayoutAdditional>
  );
};
export default Contacts;

export const query = graphql`
  query PageContactsTemplateQuery($lang: String) {
    pageContactsJson(lang: { eq: $lang }) {
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
