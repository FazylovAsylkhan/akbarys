function disableScroll() {
  const body = document.body
  const pagePosition = window.scrollY
  body.classList.add("disable-scroll")
  body.dataset.position = String(pagePosition)
  body.style.top = -pagePosition + 'px'
}
function enableScroll(header: HTMLElement) {
  const body = document.body
  const pagePosition = body.dataset.position ? parseInt(body.dataset.position, 10) : 0;
  body.style.top = 'auto'
  body.classList.remove("disable-scroll")
  window.scroll({top: pagePosition, left: 0})
  body.removeAttribute('data-position')
  setTimeout(() => {
    if (header.classList.contains('hide')) {
      header.classList.remove('hide')
      header.classList.add('show')
    }
  }, 20)
}

export const showBurgerMenu = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>, isAdditionalHeader: boolean
) => {
  const logoImgs = document?.querySelectorAll(".header__logo-image")
  logoImgs.forEach(img => img.classList.toggle("hide"))
  const headers = document?.querySelectorAll("header")
  const header = isAdditionalHeader ? headers[1] : headers[0]
  header?.classList.toggle("active")
  header?.querySelector('.header__wrapper')?.classList.toggle("active")
  const isActiveHeader = header?.classList.contains("active")
  isActiveHeader ? disableScroll() : enableScroll(header) 
}
