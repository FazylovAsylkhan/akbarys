export const showAdditionalMenu = (additionalHeader: any, currentPage: any) => {
  if (additionalHeader) {
    additionalHeader.classList.add("header_transparent")
  }
  let prevScrollPosition = 0
  document.addEventListener("scroll", () => {
    if (currentPage !== "") {
      const currentScrollPosition = window.pageYOffset
      const heightScreen = document.documentElement.clientHeight
      if (additionalHeader) {
        if (
          prevScrollPosition > currentScrollPosition &&
          !document.querySelector(".pressCenterNews") &&
          !document.querySelector(".page404") &&
          !document.querySelector(".politics")
        ) {
          additionalHeader.classList.remove("hide")
          additionalHeader.classList.add("show")
        } else {
          additionalHeader.classList.remove("show")
          additionalHeader.classList.add("hide")
        }
        if (
          heightScreen > window.pageYOffset &&
          !document.querySelector(".pressCenterNews") &&
          !document.querySelector(".page404") &&
          !document.querySelector(".politics")
        ) {
          additionalHeader.classList.remove("header_dark")
          additionalHeader.classList.add("header_transparent")
        } else {
          additionalHeader.classList.add("header_dark")
          additionalHeader.classList.remove("header_transparent")
        }
        prevScrollPosition = window.pageYOffset
      }
    }
  })
}
