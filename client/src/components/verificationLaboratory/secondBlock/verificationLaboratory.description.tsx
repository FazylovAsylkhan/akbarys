import * as React from 'react';
import './verificationLaboratory.description.scss';

const VerificationLaboratoryDescription = () => (
  <div className="verificationLaboratoryDescription">
    <h1 className="transparent">Поверочные лаборатории QHSE Akbarys</h1>
    <div className="container">
      <div className="verificationLaboratoryDescription__wrapper">
        <div className="verificationLaboratoryDescription__content">
          <h2 className="verificationLaboratoryDescription__title title-1 black">
            Точность измерения – залог безопасности
          </h2>
          <h3 className="verificationLaboratoryDescription__subtitle text-4 black">
            Для калибровки и поверки средств измерительной техники (СИТ), в
            компании Akbarys организована собственная лаборатория
          </h3>
          <p className="verificationLaboratoryDescription__description text-1 gray verificationLaboratoryDescription__description_changable">
            Лаборатория осуществляет услуги по первичной и периодической поверке
            газоаналитического оборудования и калибровке всех видов приборов,
            включающих в себя стационарные, переносные и портативные
            газоаналитические средства измерений (газоанализаторы,
            газосигнализаторы, детекторы и датчики) для контроля содержания
            концентрации одного или нескольких веществ в воздухе или газовых
            средах.
          </p>
        </div>
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
            Современное
            <br /> оборудование
          </p>
        </div>
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            02
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Опытный <br /> персонал
          </p>
        </div>
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            03
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Поверенный <br /> инструмент
          </p>
        </div>
        <div className="serviceCenterDescription__item">
          <h4 className="serviceCenterDescription__item-title title-1 black">
            04
          </h4>
          <p className="serviceCenterDescription__item-description text-7 black">
            Достоверные <br /> результаты
          </p>
        </div>
      </div>
    </div>

    <div className="line"></div>
    <div className="container">
      <div className="serviceCenterDescription__wrapper">
        <h2 className="serviceCenterDescription__title title-1 black">
          Современное оборудование
        </h2>
        <p className="serviceCenterDescription__description text-1 gray left">
          Лаборатория оснащена современным оборудованием ведущих отечественных и
          мировых производителей, в которой в процессе поверки применяются
          сертифицированные поверочные газовые смеси.
        </p>
        <p className="serviceCenterDescription__description text-1 gray right">
          Располагает средствами поверки, состоящими из исходных и измерительных
          принадлежностей, позволяющими проводить поверки в соответствии с
          областью аккредитации. При этом учитываются условия их работы,
          установленные в технической (эксплуатационной) документации и
          определен персонал, осуществляющий обслуживание средств поверки.
        </p>
      </div>
      <div className="serviceCenterDescription__wrapper paddingTop">
        <h2 className="serviceCenterDescription__title title-1 black">
          Квалифицированный персонал
        </h2>
        <p className="serviceCenterDescription__description text-1 gray left">
          В составе лаборатории работают 8 специалистов, имеющих квалификацию
          «Поверитель средств физико-химических измерений».
        </p>
        <p className="serviceCenterDescription__description text-1 gray right">
          Сотрудники поверочной лаборатории - квалифицированные поверители,
          которые проходят периодическую аттестацию и повышают свой
          профессиональный уровень в области метрологического обеспечения.
        </p>
      </div>
    </div>
    <div className="line"></div>
  </div>
);

export default VerificationLaboratoryDescription;
