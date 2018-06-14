import React from 'react';
import picture from '../images/pic01.jpg'
import Link from 'gatsby-link';

export default function Intro(props) {
  return (
    <section id="intro" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Who we are</h2>
          </header>
          <p>We are blockchain specialists with expertize in smart contracts. Solidity and Ethereum.</p>
          <ul className="actions">
            <li><Link to="/generic" className="button">Learn More</Link></li>
          </ul>
        </div>
        <span className="image"><img src={picture} alt="" /></span>
      </div>
    </section>
  )
}
