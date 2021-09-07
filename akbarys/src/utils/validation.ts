function isNotValidEmail(input: HTMLInputElement) {
  const regExpEmail = /^[\d.A-Za-z]+@[\da-z]+\.[a-z]+$/
  return !regExpEmail.test(input.value)
}
function isNotValidName(input: HTMLInputElement) {
  const regExpName = /^([A-Za-zЁА-яё][\sA-Za-zЁА-яё]{2,30})$/
  return !regExpName.test(input.value)
}
function formAddError(input: HTMLElement) {
  input.classList.add("error")
  input.parentElement?.classList.add("error")
}
function formRemoveError(input: HTMLElement) {
  input.classList.remove("error")
  input.parentElement?.classList.remove("error")
}

export function formValidate(form: HTMLElement) {
  let error = 0
  const formReq = form.querySelectorAll(
    ".require"
  ) as unknown as HTMLInputElement[]
  formReq.forEach(field => {
    formRemoveError(field)
    if (field.name === "email") {
      if (isNotValidEmail(field)) {
        formAddError(field)
        error += 1
      }
    } else if (field.type === "checkbox" && field.checked === false) {
      formAddError(field.parentElement as HTMLElement)
      error += 1
    } else if (field.name === "name") {
      if (isNotValidName(field)) {
        formAddError(field)
        error += 1
      }
    } else if (field.name === "message" && field.value === "") {
      formAddError(field)
      error += 1
    }
  })

  return error
}
