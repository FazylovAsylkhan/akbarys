import './serviceCenter.diagnostics.scss';

import * as React from 'react';

// import ItemImg1 from '../../../images/serviceCenter/serviceCenterDiagnostics-item-1.svg';
// import ItemImg2 from '../../../images/serviceCenter/serviceCenterDiagnostics-item-2.svg';
// import ItemImg3 from '../../../images/serviceCenter/serviceCenterDiagnostics-item-3.svg';
// import ItemImg4 from '../../../images/serviceCenter/serviceCenterDiagnostics-item-4.svg';
// import ItemImg5 from '../../../images/serviceCenter/serviceCenterDiagnostics-item-5.svg';

const ServiceCenterDiagnostics = () => (
  <div className="serviceCenterDiagnostics">
    <div className="container">
      <div className="serviceCenterDiagnostics__wrapper ">
        <div className="serviceCenterDiagnostics__title title-1 white">
          Работаем в регионах
        </div>
        <p className="serviceCenterDiagnostics__description text-1 white left">
          Специалисты компании проводят работы как на объектах заказчика, так и
          в условиях специализированных лабораторий, расположенных в регионах
          Казахстана.
        </p>
        <p className="serviceCenterDiagnostics__description text-1 white right">
          Для наиболее полного и быстрого реагирования на запросы заказчиков и
          сокращения сроков сервисного обслуживания в крупных промышленных
          регионах созданы локальные сервисные подразделения, что позволяет
          оперативно осуществлять сервисную поддержку оборудования заказчика.
          Кроме центрального Уральского подразделения, такие сервисные службы
          созданы в Астане, Аксае, Актобе, Атырау, Актау.
        </p>
      </div>
    </div>
  </div>
);

export default ServiceCenterDiagnostics;
