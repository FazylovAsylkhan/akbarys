// import { handlerSubmit, resetInput } from "../../../utils/mainUtils"
import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'gatsby';
import SVGImage from '../../../images/download.svg';

import { formValidate } from '../../../utils/validation';
import './career.offer.scss';

// function downloadURI(uri: string, name: string) {
//   const link = document.createElement('a');
//   link.download = name;
//   link.href = uri;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }
function getSubjectData(name: string) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  const currentDate = `${mm}/${dd}/${yyyy}`;

  const hour = today.getHours() > 12 ? today.getHours() - 12 : (today.getHours() < 10 ? `0${today.getHours()}` : today.getHours());
  const minute = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const currentTime = `${hour}:${minute}`;

  return `Сайт Akbarys. Сообщение от ${name}. Дата: ${currentDate} / ${currentTime}`;
}
async function handlerSubmit(uriState: string) {
  const form = document.querySelector('.careerForm__form') as HTMLFormElement;
  const error = formValidate(form as HTMLElement);
  const inputName = document.querySelector('#careerFormName') as HTMLInputElement;
  const inputEmail = document.querySelector('#careerFormEmail') as HTMLInputElement;
  const inputMessage = document.querySelector('#careerFormMessage') as HTMLInputElement;
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
    link: uriState,
  };

  const formDate = new FormData(form);
  if (error === 0) {
    document.body.style.overflowY = 'hidden';
    form.classList.add('sending');
    const response = await fetch('https://6a2gmcyh8c.execute-api.us-east-1.amazonaws.com/development/sendMail', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        bccEmailAddresses: [],
        ccEmailAddresses: [],
        toEmailAddresses: ['fazylov.asylkhan@gmail.com'],
        bodyData: formData,
        bodyCharset: 'UTF-8',
        subjectdata: getSubjectData(formData.name),
        subjectCharset: 'UTF-8',
        sourceEmail: 'web@akbarys.kz',
        replyToAddresses: ['fazylov.asylkhan@gmail.com'],
      }),
    });
    if (response.ok) {
      const result = await response.json();
      // const resultAfterSeinding = result.message;
      form.reset();
      form.classList.remove('sending');
      const alert = document.querySelector(
        '.careerForm__alert',
      ) as HTMLDivElement;
      const header = document.querySelector('header') as HTMLElement;
      header.classList.remove('show');
      alert.nextElementSibling?.classList.add('show');
      alert.nextElementSibling?.addEventListener('click', (e) => {
        const elementTarget = e.target as HTMLDivElement;
        if (elementTarget.classList.contains('careerForm__alert-button')) {
          alert.nextElementSibling?.classList.remove('show');
          document.body.style.overflowY = '';
        }
      });
    } else {
      // const resultAfterSeinding = `${response.status}: ${response.statusText}`;
      form.classList.remove('sending');
      form.reset();
      const alert = document.querySelector(
        '.careerForm__alert',
      ) as HTMLDivElement;
      const header = document.querySelector('header') as HTMLElement;
      header.classList.remove('show');
      alert.classList.add('show');
      document.body.style.overflowY = 'hidden';
      alert.addEventListener('click', (e) => {
        const elementTarget = e.target as HTMLDivElement;
        if (elementTarget.classList.contains('careerForm__alert-button')) {
          alert.classList.remove('show');
          document.body.style.overflowY = '';
        }
      });
    }
  }
}

