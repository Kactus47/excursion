import React, { useEffect } from 'react';
import { MainOffer } from '../../Components/MainPage/MainOffer/MainOffer';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchExcursion } from '../../redux/slice/excursions/asyncAction';
import { useSelector } from 'react-redux';
import { RecomendTour } from '../../Components/MainPage/RecomendTour/RecomendTour';
import { Advances } from '../../Components/MainPage/Advances/Advances';
import { About } from '../../Components/MainPage/About/About';
import { Tour } from '../../Components/MainPage/Tour/Tour';
import { ReviewItem } from '../../Components/ReviewItem/ReviewItem';
import { SceletonRecomensExursion } from '../../Components/Sceletons/SceletonRecomensExursion';

export const MainPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const {excursions, isLoading} = useSelector((state: RootState) => state.excursionLoading);

  useEffect(() => {
    if(excursions.length === 0) {
      dispatch(fetchExcursion());
    }
    document.title = 'Главная'    
  }, []);

  return (
    <>
      <MainOffer />
      <div className="recomend-tours">
        {
          !isLoading ? [...new Array(4)].map((item, key) => <SceletonRecomensExursion key={key} />) :
          excursions
            .filter((excursion) => excursion.recomendation === 1)
            .map((excursion) => {
              return (
                  <RecomendTour 
                  key={excursion.id} 
                  id={excursion.id}
                  title={excursion.title}
                  location={excursion.location} 
                  price={excursion.price[0].priceChildren} 
                  time={excursion.infoTour.duration} 
                  img={excursion.teazerPhoto}
                />
              )
            })
        }
      </div>
      <Advances />
      <About />
      <Tour />
      <div className="reviews reviews__main">
        <div className="container">
          <div className="title_l1">Отзывы наших клиентов</div>
          <div className="reviews__details title_l2">Они выбирают качество. Они выбирают нас</div>
          <div className="reviews__content">
            <ReviewItem />
          </div>
        </div>
      </div>
    </>
  )
}