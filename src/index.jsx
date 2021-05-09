import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './helpers/css/common.css';
import ROUTES from './routes';
import Layout from './components/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        {Object.keys(ROUTES).map((key) => <Route key={key} {...ROUTES[key]} />)}
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);

// Пример SSR с react-router-dom https://reactrouter.com/web/guides/server-rendering/putting-it-all-together