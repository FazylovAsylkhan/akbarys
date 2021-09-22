import * as React from 'react';
import { Link } from 'gatsby';
import './page404.scss';
import { FC } from 'react';

interface Page404Props {
  content: any
}

const Page404: FC<Page404Props> = ({ content }) => {
  const { title, button } = content;
  return (
    <div className="page404">
      <div className="container">
        <div className="page404__wrapper">
          <div className="page404__title blue">404</div>
          <div className="page404__description title-3 black">
            {title}
          </div>
          <Link className="page404__button button white text-1" to={button.url}>
            {button.text}
          </Link>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Page404;
