import React, { useEffect } from 'react';

export const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Страница не найдена'    
  }, [])
  return (
    <div className="container">
      <div className="page-404">
          404 Not Found
      </div>
    </div>
  )
}