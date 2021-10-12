export const handleScroll = (additionalHeader: any, currentPage: any) => {
  if (additionalHeader) {
    additionalHeader.classList.add('header_transparent');
  }
  let prevScrollPosition = 0;
  const preview = document.querySelector('.preview') as HTMLElement;
  document.addEventListener('scroll', () => {
    if (currentPage !== '') {
      const currentScrollPosition = window.pageYOffset;
      if (additionalHeader && preview) {
        if (prevScrollPosition > currentScrollPosition) {
          additionalHeader.classList.remove('hide');
          additionalHeader.classList.add('show');
        } else {
          additionalHeader.classList.remove('show');
          additionalHeader.classList.add('hide');
        }
        if (preview.clientHeight > window.pageYOffset) {
          additionalHeader.classList.remove('header_dark');
        } else {
          additionalHeader.classList.add('header_dark');
        }
        const baseHeight = preview.clientHeight;
        const baseLine = baseHeight - baseHeight * 0.8 > window.pageYOffset;
        if (preview && baseLine) {
          additionalHeader.classList.add('header_preview');
        } else {
          additionalHeader.classList.remove('header_preview');
        }
        prevScrollPosition = window.pageYOffset;
      }
    }
  });
};
