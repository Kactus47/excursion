import React from 'react';
import logoFooter from '../../assets/images/logo_footer.png';
import { NavLink } from 'react-router-dom';

export const FooterTop: React.FC = () => {
  type menu = {
    name: string,
    url: string,
  }
  const menuList: menu[] = [
    {
      name: 'Каталог экскурсий',
      url: 'excursions',
    },
    {
      name: 'Советы туристам',
      url: 'blog',
    },
    {
      name: 'Вопросы и ответы',
      url: 'faq',
    },
    {
      name: 'Отзывы',
      url: 'reviews',
    },
  ]

  return (
    <div className="footer-top">
      <div className="container">
        <div className="about-company">
          <div className="about-company__title footer__title">О компании</div>
          <img className="about-company__logo" src={logoFooter} alt="" />
          <div className="about-company__description">
            Мы компания экскурсии в Паттайе. Мы делаем всё возможное для того, чтобы ваш отдых был еще более комфортным, интересным и безопасным. Наша особенность в том, что мы предлагаем возможность заказать любые туристические услуги в городе Паттайя через интернет или по телефону.
          </div>
        </div>
        <div className="footer-navigation">
          <div className="footer-navigation__title footer__title">Игформация</div>
          <ul className="footer-navigation__menu">
            {
              menuList.map(item => {
                return(
                  <li key={item.url}>
                    <NavLink to={`/${item.url}`}>{item.name}</NavLink>
                  </li>
                )
              })
            }
          </ul>	
        </div>
        <div className="footer-contacts">
          <div className="footer-contacts__title footer__title">Контакты</div>
          <div className="footer-contacts__phones">
            <div className="phone">+66 60002 4036  (Таиланд)<br />8 800 000 0000 (Бесплатно)</div>
            <div className="info_phone">Оба телефона поддерживают горячую линию</div>
          </div>
          <div className="footer-contacts__time-work">Ежедневно<br /> с 4:00 до 24:00</div>
        </div>
      </div>
    </div>
  )
}