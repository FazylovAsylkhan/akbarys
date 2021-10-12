import * as React from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './pressCenter.news.scss';
import { FC } from 'react';

interface PressCenterNewsProps {
  content: any
}

const PressCenterNews: FC<PressCenterNewsProps> = ({ content }) => {
  const { news, title, buttonText } = content;
  return (
    <div className="pressCenterNews">
      <div className="container">
        <div className="pressCenterNews__wrapper">
          <div className="pressCenterNews__title title-1 black">{title}</div>
          <div className="pressCenterNews__cards">
            {(news as any[]).map((post) => {
              const {
                url, image, description,
              } = post.frontmatter.contentPost;
              const img = getImage(image);
              return (
                <div key={post.id} className="pressCenterNews__card">
                  <div className="pressCenterNews__card-head">
                    {img ? <GatsbyImage image={img} alt={post.title} /> : ''}
                  </div>
                  <div className="pressCenterNews__card-body">
                    <h3 className="pressCenterNews__card-title text-11 black">
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(`/press-center/${url}`)}
                      >
                        {post.title}
                      </span>
                    </h3>
                    <p className="pressCenterNews__card-description text-1 gray">
                      {description}
                    </p>

                    <span
                      className="pressCenterNews__card-button blue"
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`/press-center/${url}`)}
                    >
                      {buttonText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default PressCenterNews;
