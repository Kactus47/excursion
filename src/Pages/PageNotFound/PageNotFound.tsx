import React, { useEffect } from 'react';

export const PageNotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Страница не найдена'    
  }, [])
  return (
    <>Not Found</>
  )
}