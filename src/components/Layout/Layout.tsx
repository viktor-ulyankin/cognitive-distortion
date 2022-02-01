import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import ListMenu from '../ListMenu';
import { actionToggleSidebar } from '../../store/actions';
import { RootState } from '../../store/reducers';

const Layout: React.FC = ({ children }) => {
  const showSidebar = useSelector((state: RootState) => state.showSidebar);
  const dispatch = useDispatch();

  function handlerBurgerClick() {
    dispatch(actionToggleSidebar(showSidebar));
  }

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