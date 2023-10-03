import React, { useEffect } from 'react';
import { PropsBreadcrumbsType } from '../../Components/Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../../Components/PageHeader/PageHeader';
import './ReviewsPage.scss';
import { ReviewItem } from '../../Components/ReviewItem/ReviewItem';
import { Form } from '../../Components/Form/Form';

export const ReviewsPage: React.FC = () => {

  const breadcrumbsList:PropsBreadcrumbsType[] = [
    {
      name: "Отзывы",
      url: ""
    }
  ]
  useEffect(() => {
    document.title = 'Отзывы'    
  }, [])
  return (
    <main className="content">
      <PageHeader breadcrumbsList={breadcrumbsList} title="Отзывы клиентов" />
      <div className="container">
        <div className="reviews">
          <div className="reviews__title">Клиенты пишут о нас</div>
          <div className="reviews__content">
            <ReviewItem />
          </div>
        </div>
      </div>
      <div className="reviews-form-block">
        <div className="container">
          <div className="reviews__title">Оставить отзыв о нашей работе</div>
          <Form />
        </div>
      </div>
    </main>
  )
}