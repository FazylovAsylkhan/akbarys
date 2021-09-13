import './sft.aboutSft.scss';

import * as React from 'react';

// import { Link } from 'gatsby';

const AboutSft = () => (
  <>
    <div className="aboutSft">
      <div className="aboutSft__wrapper container">
        <div className="aboutSft__content">
          <h3 className="aboutSft__subtitle text-4 black">
            Технология предусматривает орошение газового потока специальными
            растворами. В результате токсичный газ полностью растворяется в
            жидкости.
          </h3>
          {/* <Link to="/" className="aboutSft__link text-1 blue">
            Подробнее...
          </Link> */}
        </div>
        <h2 className="aboutSft__label blue">SFT</h2>
      </div>
    </div>
    <div className="line"></div>
  </>
);

export default AboutSft;
