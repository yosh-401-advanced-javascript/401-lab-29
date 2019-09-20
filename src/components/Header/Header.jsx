
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export default () => {
  return (
      <>
        <nav>
          <ul>
            <li> <Link to="/home"> Home </Link></li>
            <li> <Link to="/page"> Page </Link></li>
            <li> <Link to="/about"> About Us </Link></li>
          </ul>
        </nav>
      </>
  );
};
