import React from 'react';
import { NavLink } from 'react-router-dom';
import './Breadcrumbs.scss'

export type PropsBreadcrumbsType = {
  name: string;
  url?: string;
}

export const Breadcrumbs: React.FC<{breadcrumbsList: PropsBreadcrumbsType[]}> = ({breadcrumbsList}) => {
  return (
    <div className="breadcrumbs">
      <NavLink className="breadcrumbs__link" to="/">Главная</NavLink>
      <span className="breadcrumbs__separator">/</span>
      {
        breadcrumbsList.map((item, index) => {
          if('url' in item && item.url !== '') {
            return (
              <React.Fragment key={index}>
                <NavLink className="breadcrumbs__link" to={`/${item.url}`}>{item.name}</NavLink>
                <span className="breadcrumbs__separator">/</span>
              </React.Fragment>
            )
          } else {
            return <span key={index}>{item.name}</span>
          }
        })
      }
    </div>
  );
}