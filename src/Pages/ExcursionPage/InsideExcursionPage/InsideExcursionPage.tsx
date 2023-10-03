import React, { useEffect, useState } from 'react';
import { PropsBreadcrumbsType } from '../../../Components/Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../../../Components/PageHeader/PageHeader';
import './InsideExcursionPage.scss';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { ExcursionObject } from '../../../redux/slice/excursions/types';


export const InsideExcursionPage: React.FC = () => {
  const settingsPhotoSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const breadcrumbsList: PropsBreadcrumbsType[] = [
    {
      name: "Каталог экскурсий",
      url: "excursions"
    }
  ]
  const { id } = useParams();
  const [excursionInfo, setExcursionInfo] = useState<ExcursionObject>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    async function fetchExcursion() {
      try {
        await fetch('https://651161ac829fa0248e3ff983.mockapi.io/Excursions/' + id)
          .then(res => res.json())
          .then(excursion => {
            setExcursionInfo(excursion)
            setIsLoading(true)
          });
      } catch (error) {
        alert('Ошибка при получении блога!');
      }
    }

    fetchExcursion();

      

  }, [])
  
  if(excursionInfo != undefined) {
      document.title = excursionInfo.title;    
  }

  return (
    <main className="content">
      <PageHeader breadcrumbsList={breadcrumbsList} title="Советы туристам" />
      <div className="container">
        {
          !isLoading ? 'загрузка' :
            excursionInfo &&
            <div className="excursion-content">
              <div className="title-page">
                <h1 className="title-page__h1">{excursionInfo.title}</h1>
                <div className="title-page__description">{excursionInfo.location}</div>
              </div>
              <Slider {...settingsPhotoSlider}>
                {
                  excursionInfo.sliderPhoto.map((photoUrl, index) => {
                    return (
                      <img key={index} src={photoUrl} alt="" />
                    )
                  })
                }
              </Slider>
              <div className="excursion-content__table table">
                <table>
                  <thead>
                    <tr>
                      <th>Варианты проведения</th>
                      <th>Цена взр. (бат)</th>
                      <th>Цена дет. (бат)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      excursionInfo.price.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.priceGrown}</td>
                            <td>{item.priceChildren}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className="excursion-content__information information_block">
                <div className="information_block__item">
                  <div className="information_block__label">Дней на тур:</div>
                  {excursionInfo.infoTour.duration}		
                </div>
                <div className="information_block__item">
                  <div className="information_block__label">В какие дни:</div>
                  {excursionInfo.infoTour.days}		
                </div>
                <div className="information_block__item">
                  <div>Выезд: {excursionInfo.infoTour.time[0]}</div>
                  <div>Возврат: {excursionInfo.infoTour.time[1]}</div>                  
                </div>
                <div className="information_block__item">
                  Трансфер: {excursionInfo.infoTour.transfer} B					
                </div>
                <div className="information_block__item">
                  <div className="information_block__label">Прием заказов:</div>
                  {excursionInfo.infoTour.callTimes}
                </div>
              </div>
              {
                excursionInfo.placeDescription.topText && 
                <div className="excursion-content__description">
                  {excursionInfo.placeDescription.topText}
                </div>
              }
            </div>
        }
      </div>
    </main>
  )
}