import React from 'react';
import "./about.scss";

export const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__title">
          <div className="title">О нас</div>
          <div className="slogan">Мы<br /> исполняем<br /> мечты</div>
        </div>
        <div className="about__text">
          <div>
            Мы компания экскурсии в Паттайе. Мы делаем всё возможное для того, чтобы ваш отдых был еще более комфортным, интересным и безопасным. Наша особенность в том, что мы предлагаем возможность заказать любые туристические услуги в городе Паттайя через интернет или по телефону. Самые выгодные цены при высоком качестве услуг. Все услуги и предложения можно заказать без регистрации прямо на сайте. Просто делайте заказ и наслаждайтесь отдыхом, компания Online-Pattaya.ru позаботится обо всем.
          </div>
        </div>
      </div>
    </div>
  )
}