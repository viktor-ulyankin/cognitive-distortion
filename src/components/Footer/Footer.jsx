import React from 'react';

const Footer = () => {
  const strData = '2021—2021';

  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__item">
          ©&nbsp;
          { strData }
          &nbsp; Виктор Ульянкин
        </div>

        <div className="footer__item">
          <a href="https://github.com/viktor-ulyankin/cognitive-distortion" target="_blank" rel="nofollow noopener noreferrer">Редактировать на GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;