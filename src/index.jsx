import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Title from './components/Title';

ReactDOM.render(
  <Layout>
    <Title level={2}>Я заголовок!</Title>
  </Layout>,
  document.getElementById('root'),
);