import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Pepper</Link>
    {' | '}
    <Link to="/about">About Us</Link>
    {' | '}
    <Link to="/ourServices">Our Services</Link>
    {' | '}
    <Link to="/newsAndGuides">News and Guides</Link>
    {' | '}
    <Link to="/seniorTeam">Our Senior Team</Link>
  </nav>
);

export default Header;
