import React, { useEffect } from 'react';
import { PropsBreadcrumbsType } from '../../Components/Breadcrumbs/Breadcrumbs';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchFaq } from '../../redux/slice/faq/asyncAction';
import { PageHeader } from '../../Components/PageHeader/PageHeader';
import { FaqItem } from '../../Components/FaqItem/FaqItem';

export const FaqPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const { faqs, isLoading } = useSelector((state: RootState) => state.faqLoading);
  
  useEffect(() => {
    if(faqs.length === 0) {
      dispatch(fetchFaq());
    }
    document.title = 'Вопрос / ответ'   
  }, []);
  
  const breadcrumbsList: PropsBreadcrumbsType[] = [
    {
      name: "Вопросы и ответ",
      url: ""
    }
  ]

  return (
    <main className="content">
      <PageHeader breadcrumbsList={breadcrumbsList} title="Вопрос-ответ" />
      <div className="container">
        {
          faqs.map(faq => <FaqItem title={faq.title} text={faq.text} />)
        }
      </div>
    </main>
  )
}