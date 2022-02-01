import React from 'react';

const Footer: React.FC = () => {
  const today = new Date();
  const startCopyrightYear = 2021;
  const endCopyrightYear = today.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__item">
          ©&nbsp;
          { startCopyrightYear === endCopyrightYear ? startCopyrightYear : `${startCopyrightYear}—${endCopyrightYear}` }
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