import * as React from 'react';
import { FC } from 'react';
import './contacts.description.scss';

import Img1 from '../../../images/contacts/contacts-item-1.svg';
import Img2 from '../../../images/contacts/contacts-item-2.svg';
import Img3 from '../../../images/contacts/contacts-item-3.svg';

interface ContactsPreviewProps {
  content: any
}
const ContactsDescription: FC<ContactsPreviewProps> = ({ content }) => {
  const { contacts } = content;
  const title1 = contacts[0].title;
  const text1 = contacts[0].text;
  const title2 = contacts[1].title;
  const text2 = contacts[1].text;

  return (
    <div className="contactsDescription">
      <div className="contactsDescription__wrapper container">
        <div className="contactsDescription__items">
          <div className="contactsDescription__item">
            <Img1 />
            <div className="contactsDescription__item-title title-3 black">
              {title1}
            </div>
            <p className="contactsDescription__item-text text-1 gray">
              {text1[0]}
            </p>
            <p className="contactsDescription__item-text text-1 gray">
            {text1[1]}
            </p>
            <p className="contactsDescription__item-text mt text-1 gray">
            {text1[2]}
            </p>
            <p className="contactsDescription__item-text mt text-1 gray">
            {text1[3]}
            </p>
            <p className="contactsDescription__item-text text-1 gray">
            {text1[4]}
            </p>
          </div>
          <div className="contactsDescription__item">
            <Img3 />
            <div className="contactsDescription__item-title title-3 black">
              {title2}
            </div>
            <p className="contactsDescription__item-text text-1 gray">
              {text2[0]}
            </p>
            <p className="contactsDescription__item-text text-1 gray">
            {text2[1]}
            </p>
            <p className="contactsDescription__item-text text-1 mt gray">
            {text2[2]}
            </p>
            <p className="contactsDescription__item-text text-1 gray">
            {text2[3]}
            </p>
            <p className="contactsDescription__item-text text-1 mt gray">
            {text2[4]}
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ContactsDescription;
