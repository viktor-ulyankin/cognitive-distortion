import React from 'react';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="layout__el">
      el
    </div>
    { children }
  </div>
);

export default Layout;