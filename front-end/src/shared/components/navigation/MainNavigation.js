import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';

const MainNavigation = () => {
  return(
    <MainHeader>
      <button>
        <span/>
        <span/>
        <span/>
      </button>
      <h1>
        <Link to="/dashboard">
          Sume Job Tracker
        </Link>
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  )
};

export default MainNavigation;