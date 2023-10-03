import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const HeaderMenu: React.FC = () => {

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

  const [isActive, setIsActive] = useState<boolean>(false);

  const menuToggle = () => {
    setIsActive(!isActive);
  }

  return (
    <div className={isActive ? 'header__navigation header__navigation-active' : 'header__navigation'}>
      <div className="container">
        <button 
          onClick={menuToggle} 
          type="button"
          className={isActive ? 'navbar-toggle navbar-toggle-active' : 'navbar-toggle'}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul>
          {
            menuList.map(item => {
              return(
                <li key={item.url}>
                  <NavLink onClick={menuToggle} to={`/${item.url}`}>{item.name}</NavLink>
                </li>
              )
            })
          }
        </ul>	    	
      </div>
    </div>
  )
}