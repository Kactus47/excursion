import React, { useEffect, useState } from 'react';
import "./excursions.scss";
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { fetchExcursion } from '../../redux/slice/excursions/asyncAction';
import { CategotyExcursions } from './CategotyExcursions/CategotyExcursions';
import { ExcursionsItem } from './ExcursionsItem/ExcursionsItem';
import { SceletonExursion } from '../Sceletons/SceletonExursion';

export const Excursions: React.FC = () => {

  const dispatch = useAppDispatch();
  const { excursions, isLoading } = useSelector((state: RootState) => state.excursionLoading);
  const [categoryName, setCategoryName] = useState<string>('Все');

  useEffect(() => {
    if (excursions.length === 0) {
      dispatch(fetchExcursion());
    }
  }, []);

  const setCategory = (categoryName: string) => {
    setCategoryName(categoryName);
  }

  const filterCategory = (categoryName === 'Все') ? 
    excursions.map(item => 
      <ExcursionsItem 
        key={item.id} 
        id={item.id}
        photo={item.teazerPhotoSmall} 
        title={item.title} 
        price={item.price[0].priceChildren}  
      />) :
    excursions
      .filter(item => item.typeTur === categoryName)
      .map(item => 
        <ExcursionsItem 
          key={item.id} 
          id={item.id}
          photo={item.teazerPhotoSmall} 
          title={item.title} 
          price={item.price[0].priceChildren}  
        />)

  return (
    <div className="excursions">
      <CategotyExcursions categoryName={categoryName} setCategory={setCategory} />
      <div className="excursions-content">
        {
          (isLoading) ? filterCategory : [...new Array(6)].map((item, index) => <SceletonExursion key={index} />)
        }
      </div>
    </div>
  )
}