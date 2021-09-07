// import { handlerSubmit, resetInput } from "../../../utils/mainUtils"
import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'gatsby';

import { formValidate } from '../../../utils/validation';
import './contacts.form.scss';


async function handlerSubmit() {
  const form = document.querySelector('.contactsForm__form') as HTMLFormElement;
  const error = formValidate(form as HTMLElement);

  const formDate = new FormData(form);
  if (error === 0) {
    form.classList.add('sending');
    const response = await fetch('sendmail.php', {
      method: 'POST',
      body: formDate,
    });
    if (response.ok) {
      const result = await response.json();
      // const resultAfterSeinding = result.message;
      form.reset();
      form.classList.remove('sending');
      const alert = document.querySelector(
        '.contactsForm__alert',
      ) as HTMLDivElement;
      const header = document.querySelector('header') as HTMLElement;
      header.classList.remove('show');
      alert.nextElementSibling?.classList.add('show');
      document.body.style.overflowY = 'hidden';
      alert.nextElementSibling?.addEventListener('click', (e) => {
        const elementTarget = e.target as HTMLDivElement;
        if (elementTarget.classList.contains('contactsForm__alert-button')) {
          alert.nextElementSibling?.classList.remove('show');
          document.body.style.overflowY = '';
        }
      });
    } else {
      // const resultAfterSeinding = `${response.status}: ${response.statusText}`;
      form.classList.remove('sending');
      form.reset();
      const alert = document.querySelector(
        '.contactsForm__alert',
      ) as HTMLDivElement;
      const header = document.querySelector('header') as HTMLElement;
      header.classList.remove('show');
      alert.classList.add('show');
      document.body.style.overflowY = 'hidden';
      alert.addEventListener('click', (e) => {
        const elementTarget = e.target as HTMLDivElement;
        if (elementTarget.classList.contains('contactsForm__alert-button')) {
          alert.classList.remove('show');
          document.body.style.overflowY = '';
        }
      });
    }
  }
}

const ContactsForm = () => {
  useEffect(() => {
    const checkboxWrapperClass = 'contactsForm__form-checkbox';
    const checkboxBtnClass = 'contactsForm__form-checkbox-button';
    const checkboxBtnClassActive = 'contactsForm__form-checkbox-button_active';
    const checkboxInputClass = 'contactsForm__form-checkbox-input';
    const checkboxtextClass = 'contactsForm__form-checkbox-text';
    const checkboxWrapper = document.querySelector(`.${checkboxWrapperClass}`);
    const checkboxInput = document.querySelector(
      `.${checkboxInputClass}`,
    ) as HTMLInputElement;
    const checkboxBtn = checkboxWrapper?.querySelector(
      `.${checkboxBtnClass}`,
    ) as HTMLElement;
    checkboxWrapper?.addEventListener('click', (e) => {
      e.stopPropagation();
      const element = e.target as HTMLElement;
      if (
        element.classList[0] === checkboxBtnClass
        || element.classList[0] === checkboxtextClass
      ) {
        checkboxBtn.classList.contains(checkboxBtnClassActive)
          ? checkboxBtn.classList.remove(checkboxBtnClassActive)
          : checkboxBtn.classList.add(checkboxBtnClassActive);
        checkboxInput.checked
          ? (checkboxInput.checked = false)
          : (checkboxInput.checked = true);
      }
    });
  }, []);

  return (
    <div className="contactsForm ">
      <div className="container">
        <div className="contactsForm__wrapper">
          <form
            action="#"
            className="contactsForm__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="contactsForm__form-title title-1">Форма обратной связи</h3>
            <p className="contactsForm__form-description text-1 gray">
              Заполните форму и мы с Вами свяжемся!
            </p>
            <div className="contactsForm__form-items">
              <div className="contactsForm__form-item">
                <label
                  htmlFor="contactsFormName"
                  className="contactsForm__form-label title-3 black"
                >
                  Имя:
                </label>
                <input
                  id="contactsFormName"
                  name="name"
                  type="text"
                  className="contactsForm__form-input text-1 require"
                  // onInput={e => resetInput(e)}
                />
              </div>
              <div className="contactsForm__form-item">
                <label
                  htmlFor="contactsFormEmail"
                  className="contactsForm__form-label title-3 black"
                >
                  Email:
                </label>
                <input
                  id="contactsFormEmail"
                  type="text"
                  name="email"
                  className="contactsForm__form-input text-1 email require"
                  // onInput={e => resetInput(e)}
                />
              </div>
              <div className="contactsForm__form-item">
                <label
                  htmlFor="contactsFormMessage"
                  className="contactsForm__form-label title-3 black"
                >
                  Сообщение:
                </label>
                <textarea
                  id="contactsFormMessage"
                  name="message"
                  className="contactsForm__form-area text-1 require"
                  // onInput={e => resetInput(e)}
                />
              </div>
              <div className="contactsForm__form-item">
                <div className="contactsForm__form-checkbox">
                  <input
                    type="checkbox"
                    name="agreement"
                    defaultChecked
                    id="contactsFormAgreement"
                    className="contactsForm__form-checkbox-input require"
                  />
                  <div className="contactsForm__form-checkbox-button contactsForm__form-checkbox-button_active"></div>
                  <span className="contactsForm__form-checkbox-text">
                    Я даю свое согласие на обработку персональных данных в
                    соответствии с{' '}
                    <Link
                      to="/politics"
                      className="contactsForm__form-politica-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      политикой конфидециальности
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="button contactsForm__form-button"
              onClick={() => handlerSubmit()}
            >
              Отправить
            </button>
          </form>
          <div className="contactsForm__alert">
            <div className="contactsForm__alert-content">
              <div className="contactsForm__alert-title title-1 black">
                Ошибка!
              </div>
              <div className="contactsForm__alert-description text-1 gray">
                Что-то пошло не так... Попробуйте позже.
              </div>
              <div className="contactsForm__alert-button button">Ок</div>
            </div>
          </div>
          <div className="contactsForm__alert">
            <div className="contactsForm__alert-content">
              <div className="contactsForm__alert-title title-1 black">
                Спасибо!
              </div>
              <div className="contactsForm__alert-description text-1 gray">
                Ваше сообщение было успешно отправлено!
              </div>
              <div className="contactsForm__alert-button button">Ок</div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ContactsForm;
