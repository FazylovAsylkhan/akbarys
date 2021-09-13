import * as React from 'react';

import LayoutAdditional from '../components/layer/layerAdditional';
import Page404 from '../components/page404/page404';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <LayoutAdditional>
    <Seo title="Страница не найдена. 404" />
    <Page404></Page404>
  </LayoutAdditional>
);

export default NotFoundPage;
