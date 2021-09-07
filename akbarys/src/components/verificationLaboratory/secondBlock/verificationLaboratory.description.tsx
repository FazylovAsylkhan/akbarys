import "./verificationLaboratory.description.scss"

import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const VerificationLaboratoryDescription = () => (
  <div className="verificationLaboratoryDescription">
    <h1 className="transparent">Поверочные лаборатории QHSE Akbarys</h1>
    <div className="container">
      <div className="verificationLaboratoryDescription__wrapper">
        <div className="verificationLaboratoryDescription__content">
          <h2 className="verificationLaboratoryDescription__title title-1 black">
            Высокие стандарты ради безопасности
          </h2>
          <h3 className="verificationLaboratoryDescription__subtitle text-4 black">
            Поверочная лаборатория ТОО QHSE-Akbarys в Уральске и её филиалы на
            местах работают на благо наших партнёров, обеспечивая безопасность и
            развитие бизнеса
          </h3>
          <p className="verificationLaboratoryDescription__description text-1 gray verificationLaboratoryDescription__description_changable">
            Наличие результатов измерений концентрации токсичных газов в зоне
            проведения работ позволяет избежать аварий, сохранить здоровье
            сотрудников и выполнить требования экологического законодательства.
          </p>
        </div>
      </div>
    </div>
    <div className="line"></div>
    <div className="container">
      <div className="verificationLaboratoryDescription__wrapper">
        <div className="verificationLaboratoryDescription__box">
          <div className="verificationLaboratoryDescription__box-title title-1 black">
            Поверенный измерительный инструмент
          </div>
          <div className="verificationLaboratoryDescription__box-description text-1 gray">
            Обеспечение точности измерений на всех этапах оказания услуг – залог
            качества наших процессов. Применяя поверенные средства измерительной
            техники (СИТ) известных мировых производителей мы не только получаем
            признаваемые результаты, мы демонстрируем приверженность системному
            подходу в обеспечении результатов соответствующих ожиданиям наших
            заказчиков. Для калибровки и поверки СИТ, ТОО QHSE-Akbarys
            организовало собственную лабораторию и аккредитовало её в
            Национальном агентстве по аккредитации РК, на соответствие
            требованиям ГОСТ ИСО/МЭК 17025-2009 «Общие требования к
            компетентности испытательных и калибровочных лабораторий». Таким
            образом, мы гарантируем, что процессы обеспечения производственной
            безопасности и утилизации токсичных веществ находятся в управляемых
            условиях.
          </div>
          <StaticImage
            className="verificationLaboratoryDescription__box-img"
            placeholder="dominantColor"
            src="../../../images/verificationLaboratory/img-1.jpg"
            alt="sftPreview"
            quality={95}
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="verificationLaboratoryDescription__box">
          <div className="verificationLaboratoryDescription__box-title title-1 black">
            Оборудование и инструмент
          </div>
          <div className="verificationLaboratoryDescription__box-description text-1 gray">
            Лаборатория оснащена современным оборудованием позволяющим проводить
            испытания СИТ на исправность и способность воспроизводить
            достоверные результаты. Поверочная лаборатория располагает
            средствами поверки, состоящими из исходных эталонов и измерительных
            принадлежностей, позволяющих проводить оценку соответствия в
            пределах области аккредитации. Кроме этого, лаборатория осуществляет
            сервисное обслуживание и ремонт средств поверки. Нами разработаны
            специальные инструкции, согласованные с производителями
            оборудования. Руководство по эксплуатации, технический паспорт и
            другие инструкции всегда находятся на рабочем месте, чтобы исключить
            возможность ошибок при проведении работ. Ремонт средств поверки
            осуществляется персоналом, имеющим специальную подготовку, обученным
            соответствующим правилам и прошедшим инструктаж по безопасности
            труда в соответствии с требованиями производителей оборудования и
            инструмента.
          </div>
          <div className="verificationLaboratoryDescription__box-imgs">
            <StaticImage
              className="verificationLaboratoryDescription__box-img"
              placeholder="dominantColor"
              src="../../../images/verificationLaboratory/img-2.jpg"
              alt="sftPreview"
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
            <StaticImage
              className="verificationLaboratoryDescription__box-img"
              placeholder="dominantColor"
              src="../../../images/verificationLaboratory/img-3.jpg"
              alt="sftPreview"
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="line"></div>
  </div>
)

export default VerificationLaboratoryDescription
