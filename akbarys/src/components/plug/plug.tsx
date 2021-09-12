import * as React from "react"
import "./plug.scss"

const Plug = () => {
    
    // React.useEffect(() => {
    //     if (
    //         /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    //           navigator.userAgent
    //         )
    //       ) {
    //         document.querySelector(".plug")?.classList.add("active")
    //       }
    // }, [])
  return (
    <div className="plug">
      <h3 className="title-2 black">Мобильная и планшетная версия сайта</h3>
      <h3 className="title-2 black">находиться в разработке</h3>
      <h2 className="title-1 black mt">Просим вас открыть данный сайт</h2>
      <h2 className="title-1 black">на другом устройстве</h2>
      <h3 className="title-3 black mt2">Контакты:</h3>

      <p className="text-1 gray mt">Республика Казахстан, г. Уральск,</p>
      <p className="text-1 gray">ул. Шаруашылык, 15</p>
      <p className="text-1 gray mt3">+7 705 790 48 56</p>
      <p className="text-1 gray mt3">info@akbarys.kz</p>
    </div>
  )
}

export default Plug
