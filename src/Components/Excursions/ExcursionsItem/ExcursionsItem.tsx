import React from 'react';
import './ExcursionsItem.scss';
import { NavLink } from 'react-router-dom';

type ExcursionsItem = {
  id: string
  photo :string;
  title: string;
  price: number;
}

export const ExcursionsItem: React.FC<ExcursionsItem> = ({ id, photo, title, price }) => {
  return (
    <div className="excursions-item">
      <img className="excursions-item__image" src={photo} alt="" />
      <div className="excursions-item__footer">
        <NavLink className="link" to={`/excursions/` + id}>{title}</NavLink>
        <div className="price">{price} ฿</div>
      </div>  
    </div>
  )
}