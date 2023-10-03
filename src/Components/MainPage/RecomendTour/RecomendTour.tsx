import React from 'react';
import "./recomendTour.scss";
import { NavLink } from 'react-router-dom';

type RecomendTourProps = {
  id: string;
  title: string;
  location: string;
  price: number;
  time: number;
  img: string;
}

export const RecomendTour: React.FC<RecomendTourProps> = ({ id, title, location, price, time, img }) => {

  const dayFormat = (dayNumber:number) => {
    const dayName = ['день', 'дня', 'дней'];
    if (dayNumber === 1) {
      return dayNumber + ' ' + dayName[0];
    } else if (dayNumber > 1 && dayNumber <= 4) {
      return dayNumber + ' ' + dayName[1];
    } else {
      return dayNumber + ' ' + dayName[2];
    } 
  } 
  


  return (
    <div className="recomend-tours-item">
      <img className="recomend-tours-item__image" src={img} alt="" />
      <div className="recomend-tours-item__header">
        <div className="recomend-tours-item__header-group">
          <a className="recomend-tours-item__header-title" href={`/excursions/${id}`}>{title}</a>
          <div className="recomend-tours-item__header-location">{location}</div>
        </div>
        <div className="recomend-tours-item__header-price">{price} р. </div>
      </div>
      <div className="recomend-tours-item__footer">        
        <div className="recomend-tours-item__footer-time">
          <div>Время экскурсии:</div> {dayFormat(time)}
        </div>
        <NavLink to={`/excursions/${id}`}>Подробности</NavLink>  
      </div>
    </div>



  )
}