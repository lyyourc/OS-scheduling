import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Details from '../components/details/Details';

const App = () => {
  return (
    <div className="container ui grid">
      <Header />
      <Sidebar />
      <Details />
    </div>
  );
};

export default App;
