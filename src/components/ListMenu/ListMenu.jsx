import React from 'react';
import { NavLink } from 'react-router-dom';

const ListMenu = ({ links }) => (
  <nav className="list-menu">
    <ul className="list-menu__list">
      {links.map((item) => (
        <li className="list-menu__item">
          <NavLink key={item.id} className="list-menu__link" activeClassName="list-menu__link_active" to={item.link}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default ListMenu;