import SwiperCore from 'swiper';

import ArrowDark from '../static/arrow-dark.svg';
import ArrowLight from '../static/arrow-light.svg';

function isSpecialScreen(pageSlider: SwiperCore) {
  if (
    pageSlider.realIndex === 3
    || pageSlider.realIndex === 4
    || pageSlider.realIndex === 6
    // || pageSlider.realIndex === pageSlider.slides.length - 1
  ) return true;
  return false;
}

// export function setScrollType(swiper: SwiperCore) {
//   const pageSlider = swiper;
//   const pagination = document.body.querySelector('.swiper-pagination');
//   if (pagination?.classList.contains('free')) {
//     pagination.classList.remove('free');
//     pageSlider.params.freeMode = false;
//   }
//   for (let index = 0; index < pageSlider.slides.length; index += 1) {
//     const pageSlide = pageSlider.slides[index];
//     const pageSlideContent = pageSlide.querySelector(
//       '.screen__content',
//     ) as HTMLElement;
//     if (pageSlideContent) {
//       const pageSlideContentHeight = pageSlideContent.offsetHeight;
//       if (pageSlideContentHeight > window.innerHeight && pagination) {
//         pagination.classList.add('free');
//         pageSlider.params.freeMode = true;
//         break;
//       }
//     }
//   }
// }

export function changeMenuHeader(
  swiper: SwiperCore,
  paginationElement: Element | null,
) {
  if (isSpecialScreen(swiper) && paginationElement) {
    paginationElement.classList.add('dark');
    document.querySelector('header')?.classList.add('header_dark');
  } else if (
    !isSpecialScreen(swiper)
    && paginationElement
  ) {
    paginationElement.classList.remove('dark');
    document.querySelector('header')?.classList.remove('header_dark');
  }
}

export function initNav(swiper: SwiperCore, name: string) {
  const projectsSliderWrapper = swiper.el.querySelector('.swiper-wrapper');
  const projectsSliderPagination = swiper.el.querySelector('.swiper-pagination');
  projectsSliderPagination?.classList.add(`${name}__pagination`);
  projectsSliderWrapper?.classList.add(`${name}__slider-wrapper`);
  const buttonPrev = swiper.el.querySelector(
    '.swiper-button-prev',
  ) as HTMLElement;
  const buttonNext = swiper.el.querySelector(
    '.swiper-button-next',
  ) as HTMLElement;
  buttonPrev?.classList.add(`${name}__button-prev`);
  buttonNext?.classList.add(`${name}__button-next`);
  const imgLeft = document.createElement('img');
  const imgRight = document.createElement('img');
  imgLeft.src = ArrowLight;
  imgLeft.alt = 'arrow';
  imgLeft.classList.add('left-arrow');
  imgRight.src = ArrowDark;
  imgRight.alt = 'arrow';
  imgRight.classList.add('right-arrow');

  buttonNext.appendChild(imgLeft);
  buttonPrev.appendChild(imgRight);
}

export function validationNav(swiper: SwiperCore) {
  const imgLeft = swiper.el.querySelector('.left-arrow') as HTMLImageElement;
  const imgRight = swiper.el.querySelector('.right-arrow') as HTMLImageElement;

  if (swiper.realIndex === swiper.slides.length - 1) {
    imgLeft.src = ArrowLight;
    imgRight.src = ArrowDark;
  } else if (swiper.realIndex === 0) {
    imgLeft.src = ArrowDark;
    imgRight.src = ArrowLight;
  } else {
    imgLeft.src = ArrowDark;
    imgRight.src = ArrowDark;
  }
}

export function showPagination(swiper: SwiperCore) {
  const currentNumberSlide = swiper.el.querySelector(
    '.swiper-pagination-current',
  ) as HTMLImageElement;
  const totalNumberSlide = swiper.el.querySelector(
    '.swiper-pagination-total',
  ) as HTMLImageElement;

  currentNumberSlide.textContent = `${`${swiper.realIndex + 1}`}`;
  totalNumberSlide.textContent = `${`${swiper.slides.length}`}`;
}

