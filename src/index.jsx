import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './helpers/css/common.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger/src';
import ROUTES from './routes';
import Layout from './components/Layout';
import reducer from './store/reducers';
import rootSaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

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