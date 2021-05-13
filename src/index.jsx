import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './helpers/css/common.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ROUTES from './routes';
import Layout from './components/Layout';
import reducer from './store/reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          {Object.keys(ROUTES).map((key) => <Route key={key} {...ROUTES[key]} />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// Пример SSR с react-router-dom https://reactrouter.com/web/guides/server-rendering/putting-it-all-together