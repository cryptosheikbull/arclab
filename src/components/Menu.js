import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={{ width: '220px', backgroundColor: '#001F3F', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Link to="/ecosystem" className="menu-link" style={{ marginBottom: '30px' }}>Non-official Ecosystem DApps</Link>
      <Link to="/playground" className="menu-link" style={{ marginBottom: '30px' }}>Playground</Link>
      <Link to="/about" className="menu-link">About Us</Link>
    </nav>
  );
};

export default Menu;