import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ closingBurger }) => (
  <header className="header">
    <div className="header__box">
      <div className="header__item">
        <button className={`header__burger${closingBurger ? ' header__burger_closing' : ''}`} type="button" aria-label="Показать/скрыть меню" />
      </div>

      <div className="header__item header__item_title">
        <Link className="header__title" to="/">Когнитивные искажения</Link>
      </div>

      <div className="header__item">
        SEARCH
      </div>
    </div>
  </header>
);

export default Header;