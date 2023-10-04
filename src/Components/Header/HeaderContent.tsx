import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';


export const HeaderContent: React.FC = () => {
  return (
    <div className="header__content">
      <div className="header__background"></div>
      <div className="container">
        <NavLink className="header__logo" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="header__contact">
          <div className="header__contact-phone">
            <div className="header__contact-number">+66 60002 4036  <span>(Таиланд)</span></div>
            <div className="header__contact-number">8 800 000 000 <span>(Бесплатно)</span></div>
          </div>
          <div className="header__contact-description">Оба телефона поддерживают горячую линию, с 4:00 до 24:00</div>
        </div>
      </div>
    </div>
  )
}