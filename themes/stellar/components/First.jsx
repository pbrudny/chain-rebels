import React from 'react';
import Link from 'gatsby-link';

export default class First extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="first" className="main special">
        <header className="major">
          <h2>We offer</h2>
        </header>
        <ul className="features">
          <li>
            <span className="icon major style1 fa-code"></span>
            <h3>Smart contracts</h3>
            <p>We design and implement smart contracts for Ethereum.</p>
          </li>
          <li>
            <span className="icon major style3 fa-copy"></span>
            <h3>Custom blockchains</h3>
            <p>We can help you with building private blockchain.</p>
          </li>
          <li>
            <span className="icon major style5 fa-diamond"></span>
            <h3>Personal tokens</h3>
            <p>We can help you with personal tokens for yourself or for your brand. </p>
          </li>
        </ul>
        <footer className="major">
          <ul className="actions">
            <li>
              <Link to="/generic" className="button">Learn More</Link>
            </li>
          </ul>
        </footer>
      </section>
    )
  }
}
