function disableScroll() {
  const { body } = document;
  const pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = String(pagePosition);
  body.style.top = `${-pagePosition}px`;
}
function enableScroll(header: HTMLElement) {
  const { body } = document;
  const pagePosition = body.dataset.position ? parseInt(body.dataset.position, 10) : 0;
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data-position');
  setTimeout(() => {
    if (header.classList.contains('hide')) {
      header.classList.remove('hide');
      header.classList.add('show');
    }
  }, 20);
}

export const closeBurgerMenu = (
  e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>, isAdditionalHeader: boolean,
) => {
  const headers = document?.querySelectorAll('header');
  const header = isAdditionalHeader ? headers[1] : headers[0];
  const logoImgs = document?.querySelectorAll('.header__logo-image');
  logoImgs.forEach((img) => img.classList.remove('hide'));
  header?.classList.remove('active');
  header?.querySelector('.header__wrapper')?.classList.remove('active');
  enableScroll(header);
};

export const openBurgerMenu = (
  e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>, isAdditionalHeader: boolean,
) => {
  const headers = document?.querySelectorAll('header');
  const header = isAdditionalHeader ? headers[1] : headers[0];
  const isActiveHeader = header?.classList.contains('active');
  if (!isActiveHeader) {
    const logoImgs = document?.querySelectorAll('.header__logo-image');
    logoImgs.forEach((img) => img.classList.add('hide'));
    header?.classList.add('active');
    header?.querySelector('.header__wrapper')?.classList.add('active');
    disableScroll();
  } else {
    closeBurgerMenu(e, isAdditionalHeader);
  }
};
