import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">个人博客</div>
        <ul className="nav-links">
          <li><a href="/blog/">首页</a></li>
          <li><a href="#about">关于</a></li>
          <li><a href="#archive">归档</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;