import React, { FC } from 'react';
import Header from '../../components/header/header';
import Footer from '../footer/footer';
import '../../scss/mainStyle.scss';

interface LayoutAdditionalProps {
  children: any
  data?: any
  langs: any
  h1: any
}

const LayoutAdditional: FC<LayoutAdditionalProps> = ({
  children, data, langs, h1,
}) => (
    <>
      <Header langs={langs} data={data.header} isAdditional={false} />
      <Header langs={langs} data={data.header} isAdditional={true} />
      <h1 className="h1">{h1}</h1>
      {children}
      <Footer data={data.footer} />
    </>
);

export default LayoutAdditional;
