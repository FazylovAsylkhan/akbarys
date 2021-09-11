import * as React from 'react';

import PoliticsPreview from '../components/politics/firstBlock/politics';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';
import Plug from '../components/plug/plug';

const Politics = () => (
  <LayoutAdditional>
    <Seo title="Политика конфиденциальности" />
    <PoliticsPreview />
      <Plug />
  </LayoutAdditional>
);

export default Politics;
