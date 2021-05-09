import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ListMenu from '../ListMenu';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handlerBurgerClick = () => setShowSidebar(!showSidebar);

  return (
    <div className="layout">
      <Header closingBurger={showSidebar} onBurgerClick={handlerBurgerClick} />

      <main className="layout__main">
        <article className="layout__article">
          { children }
        </article>

        <nav className={`layout__sidebar${showSidebar ? ' layout__sidebar_active' : ''}`}>
          <div className="layout__sidebar-box">
            <div className="layout__sidebar-group">
              <ListMenu />
            </div>
          </div>
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;