import './h2s.iso.scss';

import * as React from 'react';

import ISO_IMG from '../../../images/iso.svg';

const H2sIso = () => (
  <div className="ISO">
    <div className="container">
      <div className="ISO__wrapper">
        <div className="ISO__content">
          <h3 className="ISO__title title-1">Стандарты ISO</h3>
          <p className="ISO__description text-5">
            Уже более 10 лет в компании успешно работают международные стандарты
            ISO 9001 cистема менеджмента качества, ISO 45001 cистема менеджмента
            охраны здоровья и безопасности труда и ISO 14001 cистема
            экологического менеджмента.
          </p>
          <p className="ISO__description text-5">
            Мы прилагаем постоянные усилия для улучшения интегрированного
            управления окружающей средой и сокращения выбросов, эффективного
            управления и контроля основных экологических рисков.
          </p>
        </div>
        <div className="ISO__img">{<ISO_IMG className="ISO__img" />}</div>
      </div>
    </div>
  </div>
);

export default H2sIso;
