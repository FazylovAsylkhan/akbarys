import './contacts.description.scss';

import * as React from 'react';

import Img1 from '../../../images/contacts/contacts-item-1.svg';
import Img2 from '../../../images/contacts/contacts-item-2.svg';
import Img3 from '../../../images/contacts/contacts-item-3.svg';

const ContactsDescription = () => (
  <div className="contactsDescription">
    <div className="contactsDescription__wrapper container">
      <div className="contactsDescription__items">
        <div className="contactsDescription__item">
          <Img1 />
          <div className="contactsDescription__item-title title-3 black">
            Уральск
          </div>
          <p className="contactsDescription__item-text text-1 gray">
            Республика Казахстан, г. Уральск,
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            ул. Шаруашылык, 15
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            +7 (771) 949 90 11
          </p>
        </div>
        <div className="contactsDescription__item">
          <Img2 />
          <div className="contactsDescription__item-title title-3 black">
            Аксай
          </div>
          <p className="contactsDescription__item-text text-1 gray">
            Республика Казахстан, г. Аксай,
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            к. «Коктем» 11
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            +7 (71133) 39 7 20
          </p>
        </div>
        <div className="contactsDescription__item">
          <Img3 />
          <div className="contactsDescription__item-title title-3 black">
          Akbarys Protection
          </div>
          <p className="contactsDescription__item-text text-1 gray">
            Республика Казахстан, г. Нур-Султан, 92-я, 5
          </p>
          <p className="contactsDescription__item-text text-1 gray"></p>
          <p className="contactsDescription__item-text text-1 gray">
          +7 (7172) 67‒70‒39
          </p>
        </div>
      </div>
    </div>
    <div className="line"></div>
  </div>
);

export default ContactsDescription;
