import SwiperCore from 'swiper';

const showPaginationBackground = (swiper: SwiperCore, slides: Element[]) => {
  const currentSlide = slides[swiper.realIndex].querySelector(
    '.h2sAboutSft__digit',
  );
  if (currentSlide) {
    currentSlide.textContent = `0${swiper.realIndex + 1}`;
  }
};

export default showPaginationBackground;
