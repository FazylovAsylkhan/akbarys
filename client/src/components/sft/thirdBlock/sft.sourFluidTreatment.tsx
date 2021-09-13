import './sft.sourFluidTreatment.scss';

import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useEffect } from 'react';

import TIP_IMG from '../../../images/tip.svg';

const SftSourFluidTreatment = () => {
  const contentTips = [
    'Азотная касета',
    'Рециркуляционный насос',
    'Линия циркуляции',
    'Жидкость с содержанием сероводорода',
    'Очищенные пары',
    'Резервуар для хранения пластовых вод',
    'Вентиляционная линия ёмкости',
    'Линия вентиляции',
    'Скруббер',
  ];
  const tipsTexts = contentTips.map((content, i) => (
    <div
      key={`keyText-${i}`}
      className={`sourFluidTreatment__tip-text sourFluidTreatment__tip-text-${i} text-9`}
    >
      <span>{content}</span>
    </div>
  ));
  const tipsImgs = new Array(9)
    .fill(1)
    .map((e, i) => (
      <TIP_IMG
        key={`keyImg-${i}`}
        className={`sourFluidTreatment__tip-img sourFluidTreatment__tip-img-${i}`}
      />
    ));
  useEffect(() => {
    const img = document.querySelector('.sourFluidTreatment');
    const tipsTextElements = document.querySelectorAll(
      '.sourFluidTreatment__tip-text',
    );
    let numberTip = -1;
    img?.addEventListener('mouseover', (e) => {
      const element = e.target as HTMLElement;
      if (element.classList.contains('sourFluidTreatment__tip-img')) {
        tipsTextElements.forEach((tipElement) => tipElement.classList.remove('show'));
        numberTip = Number(element.classList[1].slice(-1));
        const textHtmlElement = tipsTextElements[numberTip];
        textHtmlElement.classList.add('show');
      } else if (tipsTextElements[numberTip] === e.target) {
        true;
      } else {
        tipsTextElements.forEach((tipElement) => tipElement.classList.remove('show'));
        numberTip = -1;
      }
    });
  }, []);

  return (
    <div>
      <div className="sourFluidTreatment">
        <div className="container ">
          <div className="sourFluidTreatment__content">
            <h2 className="sourFluidTreatment__content-title title-2 black left">
              Технология предусматривает орошение газового потока специальными
              растворами
            </h2>
            <p className="sourFluidTreatment__content-description text-1 gray right">
              Метод основан на орошении отходящего газа целевыми растворами, при
              максимально развитом контакте жидкости с попутными примесями газа
              и более интенсивном смешивании очищаемого газа с жидкостью. В
              результате токсичный газ полностью растворяется в жидкости.
            </p>
          </div>
          <div className="sourFluidTreatment__wrapper">
            <StaticImage
              className="sourFluidTreatment__img"
              src="../../../images/sft/sourFluidTreatment.jpg"
              alt="sourFluidTreatment"
              placeholder="dominantColor"
              quality={95}
              formats={['auto', 'webp', 'avif']}
            />
            {tipsImgs}
            {tipsTexts}
          </div>
          <div className="sourFluidTreatment__content">
            <p className="sourFluidTreatment__content-description text-1 gray right">
              Во время хранения пластовой воды в герметичных емкостях, пары
              газов испаряются и выходят в вентиляционную линию емкости наружу,
              линия в свою очередь соединяется со скруббером, где и происходит
              нейтрализация сероводорода, а на выходе из скруббера выходит газ
              без содержания сероводорода.
            </p>
            <p className="sourFluidTreatment__content-description text-1 gray right">
              В емкостях всегда поддерживается позитивное давление во избежание
              создания вакуума в емкости и засасывания воздуха из вне. Давление
              периодически поддерживается газообразным азотом, тем самым
              создавая безопасную "азотную подушку" с содержанием кислорода
              внутри емкости.
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SftSourFluidTreatment;
