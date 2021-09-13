import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './contacts.preview.scss';

const ContactsPreview = () => (
  <div className="contactsPreview">
    <div className="contactsPreview__content container">
      <div className="contactsPreview__wrapper">
        <h2 className="contactsPreview__title title-1 white">
          Контактная информация
        </h2>
        <p className="contactsPreview__title-description text-6 white">
          Мы всегда на связи
        </p>
      </div>
    </div>
    <div className="contactsPreview__body">
      <StaticImage
        className="contactsPreview__body-image"
        placeholder="dominantColor"
        src="../../../images/contacts/contactsPreview.jpg"
        alt="akbarys"
        quality={95}
        formats={['auto', 'webp', 'avif']}
      />
    </div>
  </div>
);

export default ContactsPreview;
