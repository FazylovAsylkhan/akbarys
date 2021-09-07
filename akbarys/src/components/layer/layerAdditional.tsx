import '../../scss/mainStyle.scss';

import React, { FC } from 'react';

import FooterAdditional from '../../components/footer/footerAddiitional';
import HeaderAdditional from '../../components/header/headerAdditional';

const LayoutAdditional: FC = ({ children }) => (
  <>
    <HeaderAdditional />
    {children}
    <FooterAdditional />
  </>
);

export default LayoutAdditional;
