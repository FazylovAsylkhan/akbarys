import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './h2s.gasDetectionSystem.scss';

import Line from '../../../images/ppe/illustration/line.svg';
// import TIP_IMG from '../../../images/tip.svg';

const GasDetectionSystem = () =>
  // const tipsTexts = new Array(2).fill(1).map((e, i) => (
  //   <div
  //     key={`keyText-${i}`}
  //     className={`gasDetectionSystem__tip-text gasDetectionSystem__tip-text-${i} text-9`}
  //   >
  //     Резервуар для хранения пластовых вод
  //   </div>
  // ))
  // const tipsImgs = new Array(2)
  //   .fill(1)
  //   .map((e, i) => (
  //     <TIP_IMG
  //       key={`keyImg-${i}`}
  //       className={`gasDetectionSystem__tip-img gasDetectionSystem__tip-img-${i}`}
  //     />
  //   ))
  // useEffect(() => {
  //   const block = document.querySelector(".gasDetectionSystem")
  //   const tipsTextElements = document.querySelectorAll(
  //     ".gasDetectionSystem__tip-text"
  //   )
  //   let numberTip = -1
  //   block?.addEventListener("mouseover", e => {
  //     const element = e.target as HTMLElement
  //     if (element.classList.contains("gasDetectionSystem__tip-img")) {
  //       tipsTextElements.forEach(tipElement =>
  //         tipElement.classList.remove("show")
  //       )
  //       numberTip = Number(element.classList[1].slice(-1))
  //       const textHtmlElement = tipsTextElements[numberTip]
  //       textHtmlElement.classList.add("show")
  //     } else if (tipsTextElements[numberTip] === e.target) {
  //       true
  //     } else {
  //       tipsTextElements.forEach(tipElement =>
  //         tipElement.classList.remove("show")
  //       )
  //       numberTip = -1
  //     }
  //   })
  // }, [])
  (
    <div className="gasDetectionSystem container">
      <div className="gasDetectionSystem__wrapper">
        <div className="gasDetectionSystem__box">
          <StaticImage
            className="gasDetectionSystem__box-image"
            placeholder="dominantColor"
            src="../../../images/ppe/gasDetectionSystem.png"
            alt="ppePreview"
            quality={50}
            formats={['auto', 'webp', 'avif']}
          />
          {/* {tipsImgs}
          {tipsTexts} */}
        </div>
        <div className="gasDetectionSystem__content">
          <div className="gasDetectionSystem__content-title title-1 black">
            Система газообнаружения
          </div>
          <p className="gasDetectionSystem__content-text text-1 gray">
            Из-за высоких концентраций H2S, обнаруживаемых во время операций по
            бурению, испытанию, ремонтных работ и производственных операций,
            сероводород являются серьезной проблемой в нефтегазовой
            промышленности.
          </p>
          <div className="gasDetectionSystem__content-illustration">
            <StaticImage
              className="gasDetectionSystem__content-image gasDetectionSystem__content-image-1"
              placeholder="dominantColor"
              src="../../../images/ppe/illustration/item-1.png"
              alt="ppePreview"
              quality={90}
              formats={['auto', 'webp', 'avif']}
            />
            <Line className="gasDetectionSystem__content-image gasDetectionSystem__content-image-line" />
            <StaticImage
              className="gasDetectionSystem__content-image gasDetectionSystem__content-image-2"
              placeholder="dominantColor"
              src="../../../images/ppe/illustration/item-2.png"
              alt="ppePreview"
              quality={90}
              formats={['auto', 'webp', 'avif']}
            />
            <Line className="gasDetectionSystem__content-image gasDetectionSystem__content-image-line" />
            <StaticImage
              className="gasDetectionSystem__content-image gasDetectionSystem__content-image-3"
              placeholder="dominantColor"
              src="../../../images/ppe/illustration/item-3.png"
              alt="ppePreview"
              quality={90}
              formats={['auto', 'webp', 'avif']}
            />
          </div>

          <p className="gasDetectionSystem__content-text mt text-1 gray">
            Мы являемся профессионалами в области раннего обнаружения наиболее
            распространенных токсичных и взрывоопасных газов, встречающихся на
            опасно-производственных объектах в нефтегазовой отрасли, включая
            H2S, SO2, CO, CO2 и CH4. Современные системы газообнаружения
            Akbarys обеспечивают ранее обнаружение газов, коллективное
            оповещение и сбор данных путем записи на всех устройствах
            газообнаружения.
          </p>
          <p className="gasDetectionSystem__content-text mt text-1 gray">
            При работе в среде токсичных газов использование систем
            газообнаружения является необходимой мерой предосторожности. Системы
            газообнаружения ориентированы на ранее предупреждение о проявлении
            низких концентрации газа в воздухе, позволяя персоналу участка
            немедленно среагировать и покинуть опасную зону до того, как
            концентрация газа достигнет смертельного уровня.
          </p>
          <ul className="gasDetectionSystem__content-text mt text-1 gray">
            Система газообнаружения Akbarys включает в себя 3 типа решений:
            <li>Стационарные беспроводные системы газообнаружения</li>
            <li>Портативные мультигазовые детекторы</li>
            <li>Персональные детекторы газа</li>
          </ul>
          <p className="gasDetectionSystem__content-text mt text-1 gray">
            При работе с очень высокими концентрациями газа или при работе в
            суровых условиях с очень низким уровнем кислорода можно использовать
            насосы для отбора проб газа с трубками для широкого диапазона газов.
          </p>
        </div>
      </div>
    </div>
  );

export default GasDetectionSystem;
