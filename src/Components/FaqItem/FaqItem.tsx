import React, { useRef } from 'react';
import './FaqItem.scss';

type FaqItemProps = {
  title: string;
  text: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({title, text}) => {
  const divTitleRef = useRef<HTMLDivElement>(null)
  
  const readFaq = () => {
    divTitleRef.current?.parentElement?.classList.toggle('active');
  }

  return (
    <div className="faq-item">
      <div ref={divTitleRef} onClick={readFaq} className="faq-item__title">{title}</div>
      <div className="faq-item__text" dangerouslySetInnerHTML={{__html: text}} />
    </div>
  )
}