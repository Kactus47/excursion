import React, { useEffect, useState } from 'react';
import { PropsBreadcrumbsType } from '../../../Components/Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../../../Components/PageHeader/PageHeader';
import './InsideBlogPage.scss';
import { useParams } from 'react-router-dom';
import { BlogsObject } from '../../../redux/slice/blogs/types';

export const InsideBlogPage: React.FC = () => {

  const breadcrumbsList:PropsBreadcrumbsType[] = [
    {
      name: "Блог",
      url: "blog"
    }
  ]

  const { id } = useParams();
  const [blogInfo, setBlogInfo] = useState<BlogsObject>({
    id: "",
    title: "",
    descriptionTitle: "",
    text: "",
    postDate: 0,
    image: "",
    imagePoster: "",
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {  
    async function fetchBlog() {
      try {
        await fetch('https://6515538adc3282a6a3ce39ce.mockapi.io/Blog/' + id)
        .then(res => res.json())
        .then(blog => {
          setBlogInfo(blog)
          setIsLoading(true)
        });
      } catch (error) {
        alert('Ошибка при получении блога!');
      }
    }
    fetchBlog();
  }, [])

  useEffect(() => {
    document.title = blogInfo.title;    
  }, [blogInfo.title])
  
  return (
    <main className="content">
      <PageHeader breadcrumbsList={breadcrumbsList} title="Советы туристам" />
      <div className="container">
        {
          !isLoading ? 'загрузка' : 
          <div className="blog-content">
            <div className="title-page">
              <h1 className="title-page__h1">{blogInfo.title}</h1>
              <div className="title-page__description">{blogInfo.descriptionTitle}</div>
            </div>
            <img src={blogInfo.image} alt={blogInfo?.title} className="blog-content__photo" />
            <div className="blog-content__text text-content" dangerouslySetInnerHTML={{__html: blogInfo.text}}>
            </div>
          </div>
          
        }   
      </div>
    </main>
  )
}