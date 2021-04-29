import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ListMenu from '../ListMenu';

const Layout = ({ children }) => (
  <div className="layout">
    <Header closingBurger />

    <main className="layout__main">
      <article className="layout__article">
        { children }
      </article>

      <nav className="layout__sidebar">
        <div className="layout__sidebar-box">
          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 1,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 2,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 3,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 4,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 5,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 6,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 7,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 8,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 9,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 10,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 11,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 12,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 13,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 14,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 15,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 16,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 17,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 18,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 19,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 20,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 21,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 22,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 23,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 24,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 25,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 26,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 27,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>

          <div className="layout__sidebar-group">
            <ListMenu
              links={
                [
                  {
                    id: 28,
                    name: 'Первая статья',
                    link: '/article/1',
                  },
                  {
                    id: 29,
                    name: 'Вторая статья',
                    link: '/article/2',
                  },
                  {
                    id: 30,
                    name: 'Третья статья',
                    link: '/article/3',
                  },
                ]
              }
            />
          </div>
        </div>
      </nav>
    </main>

    <Footer />
  </div>
);

export default Layout;