import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './helpers/css/common.css';
import ROUTES from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {Object.keys(ROUTES).map((key) => <Route key={key} {...ROUTES[key]} />)}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// Пример SSR с react-router-dom https://reactrouter.com/web/guides/server-rendering/putting-it-all-together