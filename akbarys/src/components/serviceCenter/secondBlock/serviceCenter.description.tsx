// import SvgImg from '../../../images/serviceCenter/item-icon.svg';
import './serviceCenter.description.scss';
import * as React from 'react';

const ServiceCenterDescription = () => (
  <div className="serviceCenterDescription">
    <div className="container">
      <h1 className="transparent">Сервисный центр</h1>
      <div className="serviceCenterDescription__wrapper">
        <h2 className="serviceCenterDescription__title title-1 black">
          Своевременное обслуживание – залог надёжности
        </h2>
        <h3 className="serviceCenterDescription__subtitle text-4 black">
          Для выполнения периодических и экстренных ремонтных работ в QHSE
          Akbarys организован сервисный центр.
        </h3>
      </div>
    </div>
    <div className="line"></div>
    <div className="container">
      <div className="serviceCenterDescription__wrapper">
        <h2 className="serviceCenterDescription__title title-1 black">
          Вы в надежных руках
        </h2>
        <p className="serviceCenterDescription__description text-1 gray left">
          Сервисный центр Akbarys выполняет профессиональное сервисное и
          техническое обслуживание не только собственного оборудования, но
          оборудования заказчиков. Сотрудники компании сертифицированы
          производителем оборудования
        </p>
        <p className="serviceCenterDescription__description text-1 gray right">
          Все технические средства, участвующие в сервисном обслуживании ТОО
          «QHSE-Akbarys» проходят периодическую проверку и техническое
          обслуживание в соответствии с графиком ППР и эксплуатационной
          документацией.
        </p>
      </div>
    </div>
    <div className="line"></div>
    <div className="container">
      <div className="serviceCenterDescription__wrapper">
        <h2 className="serviceCenterDescription__title title-1 black">
          Виды сервисных работ
        </h2>
        <p className="serviceCenterDescription__description text-1 gray serviceCenterDescription__description_changable">
          Мы выполняем обслуживание:
        </p>
      </div>
    </div>
    <div className="line"></div>
    <div className="container">
      <div className="serviceCenterDescription__items">
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            01
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Дыхательных <br />
            аппаратов
          </p>
        </div>
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            02
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Систем <br />
            газодетекции
          </p>
        </div>
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            03
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Воздушных <br />
            компрессоров
          </p>
        </div>
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            04
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Систему <br />
            оповещения
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceCenterDescription;
