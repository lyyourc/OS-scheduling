import React from 'react';

import Resources from './Resources';
import Timer from './Timer';

const Header = () => {
  return (
    <div className="header">
      <Timer className="timer"/>
      <Resources className="resouces"/>
    </div>
  );
};

export default Header;
