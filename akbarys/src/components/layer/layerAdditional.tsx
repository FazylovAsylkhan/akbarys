import React, { FC } from 'react';

import Header from '../../components/header/header';
import FooterAdditional from '../../components/footer/footerAddiitional';
import '../../scss/mainStyle.scss';

const LayoutAdditional: FC = ({ children }) => (
  <>
    <Header isAdditional={false} />
    <Header isAdditional={true} />
    {children}
    <FooterAdditional />
  </>
);

export default LayoutAdditional;
