import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import Title from './components/title/Title';

ReactDOM.render(
    <Layout>
        <Title level={2}>Я заголовок!</Title>
    </Layout>,
    document.getElementById('root')
);