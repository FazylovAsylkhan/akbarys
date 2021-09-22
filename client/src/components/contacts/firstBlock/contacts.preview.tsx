import * as React from 'react';
import { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './contacts.preview.scss';

interface ContactsPreviewProps {
  content: any
}

const ContactsPreview: FC<ContactsPreviewProps> = ({ content }) => {
  const { title, description, image } = content;
  const img = getImage(image);

  return (
    <div className="contactsPreview">
      <div className="contactsPreview__content container">
        <div className="contactsPreview__wrapper">
          <h2 className="contactsPreview__title title-1 white">
            {title}
          </h2>
          <p className="contactsPreview__title-description text-6 white">
            {description}
          </p>
        </div>
      </div>
      <div className="contactsPreview__body">
        {img ? (
          <GatsbyImage
            className="contactsPreview__body-image"
            image={img}
            alt={title}
          />
        ) : null}
        <div className="background__header"></div>
      </div>
    </div>
  );
};

export default ContactsPreview;
