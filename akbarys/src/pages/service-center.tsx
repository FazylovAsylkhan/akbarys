import * as React from 'react';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Plug from '../components/plug/plug';
import Seo from '../components/seo';
import ServiceCenterPreview from '../components/serviceCenter/firstBlock/serviceCenter,preview';
import ServiceCenterOpportunities from '../components/serviceCenter/fouthBlock/serviceCenter.opportunities';
import ServiceCenterDescription from '../components/serviceCenter/secondBlock/serviceCenter.description';
import ServiceCenterDiagnostics from '../components/serviceCenter/thirdBlock/serviceCenter.diagnostics';

const ServiceCenter = () => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);

  return (
    <LayoutAdditional>
      <Seo title="Сервисный центр" />
      <ServiceCenterPreview />
      <ServiceCenterDescription />
      <ServiceCenterDiagnostics />
      <ServiceCenterOpportunities />
      <Plug />
    </LayoutAdditional>
  );
};

export default ServiceCenter;
