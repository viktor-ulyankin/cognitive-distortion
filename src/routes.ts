import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Article from './pages/Article';

type Route = {
  exact: boolean,
  path: string,
  component: React.ComponentType,
};
type Routes = Record<string, Route>;

const ROUTES: Routes = {
  'home': {
    exact: true,
    path: '/',
    component: Home,
  },
  'article': {
    exact: true,
    path: '/article/:id',
    component: Article,
  },
  'notFound': {
    exact: false,
    path: '*',
    component: NotFound,
  },
};

export default ROUTES;