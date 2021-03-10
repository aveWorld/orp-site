import React from 'react';
import Header from './Header';

const AddLayout = (props) => (
  <div>
    <Header />
    <main className="page">
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </main>
  </div>
);

export default AddLayout;
