import * as React from 'react';
import { useEffect } from 'react';

import ContactsPreview from '../components/contacts/firstBlock/contacts.preview';
import ContactsDescription from '../components/contacts/secondBlock/contacts.description';
import ContactsForm from '../components/contacts/thirdBlock/contacts.form';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';

const Contacts = () => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[8]
      ?.classList.add('active');
  }, []);
  return (
    <LayoutAdditional>
      <Seo title="Контактная информация" />
      <ContactsPreview />
      <ContactsDescription />
      <ContactsForm />
    </LayoutAdditional>
  );
};
export default Contacts;
