import React, { useEffect } from 'react';
import { PropsBreadcrumbsType } from '../../Components/Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../../Components/PageHeader/PageHeader';
import { BlogItem } from '../../Components/BlogItem/BlogItem';
import './BlogPage.scss';

export const BlogPage: React.FC = () => {
 
  const breadcrumbsList:PropsBreadcrumbsType[] = [
    {
      name: "Блог",
      url: ""
    }
  ]

  useEffect(() => {
    document.title = 'Сoветы туристам'    
  }, [])

  return (
    <main className="content">
      <PageHeader breadcrumbsList={breadcrumbsList} title="Советы туристам" />
      <div className="container">
        <div className="blogs">
          <div className="blogs__title">Советы которые помогут вам выбрать тур</div>
          <div className="blogs__content">
            <BlogItem />
          </div>
        </div>
      </div>
    </main>
  )
}