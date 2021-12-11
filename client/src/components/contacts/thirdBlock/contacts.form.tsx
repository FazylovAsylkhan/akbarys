// import { handlerSubmit, resetInput } from "../../../utils/mainUtils"
import * as React from "react"
import { FC, useEffect } from "react"
import { Link } from "gatsby"

import { formValidate } from "../../../utils/validation"
import "./contacts.form.scss"

function getSubjectData(name: string) {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, "0")
  const mm = String(today.getMonth() + 1).padStart(2, "0") // January is 0!
  const yyyy = today.getFullYear()
  const currentDate = `${dd}/${mm}/${yyyy}`

  const hour =
    today.getHours() > 12
      ? today.getHours() - 12
      : today.getHours() < 10
      ? `0${today.getHours()}`
      : today.getHours()
  const minute =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
  const currentTime = `${hour}:${minute}`

  return `Сайт Akbarys. Сообщение от ${name}. Дата: ${currentDate} / ${currentTime}`
}

function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault()
  const form = document.querySelector(".contactsForm__form") as HTMLFormElement
  const formData = new FormData()
  const email = document.querySelector(
    'input[name="email"]'
  ) as HTMLInputElement
  const name = document.querySelector('input[name="name"]') as HTMLInputElement
  const message = document.querySelector(
    'textarea[name="message"]'
  ) as HTMLInputElement
  const isValidForm  = formValidate(form)
  if (email && name && isValidForm) {
    formData.append("name", name.value)
    formData.append("email", email.value)
    formData.append("message", message.value)
    form.classList.add("sending")
    fetch("https://akbarys.kz/email.php", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        form.reset()
        form.classList.remove("sending")
        const alert = document.querySelector(
          ".contactsForm__alert"
        ) as HTMLDivElement
        const header = document.querySelector("header") as HTMLElement
        header.classList.remove("show")
        alert.nextElementSibling?.classList.add("show")
        document.body.style.overflowY = "hidden"
        alert.nextElementSibling?.addEventListener("click", e => {
          const elementTarget = e.target as HTMLDivElement
          if (elementTarget.classList.contains("contactsForm__alert-button")) {
            alert.nextElementSibling?.classList.remove("show")
            document.body.style.overflowY = ""
          }
        })
      })
      .catch(error => {
        form.classList.remove("sending")
        form.reset()
        const alert = document.querySelector(
          ".contactsForm__alert"
        ) as HTMLDivElement
        const header = document.querySelector("header") as HTMLElement
        header.classList.remove("show")
        alert.classList.add("show")
        document.body.style.overflowY = "hidden"
        alert.addEventListener("click", e => {
          const elementTarget = e.target as HTMLDivElement
          if (elementTarget.classList.contains("contactsForm__alert-button")) {
            alert.classList.remove("show")
            document.body.style.overflowY = ""
          }
        })
      })
  }
}
interface ContactsFormProps {
  content: any
}

const ContactsForm: FC<ContactsFormProps> = ({ content }) => {
  const { title, subtitle, fieldNames, politica, btnText, popup } = content
  useEffect(() => {
    const checkboxWrapperClass = "contactsForm__form-checkbox"
    const checkboxBtnClass = "contactsForm__form-checkbox-button"
    const checkboxBtnClassActive = "contactsForm__form-checkbox-button_active"
    const checkboxInputClass = "contactsForm__form-checkbox-input"
    const checkboxtextClass = "contactsForm__form-checkbox-text"
    const checkboxWrapper = document.querySelector(`.${checkboxWrapperClass}`)
    const checkboxInput = document.querySelector(
      `.${checkboxInputClass}`
    ) as HTMLInputElement
    const checkboxBtn = checkboxWrapper?.querySelector(
      `.${checkboxBtnClass}`
    ) as HTMLElement
    checkboxWrapper?.addEventListener("click", e => {
      e.stopPropagation()
      const element = e.target as HTMLElement
      if (
        element.classList[0] === checkboxBtnClass ||
        element.classList[0] === checkboxtextClass
      ) {
        checkboxBtn.classList.contains(checkboxBtnClassActive)
          ? checkboxBtn.classList.remove(checkboxBtnClassActive)
          : checkboxBtn.classList.add(checkboxBtnClassActive)
        checkboxInput.checked
          ? (checkboxInput.checked = false)
          : (checkboxInput.checked = true)
      }
    })
  }, [])

  return (
    <div className="contactsForm ">
      <div className="container">
        <div className="contactsForm__wrapper">
          <form
            className="contactsForm__form"
            onSubmit={e => e.preventDefault()}
          >
            <h3 className="contactsForm__form-title title-1">{title}</h3>
            <p className="contactsForm__form-description text-1 gray">
              {subtitle}
            </p>
            <div className="contactsForm__form-items">
              <div className="contactsForm__form-item">
                <label
                  htmlFor="contactsFormName"
                  className="contactsForm__form-label title-3 black"
                >
                  {fieldNames[0]}
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
                  {fieldNames[1]}
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
                  {fieldNames[2]}
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
                  <span className="contactsForm__form-checkbox-text text-1 gray">
                    {politica.text[0]}{" "}
                    <Link
                      to={politica.link}
                      className="contactsForm__form-politica-link blue"
                      onClick={e => e.stopPropagation()}
                    >
                      {politica.text[1]}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="button contactsForm__form-button"
              // onClick={() => handlerSubmit()}
              onClick={e => handleSubmit(e)}
            >
              {btnText}
            </button>
          </form>
          <div className="contactsForm__alert">
            <div className="contactsForm__alert-content">
              <div className="contactsForm__alert-title title-1 black">
                {popup.error.title}
              </div>
              <div className="contactsForm__alert-description text-1 gray">
                {popup.error.description}
              </div>
              <div className="contactsForm__alert-button button">
                {popup.error.btnText}
              </div>
            </div>
          </div>
          <div className="contactsForm__alert">
            <div className="contactsForm__alert-content">
              <div className="contactsForm__alert-title title-1 black">
                {popup.success.title}
              </div>
              <div className="contactsForm__alert-description text-1 gray">
                {popup.success.description}
              </div>
              <div className="contactsForm__alert-button button">
                {popup.success.btnText}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default ContactsForm
