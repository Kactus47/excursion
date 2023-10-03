import React from 'react';

export const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="copyrait">
          © {currentYear}. Туристический сервис в Паттайе.<br /> Все права на публикуемые материалы защищены.
        </div>
        <div className="social">
          <div className="social__title">Мы в социальных сетях:</div>
          <a className="social__link social__link-vk" href="/"></a>
          <a className="social__link social__link-fb" href="/"></a>
          <a className="social__link social__link-tw" href="/"></a>
        </div>
      </div>
    </div>   
  )
}