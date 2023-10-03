import React from 'react';
import "./tour.scss";
import { Excursions } from '../../Excursions/Excursions';

export const Tour: React.FC = () => {
  return (
    <div className="tour tour-main">
      <div className="container">
        <div className="tour__title title_l1">Экскурсии</div>
        <div className="tour__details title_l2">Экскурсии в паттайе (таиланде), цены</div>
        <div className="tour__description">
          Какой он Таиланд, своими глазами? Мы предлагаем вам ответить на этот вопрос вместе с нами. Мы
          <br /> сможем посетить самые интересные места и узнать культуру этой удивительной страны.
        </div>
        <Excursions />
        <div className="tour__more">
          <a className="btn" href="/excursions">Посмотреть весь каталог</a>    
        </div>
      </div>
 	  </div>
  )
}