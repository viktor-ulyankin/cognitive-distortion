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
      <Route exact path="/article">
        <Article />
      </Route>
      <Route>
        <Title>404</Title>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);