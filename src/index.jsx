import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './common.css';
import Home from './pages/Home';
import Article from './pages/Article';
import Title from './components/Title';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/article/:id">
        <Article />
      </Route>
      <Route path="*">
        <Title>404</Title>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// Пример SSR с react-router-dom https://reactrouter.com/web/guides/server-rendering/putting-it-all-together