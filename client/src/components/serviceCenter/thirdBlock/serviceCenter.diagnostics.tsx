import * as React from 'react';
import { FC } from 'react';
import './serviceCenter.diagnostics.scss';

interface ServiceCenterDiagnosticsProps {
  content: any
}

const ServiceCenterDiagnostics: FC<ServiceCenterDiagnosticsProps> = ({
  content,
}) => {
  const { title, descriptions } = content;

  return (
    <div className="serviceCenterDiagnostics">
      <div className="container">
        <div className="serviceCenterDiagnostics__wrapper ">
          <div className="serviceCenterDiagnostics__title title-1 white">
            {title}
          </div>
          <p className="serviceCenterDiagnostics__description text-1 mb white">
            {descriptions[0]}
          </p>
          <p className="serviceCenterDiagnostics__description text-1 white">
            {descriptions[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterDiagnostics;
