import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => (
  <div className="layout">
    <header className="layout__header">
      <Link className="layout__sidebar-menu-link" to="/">Главная страница</Link>
    </header>

    <main className="layout__main">
      <article className="layout__article">
        { children }
      </article>

      <nav className="layout__sidebar">
        <div className="layout__sidebar-group">
          <ul className="layout__sidebar-menu">
            <li className="layout__sidebar-menu-item">
              <NavLink className="layout__sidebar-menu-link" activeClassName="layout__sidebar-menu-link_active" to="/article">Первая статья</NavLink>
            </li>

            <li className="layout__sidebar-menu-item">
              <NavLink className="layout__sidebar-menu-link" activeClassName="layout__sidebar-menu-link_active" to="/article">Первая статья</NavLink>
            </li>

            <li className="layout__sidebar-menu-item">
              <NavLink className="layout__sidebar-menu-link" activeClassName="layout__sidebar-menu-link_active" to="/article">Первая статья</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </main>

    <footer className="layout__footer">
      FOOTER
    </footer>
  </div>
);

export default Layout;