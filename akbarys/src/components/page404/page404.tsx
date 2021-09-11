import * as React from "react"
import { Link } from "gatsby"
import "./page404.scss"

const Page404 = () => (
  <div className="page404">
    <div className="container">
      <div className="page404__wrapper">
        <div className="page404__title blue">404</div>
        <div className="page404__description title-3 black">
          Извините, страница не найдена!
        </div>
        <Link className="page404__button button white text-1" to="/">
          На главную
        </Link>
      </div>
    </div>
    <div className="line"></div>
  </div>
)

export default Page404
