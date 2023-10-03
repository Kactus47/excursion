import React from 'react';
import "./advances.scss";

export const Advances: React.FC = () => {

  const advancesList = [
    {
      classIcon: "order",
      title: "Заказ онлайн",
      description: "Все услуги можно<br /> заказать на сайте",
    },
    {
      classIcon: "prepaid",
      title: "Без предоплаты",
      description: "Большинство предложений<br /> не требуют предоплаты",
    },
    {
      classIcon: "hot_line",
      title: "Горячая линяя",
      description: "Отвечаем на ваши вопросы<br /> круглосуточно без выходных",
    },
    {
      classIcon: "price_free",
      title: "Доступные цены",
      description: "Мы удерживаем цены чтобы вы<br /> могли позволить себе больше",
    }
  ]

  return (
    <div className="advances">
      <div className="container">
        {
          advancesList.map(item => {
            return(
              <div key={item.classIcon} className="advances_item">
                <i className={`advances_item__icon advances_item__icon-${item.classIcon}`}></i>
                <div className="advances_item__title">{item.title}</div>
                <div className="advances_item__description" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            )
          })
        }
      </div>
    </div>

  )
}