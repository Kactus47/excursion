import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './BlogItem.scss'
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchBlog } from '../../redux/slice/blogs/asyncActions';
import parse from 'html-react-parser';
import SceletonNews from '../Sceletons/SceletonNews';

export const BlogItem: React.FC = () => {

  const dispatch = useAppDispatch();
  const {isLoading, blogs} = useSelector((state: RootState) => state.blogsLoading);


  useEffect(() => {
    if(blogs.length === 0) {
      dispatch(fetchBlog())
    }
  }, [])

  const trimTextTeaser = (text: string) => {
    const MAX_TEXT_LENGTH = 100;
    return text.substring(0, MAX_TEXT_LENGTH) + '...'
  }

  const dateFormat = (dateTime: number) => {
    const date = new Date(dateTime * 1000);
    const day = date.getDay() + 1
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} г.`
  }
  
  
  return (
    <>
      {
        isLoading ? 
        blogs.map(item => {
          const trimmedText = trimTextTeaser(item.text);
          const postDate = dateFormat(item.postDate)
          return(
            <div key={item.id} className="blog-item">
              <NavLink className="blog-item__image" to={`/blog/${item.id}`}>
                <img src={item.imagePoster} alt={item.title} />
              </NavLink>
              <div className="blog-item__wrapper">
                <div className="blog-item__date">{postDate}</div>
                <NavLink className="blog-item__link" to={`/blog/${item.id}`}>{item.title}</NavLink>
                <div className="blog-item__text">
                  {parse(trimmedText)}
                </div>
              </div>
            </div>
          )
        })
        : [...new Array(6)].map((item, index) => <SceletonNews key={index} />)
      }
    </>
  );
}