const CareerForm = () => {
  const [uriState, setUriState] = React.useState('');
  useEffect(() => {
    const checkboxWrapperClass = 'careerForm__form-checkbox';
    const checkboxBtnClass = 'careerForm__form-checkbox-button';
    const checkboxBtnClassActive = 'careerForm__form-checkbox-button_active';
    const checkboxInputClass = 'careerForm__form-checkbox-input';
    const checkboxtextClass = 'careerForm__form-checkbox-text';
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
    const changeHandler = (e: Event) => {
      const inputFile = e.target as HTMLInputElement;
      const preview = document.querySelector(
        '#careerFormFilePreview',
      ) as HTMLInputElement;
      if (inputFile.files && preview) {
        const file = inputFile.files[0];
        if (file) {
          preview.value = file.name;
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            const json = JSON.stringify({ dataURL: reader.result });
            const fileURL = JSON.parse(json).dataURL;
            setUriState(fileURL);
            // downloadURI(fileURL, 'asylkhan')
          };
        } else {
          preview.value = '';
        }
      }
    };
    const triggerInput = () => {
      const inputFile = document.getElementById(
        'careerFormFile',
      ) as HTMLInputElement;
      inputFile.click();
      inputFile.addEventListener('change', (e) => changeHandler(e));
    };
    document
      .querySelector('.careerForm__form-file-button')
      ?.addEventListener('click', () => triggerInput());
  }, []);

  return (
    <div className="careerForm ">
      <div className="container">
        <div className="careerForm__wrapper">
          <form
            action="#"
            className="careerForm__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="careerForm__form-title title-1">Форма заявки</h3>
            <p className="careerForm__form-description text-1 gray">
              Заполните форму и мы с Вами свяжемся!
            </p>
            <div className="careerForm__form-items">
              <div className="careerForm__form-item">
                <label
                  htmlFor="careerFormName"
                  className="careerForm__form-label title-3 black"
                >
                  Имя:
                </label>
                <input
                  id="careerFormName"
                  name="name"
                  type="text"
                  className="careerForm__form-input text-1 require"
                  // onInput={e => resetInput(e)}
                />
              </div>
              <div className="careerForm__form-item">
                <label
                  htmlFor="careerFormEmail"
                  className="careerForm__form-label title-3 black"
                >
                  Email:
                </label>
                <input
                  id="careerFormEmail"
                  type="text"
                  name="email"
                  className="careerForm__form-input text-1 email require"
                  // onInput={e => resetInput(e)}
                />
              </div>
              <div className="careerForm__form-item">
                <label
                  htmlFor="careerFormFile"
                  className="careerForm__form-label title-3 black"
                >
                  Резюме (.pdf):
                </label>
                <input
                  id="careerFormFile"
                  type="file"
                  name="file"
                  accept=".pdf"
                  className="careerForm__form-input text-1 file require"
                  // onInput={e => resetInput(e)}
                />
                <input
                  id="careerFormFilePreview"
                  type="text"
                  name="fileName"
                  readOnly
                  className="careerForm__form-input text-1 none require"
                  // onInput={e => resetInput(e)}
                />
                <button className="careerForm__form-file-button">
                  <SVGImage />
                </button>
              </div>
              <div className="careerForm__form-item">
                <label
                  htmlFor="careerFormMessage"
                  className="careerForm__form-label title-3 black"
                >
                  Сообщение:
                </label>
                <textarea
                  id="careerFormMessage"
                  name="message"
                  className="careerForm__form-area text-1 require"
                  // onInput={e => resetInput(e)}
                />
              </div>
              <div className="careerForm__form-item">
                <div className="careerForm__form-checkbox">
                  <input
                    type="checkbox"
                    name="agreement"
                    defaultChecked
                    id="careerFormAgreement"
                    className="careerForm__form-checkbox-input require"
                  />
                  <div className="careerForm__form-checkbox-button careerForm__form-checkbox-button_active"></div>
                  <span className="careerForm__form-checkbox-text">
                    Я даю свое согласие на обработку персональных данных в
                    соответствии с{' '}
                    <Link
                      to="/politics"
                      className="careerForm__form-politica-link"
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
              className="button careerForm__form-button"
              onClick={() => handlerSubmit(uriState)}
            >
              Отправить
            </button>
          </form>
          <div className="careerForm__alert">
            <div className="careerForm__alert-content">
              <div className="careerForm__alert-title title-1 black">
                Ошибка!
              </div>
              <div className="careerForm__alert-description text-1 gray">
                Что-то пошло не так... Попробуйте позже.
              </div>
              <div className="careerForm__alert-button button">Ок</div>
            </div>
          </div>
          <div className="careerForm__alert">
            <div className="careerForm__alert-content">
              <div className="careerForm__alert-title title-1 black">
                Спасибо!
              </div>
              <div className="careerForm__alert-description text-1 gray">
                Ваше сообщение было успешно отправлено!
              </div>
              <div className="careerForm__alert-button button">Ок</div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CareerForm;
