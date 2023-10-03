import React, { useEffect } from 'react';
import './ReviewItem.scss'
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchReview } from '../../redux/slice/reviews/asyncActions';
import { useLocation } from 'react-router-dom';

export const ReviewItem: React.FC = () => {

  const dispatch = useAppDispatch();
  const {isLoading, reviews} = useSelector((state: RootState) => state.reviewsLoading);
  const location = useLocation();
  
  useEffect(() => {
    if(reviews.length === 0) {
      dispatch(fetchReview())
    }
  }, [])

  const reviewsViews = (location.pathname === '/') ?
    reviews
    .filter(item => item.isFront === 1)
    .map(item => {
      return(
        <div key={item.id} className="review-item">
          <div className="review-item__name">{item.name}</div>
          <div className="review-item__text">{item.text}</div>
        </div>
      )
    }) :
    reviews
    .map(item => {
      return(
        <div key={item.id} className="review-item">
          <div className="review-item__name">{item.name}</div>
          <div className="review-item__text">{item.text}</div>
        </div>
      )
    })
    
  return (
    <>
      {reviewsViews}
    </>
  );
}