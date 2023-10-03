import React from 'react';
import "./categotyExcursions.scss";

type PropsCategoryExcursions = {
  setCategory: (categoryName: string) => void;
  categoryName: string;
}

export const CategotyExcursions: React.FC<PropsCategoryExcursions> = ({setCategory, categoryName}) => {
  
  const categoryExcursions: string[] = ['Рыбалка', 'Экскурсия', 'Отдых'];



  return (
    <div className="category">
    <span 
      onClick={() => setCategory('Все')}
      className={`category__tab ${categoryName === 'Все' ? 'category__tab-active' : ''}`}
      >Все</span>
    {
      categoryExcursions.map((item, index) => {
        return (
          <span 
            onClick={() => 
            setCategory(item)}
            key={index}
            className={`category__tab ${categoryName === item ? 'category__tab-active' : ''}`}
          >{item}</span>
        )
      })
    }
  </div>
  )
}