import "./contacts.description.scss"

import * as React from "react"

import Img1 from "../../../images/contacts/contacts-item-1.svg"
import Img2 from "../../../images/contacts/contacts-item-2.svg"
import Img3 from "../../../images/contacts/contacts-item-3.svg"

const ContactsDescription = () => (
  <div className="contactsDescription">
    <div className="contactsDescription__wrapper container">
      <div className="contactsDescription__items">
        <div className="contactsDescription__item">
          <Img1 />
          <div className="contactsDescription__item-title title-3 black">
            Головной офис Акбарыс
          </div>
          <p className="contactsDescription__item-text text-1 gray">
            Республика Казахстан, г. Уральск,
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            ул. Шаруашылык, 15
          </p>
          <p className="contactsDescription__item-text mt text-1 gray">
            +7 (771) 949 90 11
          </p>
          <p className="contactsDescription__item-text mt text-1 gray">
            info@akbarys.kz
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            akbarys.kz
          </p>
        </div>
        <div className="contactsDescription__item">
          <Img3 />
          <div className="contactsDescription__item-title title-3 black">
            Akbarys Protection
          </div>
          <p className="contactsDescription__item-text text-1 gray">
            Республика Казахстан, г. Нур-Султан,
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            92-я, 5, р-н Алматы
          </p>
          <p className="contactsDescription__item-text text-1 mt gray">
            +7 (7172) 67‒70‒39
          </p>
          <p className="contactsDescription__item-text text-1 gray">
            +7 (7172) 67‒70‒38
          </p>
          <p className="contactsDescription__item-text text-1 mt gray">
            akbarys-protection.kz
          </p>
        </div>
      </div>
    </div>
    <div className="line"></div>
  </div>
)

export default ContactsDescription
