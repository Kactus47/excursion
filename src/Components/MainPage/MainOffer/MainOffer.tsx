import React from 'react';
import "./mainOffer.scss";

export const MainOffer: React.FC = () => {
  return (
    <div className="main-offer">
      <div className="container">
        <h1 className="main-offer__title"><span>Экскурсии</span> в Паттайе</h1>
        <div className="main-offer__descrition">Лучший туристический сервис в Паттайе</div>
        <br />
        <div className="main-offer__contact">Бронируйте на сайте или звоните телефон: +66 60002 4036</div>
      </div>
 	  </div>
  )
}