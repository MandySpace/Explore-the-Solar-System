import logo from "../img/logo.png";
import twitter from "../img/twitter.svg";
import github from "../img/github.svg";
import gmail from "../img/gmail.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo-box">
        <img src={logo} alt="Website logo" className="footer__logo" />
        <h2 className="footer__name">Astra</h2>
      </Link>

      <ul className="list">
        <li>
          <Link to="/" className="list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/planets" className="list-item">
            Planets
          </Link>
        </li>
        <li>
          <Link to="/space-exploration" className="list-item">
            Space Exploration
          </Link>
        </li>
        <li>
          <Link to="/nasa-eye" className="list-item">
            Virtual Tour
          </Link>
        </li>
      </ul>

      <div className="contact">
        <h5>Contact On</h5>
        <div className="svg-container">
          <div className="svg">
            <a
              href="https://twitter.com/AmanMandy94"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </div>
          <div className="svg">
            <a
              href="https://github.com/MandySpace"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </div>
          <div className="svg">
            <a
              href="mailto:amandeepsingh1994@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="" />
            </a>
          </div>
        </div>
      </div>

      <p>© 2021 Amandeep Singh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
