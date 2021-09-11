import * as React from 'react';
import { useEffect } from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Plug from '../components/plug/plug';
import Seo from '../components/seo';
import SftPreview from '../components/sft/firstBlock/sft.preview';
import SftRequires from '../components/sft/fivthBlock/sft.requires';
import SftDescription from '../components/sft/secondBlock/sft.description';
import SftPartners from '../components/sft/sixthBlock/sft.partners';
import SftSourFluidTreatment from '../components/sft/thirdBlock/sft.sourFluidTreatment';
import data from '../utils/constants';

const sftService = () => {
  useEffect(() => {
    document
      .querySelectorAll('.headerAdditional__link')[1]
      ?.classList.add('active');
  }, []);

  return (
    <LayoutAdditional>
      <Seo title="Нейтрализация сероводорода" />
      <SftPreview />
      <SftDescription data={data.pages.sft.blocks[0]}></SftDescription>
      <SftSourFluidTreatment />
      <SftRequires />
      <SftPartners />
      <Plug />
    </LayoutAdditional>
  );
};

export default sftService;
