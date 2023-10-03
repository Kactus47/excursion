import React, { useEffect } from 'react';
import { PropsBreadcrumbsType } from '../../Components/Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../../Components/PageHeader/PageHeader';
import { Excursions } from '../../Components/Excursions/Excursions';

export const ExcursionsPage: React.FC = () => {

  const breadcrumbsList:PropsBreadcrumbsType[] = [
    {
      name: "Подборка туров",
      url: ""
    }
  ]

  useEffect(() => {
    document.title = 'Екскурсии'    
  }, [])

  return (
    <main className="content">
      <PageHeader breadcrumbsList={breadcrumbsList} title="Екскурсии" />
      <div className="container">
        <Excursions />
      </div>
    </main>
  )
}