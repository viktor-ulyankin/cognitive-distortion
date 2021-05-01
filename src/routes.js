import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Article from './pages/Article';

const ROUTES = {
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