function validateInputs() {
  const form = document.body.querySelectorAll('.footer__form-input');
  const nameInput = form[0] as HTMLInputElement;
  const emailInput = form[1] as HTMLInputElement;
  const messageInput = form[2] as HTMLInputElement;
  const regExpName = /^([A-Za-zЁА-яё][\sA-Za-zЁА-яё]{2,30})$/;
  const regExpEmail = /^[\d.A-Za-z]+@[\da-z]+\.[a-z]+$/;
  const isNotValidName = !regExpName.test(nameInput.value) || nameInput.value === '';
  const isNotValidEmail = !regExpEmail.test(emailInput.value) || emailInput.value === '';
  const isNotValidMessage = messageInput.value === '';
  if (isNotValidName) {
    nameInput.value = '';
    nameInput.placeholder = 'Введите ФИО*';
    nameInput.classList.add('error');
  }
  if (isNotValidEmail) {
    emailInput.value = '';
    emailInput.placeholder = 'Введите почту*';
    emailInput.classList.add('error');
  }
  if (isNotValidMessage) {
    messageInput.value = '';
    messageInput.placeholder = 'Введите сообщение*';
    messageInput.classList.add('error');
  }
}
export function handlerSubmit(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
): void {
  e.preventDefault;
  validateInputs();
}

export function resetInput(
  e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
) {
  const input = e.target as HTMLInputElement;
  input.classList.remove('error');
}
export function resetEffectsSlides(
  sliderPage: Element,
  wrapperNames: string[],
) {
  wrapperNames.forEach((wrapperName) => {
    if (wrapperName) {
      const elements = sliderPage.querySelectorAll(`.${wrapperName}`);
      if (elements) {
        elements.forEach((element) => element.classList.remove('visible'));
      }
    }
  });
}

export function showText(pageSlider: Element, wrapperClass: string) {
  if (wrapperClass) {
    const wrapperSlideElement = pageSlider.querySelector(`.${wrapperClass}`);
    if (wrapperClass === 'projects__advantages') {
      const slides = pageSlider.querySelectorAll('.projects__slide');
      slides.forEach((slide) => {
        if (slide.classList.contains('swiper-slide-active')) {
          const wrapperSlide = slide.querySelector(`.${wrapperClass}`);
          wrapperSlide?.classList.add('visible');
        }
      });
    } else if (wrapperClass === 'partners__slide-item-wrapper') {
      setTimeout(() => {
        const slides = pageSlider.querySelectorAll('.partners__slide');
        slides.forEach((slide) => {
          if (slide.classList.contains('swiper-slide-active')) {
            const wrapperSlide = slide.querySelector(`.${wrapperClass}`);
            wrapperSlide?.classList.add('visible');
          }
        });
      }, 800);
    } else {
      wrapperSlideElement?.classList.add('visible');
    }
  }
}

export function hideSlides(
  slides: Element[],
  swiper: SwiperCore,
  classWrapper: string,
) {
  const currentSlide = slides[swiper.realIndex];
  const prevSlide = slides[swiper.previousIndex];
  const nextSlide = slides[swiper.realIndex + 1];

  const currentWrapper = currentSlide.querySelector(`.${classWrapper}`);
  currentWrapper?.classList.remove('hide');

  if (prevSlide) {
    const prevWrapper = prevSlide.querySelector(`.${classWrapper}`);
    prevWrapper?.classList.add('hide');
  }
  if (nextSlide) {
    const nextWrapper = nextSlide.querySelector(`.${classWrapper}`);
    nextWrapper?.classList.remove('hide');
  }
}

export function showSlide(
  slides: Element[],
  swiper: SwiperCore,
  classWrapper: string,
) {
  slides.forEach((slideElement) => {
    const element = slideElement.querySelector(`.${classWrapper}`);
    if (element) element.classList.remove('visible');
  });
  const wrapper = slides[swiper.realIndex].querySelector(`.${classWrapper}`);
  wrapper?.classList.add('visible');
}
export function setEffects(pageSlider: Element, swiper: SwiperCore) {
  const wrappersName = [
    'akbarys__wrapper',
    'h2s__wrapper',
    'sft__wrapper',
    // 'ppe__wrapper',
    'about__wrapper',
    'projects__advantages',
    'mainDevelopment__wrapper',
    'partners__slide-item-wrapper',
    'career__wrapper',
  ];
  resetEffectsSlides(pageSlider, wrappersName);
  showText(pageSlider, wrappersName[swiper.realIndex]);
}
