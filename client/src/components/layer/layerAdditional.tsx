import React, { FC } from 'react';
import Header from '../../components/header/header';
import FooterAdditional from '../../components/footer/footerAddiitional';
import '../../scss/mainStyle.scss';

interface LayoutAdditionalProps {
  children: any
  data?: any
}

const LayoutAdditional: FC<LayoutAdditionalProps> = ({ children, data }) => (
    <>
      <Header data={data.header} isAdditional={false} />
      <Header data={data.header} isAdditional={true} />
      {children}
      <FooterAdditional data={data.footer} />
    </>
);

export default LayoutAdditional;
