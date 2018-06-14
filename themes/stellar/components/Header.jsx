import React from 'react';
import logo from '../images/logo.svg';

export default function Header(props) {
  return (
    <header id="header" className="alt">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <h1>Chain Rebels</h1>
      <p>We create a new decentralized economy.</p>
    </header>
  )
}
