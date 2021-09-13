import './ppe.brends.scss';

import * as React from 'react';

import Brend_1 from '../../../images/ppe/brend-1.svg';
import Brend_2 from '../../../images/ppe/brend-2.svg';
import Brend_3 from '../../../images/ppe/brend-3.svg';
import Brend_4 from '../../../images/ppe/brend-4.svg';

const PpeBrends = () => (
  <div className="ppeBrends">
    <div className="container">
      <div className="ppeBrends__wrapper">
        <div className="ppeBrends__img">
          <Brend_1 />
        </div>
        <div className="ppeBrends__img">
          <Brend_2 />
        </div>
        <div className="ppeBrends__img">
          <Brend_3 />
        </div>
        <div className="ppeBrends__img">
          <Brend_4 />
        </div>
      </div>
    </div>
  </div>
);

export default PpeBrends;
