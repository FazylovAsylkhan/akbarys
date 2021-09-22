import * as React from 'react';
import LogoProtection from '../../../images/akbarysProtection.svg';
import './akbarys.protection.scss';

const AkbarysProtection = () => (
  <div className="akbarysProtection">
    <div className="container">
      <div className="akbarysProtection__wrapper">
        <div className="akbarysProtection__content">
          <h2 className="akbarysProtection__content-title title-1 white">
            Akbarys Protection
          </h2>
          <p className="akbarysProtection__content-text text-1 white">
            В рамках реализации стратегии по развитию отечественного рынка
            производителей товаров необходимых в нефтегазовой отрасли, под
            руководством и инициативе ТОО Тенгизшевройл, а также поддержке
            компании Карачаганак Петролеум Оперейтинг б.в. Казахстанская
            компания «Akbarys» инвестировала в создание нового предприятия и
            строительство завода по производству эвакуационных спасательных
            капюшонов NH15-K.
          </p>
          <p className="akbarysProtection__content-text text-1 white">
            9 августа 2019 г . в г. Нур-Султан состоялось торжественное открытие
            нового завода «Akbarys Protection» по производству эвакуационных
            спасательных капюшонов NH15-K.
          </p>
          <p className="akbarysProtection__content-text text-1 white">
            Мощность завода, на котором будут применены новые инновационные
            технологии, составит более 40 000 шт. масок в год, тем самым
            обеспечив местных заказчиков качественной продукцией мирового уровня
            с возможностью экспорта в страны прикаспийского региона.
          </p>
          <p className="akbarysProtection__content-text text-1 white">
            Общая сумма инвестиций в проект, который стартовал в 2017 году,
            составила около 1 млрд. тенге.
          </p>
          <a
            className="button akbarysProtection__content-button blue"
            style={{ background: '#fff' }}
            href="https://akbarys-protection.kz/ru"
          >
            Перейти на сайт
          </a>
        </div>
        <div className="akbarysProtection__logo">
          <LogoProtection />
        </div>
      </div>
    </div>
  </div>
);

export default AkbarysProtection;
