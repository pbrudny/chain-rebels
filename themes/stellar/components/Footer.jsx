import React from 'react';
import Link from 'gatsby-link';

export default function Footer(props) {
  return (
    <footer id="footer">
      <section>
        <h2>Aliquam sed mauris</h2>
        <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
        <ul className="actions">
          <li><Link to="/generic" className="button">Learn More</Link></li>
        </ul>
      </section>
      <section>
        <h2>Chain Rebels</h2>
        <dl className="alt">
          <dt>Address</dt>
          <dd>20-22 Wenlock Road&bull; London, N1 7GU &bull; UK</dd>
          <dt>Phone</dt>
          <dd>(+48) 601 - 387 - 386</dd>
          <dt>Email</dt>
          <dd><a href="#">pbrudny@gmail.com</a></dd>
        </dl>
        <ul className="icons">
          <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
          <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
        </ul>
      </section>
      <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
  )
}
