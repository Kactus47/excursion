import React, { useRef, useState } from 'react';
import './Form.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchReview } from '../../redux/slice/reviews/asyncActions';

export const Form:React.FC = () => {

  const userReference = useRef<HTMLInputElement | null>(null);
  const textReference = useRef<HTMLTextAreaElement | null>(null);
  const reviewsGroup = useSelector((state: RootState) => state.reviewsLoading.reviews)
  const [isSendReviews, setIsSendReviews] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sendReviews = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      "id": reviewsGroup.length,
      "name": userReference.current?.value,
      "text": textReference.current?.value,
      "isFront": 0
    }

    fetch('https://6515538adc3282a6a3ce39ce.mockapi.io/Reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Указываем, что отправляем JSON
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при отправке данных на сервер');
      } else {
        setIsSendReviews(true);
        dispatch(fetchReview());
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
  }
  
  return (
    <>
    {
      !isSendReviews ? 
        <form onSubmit={sendReviews} className="form" method="post" action="">
          <div className="form__item">
            <input 
              ref={userReference} 
              className="form__input"
              required
              placeholder="Ваше имя" 
              type="text" 
              name="user-name"
            />
          </div>
          <div className="form__item">
            <textarea 
              ref={textReference} 
              required 
              placeholder="Текст вашего отзыва"
              name="text-reviews" 
              className="form__textarea">
            </textarea>
          </div>
          <div className="form__actions">
            <input 
              className="form__submit btn"
              type="submit"
              name="op"
              value="Отправить вопрос" 
            />
          </div>
        </form>
        :
        <div className="successful-send-reviews">Спасибо!!! Ваш отзыв успешно добавлен на сайт.</div>
    }
  </>
  )
}