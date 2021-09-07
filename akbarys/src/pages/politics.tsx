import * as React from 'react';

import PoliticsPreview from '../components/politics/firstBlock/politics';
import LayoutAdditional from '../components/layer/layerAdditional';
import Seo from '../components/seo';

const Politics = () => (
  <LayoutAdditional>
    <Seo title="Политика конфиденциальности" />
    <PoliticsPreview />
  </LayoutAdditional>
);

export default Politics;
