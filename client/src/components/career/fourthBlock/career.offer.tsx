import * as React from "react"
import { FC, useEffect } from "react"
import { Link } from "gatsby"
import SVGImage from "../../../data/images/download.svg"

import { formValidate } from "../../../utils/validation"
import "./career.offer.scss"

function handleSubmit(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  uriState: string
) {
  e.preventDefault()
  const form = document.querySelector(".careerForm__form") as HTMLFormElement
  const formData = new FormData()
  const email = document.querySelector(
    'input[name="email"]'
  ) as HTMLInputElement
  const name = document.querySelector('input[name="name"]') as HTMLInputElement
  const message = document.querySelector(
    'textarea[name="message"]'
  ) as HTMLInputElement
  const file = document.querySelector(
    'input[name="file"]'
  ) as HTMLInputElement
  
  const isValidForm = formValidate(form)
  if (email && name && isValidForm) {
    formData.append("name", name.value)
    formData.append("email", email.value)
    formData.append("message", message.value)
    formData.append("mail_file", uriState)
    form.classList.add("sending")
    fetch("https://akbarys.kz/email.php", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        console.log(response);
        
        form.reset()
        form.classList.remove("sending")
        const alert = document.querySelector(
          ".careerForm__alert"
        ) as HTMLDivElement
        const header = document.querySelector("header") as HTMLElement
        header.classList.remove("show")
        alert.nextElementSibling?.classList.add("show")
        document.body.style.overflowY = "hidden"
        alert.nextElementSibling?.addEventListener("click", e => {
          const elementTarget = e.target as HTMLDivElement
          if (elementTarget.classList.contains("careerForm__alert-button")) {
            alert.nextElementSibling?.classList.remove("show")
            document.body.style.overflowY = ""
          }
        })
      })
      .catch(error => {
        console.log(error);
        form.classList.remove("sending")
        form.reset()
        const alert = document.querySelector(
          ".careerForm__alert"
        ) as HTMLDivElement
        const header = document.querySelector("header") as HTMLElement
        header.classList.remove("show")
        alert.classList.add("show")
        document.body.style.overflowY = "hidden"
        alert.addEventListener("click", e => {
          const elementTarget = e.target as HTMLDivElement
          if (elementTarget.classList.contains("careerForm__alert-button")) {
            alert.classList.remove("show")
            document.body.style.overflowY = ""
          }
        })
      })
  }
}
interface CareerFormProps {
  content: any
}

const CareerForm: FC<CareerFormProps> = ({ content }) => {
  const { title, subtitle, fieldNames, politica, btnText, popup } = content
  const [uriState, setUriState] = React.useState("")
  useEffect(() => {
    const checkboxWrapperClass = "careerForm__form-checkbox"
    const checkboxBtnClass = "careerForm__form-checkbox-button"
    const checkboxBtnClassActive = "careerForm__form-checkbox-button_active"
    const checkboxInputClass = "careerForm__form-checkbox-input"
    const checkboxtextClass = "careerForm__form-checkbox-text"
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
    const changeHandler = (e: Event) => {
      const inputFile = e.target as HTMLInputElement
      const preview = document.querySelector(
        "#careerFormFilePreview"
      ) as HTMLInputElement
      if (inputFile.files && preview) {
        const file = inputFile.files[0]
        if (file) {
          preview.value = file.name
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = event => {
            const json = JSON.stringify({ dataURL: reader.result })
            const fileURL = JSON.parse(json).dataURL
            setUriState(fileURL)
            // downloadURI(fileURL, 'asylkhan')
          }
        } else {
          preview.value = ""
        }
      }
    }
    const triggerInput = () => {
      const inputFile = document.getElementById(
        "careerFormFile"
      ) as HTMLInputElement
      inputFile.click()
      inputFile.addEventListener("change", e => changeHandler(e))
    }
    document
      .querySelector(".careerForm__form-file-button")
      ?.addEventListener("click", () => triggerInput())
  }, [])

  return (
    <div className="careerForm ">
      <div className="container">
        <div className="careerForm__wrapper">
          <form
            action="#"
            className="careerForm__form"
            encType="multipart/form-data"
            onSubmit={e => e.preventDefault()}
          >
            <h3 className="careerForm__form-title title-1">{title}</h3>
            <p className="careerForm__form-description text-1 gray">
              {subtitle}
            </p>
            <div className="careerForm__form-items">
              <div className="careerForm__form-item">
                <label
                  htmlFor="careerFormName"
                  className="careerForm__form-label title-3 black"
                >
                  {fieldNames[0]}
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
                  {fieldNames[1]}
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
                  {fieldNames[2]}
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
                  {fieldNames[3]}
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
                  <span className="careerForm__form-checkbox-text text-1 gray">
                    {politica.text[0]}{" "}
                    <Link
                      to={politica.link}
                      className="careerForm__form-politica-link text-1 blue"
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
              className="button careerForm__form-button"
              onClick={e => handleSubmit(e, uriState)}
            >
              {btnText}
            </button>
          </form>
          <div className="careerForm__alert">
            <div className="careerForm__alert-content">
              <div className="careerForm__alert-title title-1 black">
                {popup.error.title}
              </div>
              <div className="careerForm__alert-description text-1 gray">
                {popup.error.description}
              </div>
              <div className="careerForm__alert-button button">
                {popup.error.btnText}
              </div>
            </div>
          </div>
          <div className="careerForm__alert">
            <div className="careerForm__alert-content">
              <div className="careerForm__alert-title title-1 black">
                {popup.success.title}
              </div>
              <div className="careerForm__alert-description text-1 gray">
                {popup.success.description}
              </div>
              <div className="careerForm__alert-button button">
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

export default CareerForm
