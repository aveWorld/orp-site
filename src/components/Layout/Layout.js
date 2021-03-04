import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <div className="layout">
    <Header />
    <main className="page">
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
