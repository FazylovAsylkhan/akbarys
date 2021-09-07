import './ppe.akbarysProtection.scss';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const PpeAkbarysProtection = () => (
  <div className="ppeAkbarysProtection">
    <div className="container">
      <div className="ppeAkbarysProtection__wrapper">
        <div className="ppeAkbarysProtection__content">
          <h2 className="ppeAkbarysProtection__content-title title-1 white">
            Akbarys Protection
          </h2>
          <p className="ppeAkbarysProtection__content-description text-1 white">
            В рамках реализации стратегии по развитию отечественного рынка
            производителей товаров необходимых в нефтегазовой отрасли, под
            руководством и инициативе ТОО Тенгизшевройл, а также поддержке
            компании Карачаганак Петролеум Оперейтинг б.в. Казахстанская
            компания ТОО «QHSE-Akbarys» инвестировала в создание нового
            предприятия и строительство завода по производству эвакуационных
            спасательных капюшонов NH15-K.
          </p>
          <p className="ppeAkbarysProtection__content-description text-1 white">
            9 августа 2019 г . в г. Нур-Султан состоялось торжественное открытие
            нового завода «Akbarys Protection» по производству эвакуационных
            спасательных капюшонов NH15-K.
          </p>
          <p className="ppeAkbarysProtection__content-description text-1 white">
            Мощность завода, на котором будут применены новые инновационные
            технологии, составит более 40 000 шт. масок в год, тем самым
            обеспечив местных заказчиков качественной продукцией мирового уровня
            с возможностью экспорта в страны прикаспийского региона.
          </p>
          <p className="ppeAkbarysProtection__content-description text-1 white mb">
            Общая сумма инвестиций в проект, который стартовал в 2017 году,
            составила около 1 млрд. тенге.
          </p>
          <Link
            className="button text-1 blue"
            style={{ background: '#fff' }}
            to="/"
          >
            Перейти на сайт
          </Link>
        </div>
        <div className="ppeAkbarysProtection__box">
          <StaticImage
            className="ppeAkbarysProtection__image"
            placeholder="dominantColor"
            src="../../../images/ppe/akbarysProtection.png"
            alt="akbarysProtection"
            quality={95}
            formats={['auto', 'webp', 'avif']}
          />
        </div>
      </div>
    </div>
  </div>
);

export default PpeAkbarysProtection;
