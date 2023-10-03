import React from 'react';
import { Breadcrumbs, PropsBreadcrumbsType } from '../Breadcrumbs/Breadcrumbs';
import "./PageHeader.scss"


type PageHeaderProps = {
  breadcrumbsList: PropsBreadcrumbsType[];
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({breadcrumbsList, title}) => {

  return (
    <div className="header-page">
      <div className="container">
        <Breadcrumbs breadcrumbsList={breadcrumbsList}  />
        <h1 className='header-page__h1'>{title}</h1>
      </div>
    </div>
  )
}