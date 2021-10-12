import * as React from 'react';
import { FC } from 'react';
import './contacts.description.scss';

import Img1 from '../../../data/images/contacts/contacts-item-1.svg';
import Img2 from '../../../data/images/contacts/contacts-item-3.svg';
import id from '../../../utils/randomId';

interface ContactsPreviewProps {
  content: any
}
const ContactsDescription: FC<ContactsPreviewProps> = ({ content }) => {
  const { contacts } = content;
  const getContactElement = (contact: any, index: number) => (
      <div className="contactsDescription__item" key={id()}>
        {index ? (
          <Img2 className="contactsDescription__image" />
        ) : (
          <Img1 className="contactsDescription__image" />
        )}

        <div className="contactsDescription__content">
          <h2 className="contactsDescription__title title-3 black">
            {contact.title}
          </h2>
          <div className="contactsDescription__content-box">
            <p
              className="contactsDescription__address text-1 gray"
              dangerouslySetInnerHTML={{ __html: contact.address }}
            ></p>

            <p className="contactsDescription__phones">
              {contact.phones.map((phone: any) => (
                  <a
                    className="contactsDescription__phone text-1 gray"
                    href={`tel:${phone.link}`}
                    target="_blank"
                    key={id()}
                  >
                    {phone.number}
                  </a>
              ))}
            </p>

            {contact.email ? (
              <a
                className="contactsDescription__email text-1 gray"
                href={`mailto:${contact.email}`}
                target="_blank"
              >
                {contact.email}
              </a>
            ) : (
              <a
                className="contactsDescription__site text-1 gray"
                href={`https://${contact.site}`}
                target="_blank"
              >
                {contact.site}
              </a>
            )}
          </div>
        </div>
      </div>
  );
  return (
    <div className="contactsDescription">
      <div className="contactsDescription__wrapper container items-1">
        <div className="contactsDescription__items">
          {getContactElement(contacts[0], 0)}
          {getContactElement(contacts[1], 1)}
        </div>
      </div>
      <div className="contactsDescription__wrapper container items-2">
        <div className="contactsDescription__items">
          {getContactElement(contacts[0], 0)}
        </div>
      </div>
      <div className="line items-2"></div>

      <div className="contactsDescription__wrapper container items-2">
        <div className="contactsDescription__items">
          {getContactElement(contacts[1], 1)}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ContactsDescription;
