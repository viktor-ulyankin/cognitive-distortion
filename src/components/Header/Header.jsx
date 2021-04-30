import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';

const Header = ({ closingBurger, onBurgerClick }) => (
  <header className="header">
    <div className="header__box">
      <div className="header__item">
        <button className={`header__burger${closingBurger ? ' header__burger_closing' : ''}`} onClick={onBurgerClick} type="button" aria-label="Показать/скрыть меню" />
      </div>

      <div className="header__item header__item_title">
        <Link className="header__title" to="/">Когнитивные искажения</Link>
      </div>

      <div className="header__item header__item_search">
        <Search />
      </div>
    </div>
  </header>
);

export default Header;